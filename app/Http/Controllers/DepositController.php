<?php

namespace App\Http\Controllers;

use App\Models\Deposit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Validation\ValidationException;

class DepositController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request)
    {
        $query = Deposit::query()->with('member', 'member.user')->when($request->get('search'), function ($query, $search) {
            $search = strtolower(trim($search));
            return $query->whereRaw('LOWER(name) LIKE ?', ["%$search%"]);
        })->when($request->get('sort'), function ($query, $sortBy) {
            return $query->depositBy($sortBy['key'], $sortBy['deposit']);
        });

        if($request->get('limit') == -1){
            $data = $query->paginate($query->count());
        }else{
            $data = $query->paginate($request->get('limit', 10));
        }
        // dd($data);

        return Inertia::render('Deposit/Index', [
            'data' => $data
        ]);
    }

    public function create()
    {
        return Inertia::render('Deposit/Create');
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => ['required'],
            'gender' => ['required'],
            'email' => ['nullable', 'email'],
            'phone' => ['nullable'],
            'address' => ['nullable'],
        ]);

        $deposit = Deposit::create($request->all());
        $message = sprintf('Successfully created %s', $deposit->name);

        return redirect()->back()->with('success', $message);
    }

    public function edit(Deposit $deposit)
    {
        return Inertia::render('Deposit/Edit', [
            'deposit' => $deposit
        ]);
    }

    public function update(Deposit $deposit, Request $request)
    {
        $data = $this->validate($request, [
            'name' => ['required'],
            'gender' => ['required'],
            'email' => ['nullable', 'email'],
            'phone' => ['nullable'],
            'address' => ['nullable'],
        ]);
        $deposit->update($data);
        $message = sprintf('Successfully updated %s', $deposit->name);

        return redirect()->back()->with('success', $message);
    }

    public function destroy(Deposit $deposit)
    {
        $deposit->delete();
        $message = sprintf('Successfully deleted %s', $deposit->name);

        return redirect()->back()->with('success', $message);
    }

    public function show(Deposit $deposit)
    {
        return Inertia::render('Deposit/Show', [
            'deposit' => $deposit
        ]);
    }

    public function activate(Request $request, $id)
    {
        $request->validate([
            'password' => 'required|string',
        ]);

        $user = Auth::user();

        if (!Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'password' => ['The provided password is incorrect.'],
            ]);
        }

        $data = Deposit::find($id);
        if($data->status == 'D'){
            $data->status = 'P';
        }else{
            $data->status = 'D';
        }
        $data->save();

        return Inertia::location('/deposit');
    }
}
