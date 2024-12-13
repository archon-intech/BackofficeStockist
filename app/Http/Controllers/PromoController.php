<?php

namespace App\Http\Controllers;

use App\Models\Promo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class PromoController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request)
    {
        $query = Promo::query()->when($request->get('search'), function ($query, $search) {
            $search = strtolower(trim($search));
            return $query->whereRaw('LOWER(name) LIKE ?', ["%$search%"]);
        })->when($request->get('sort'), function ($query, $sortBy) {
            return $query->orderBy($sortBy['key'], $sortBy['order']);
        });

        if($request->get('limit') == -1){
            $data = $query->paginate($query->count());
        }else{
            $data = $query->paginate($request->get('limit', 10));
        }

        return Inertia::render('Promo/Index', [
            'data' => $data
        ]);
    }

    public function create()
    {
        return Inertia::render('Promo/Create');
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

        $store = Promo::create($request->all());
        $message = sprintf('Successfully created %s', $store->name);

        return redirect()->back()->with('success', $message);
    }

    public function edit(Promo $store)
    {
        return Inertia::render('Promo/Edit', [
            'store' => $store
        ]);
    }

    public function update(Promo $store, Request $request)
    {
        $data = $this->validate($request, [
            'name' => ['required'],
            'gender' => ['required'],
            'email' => ['nullable', 'email'],
            'phone' => ['nullable'],
            'address' => ['nullable'],
        ]);
        $store->update($data);
        $message = sprintf('Successfully updated %s', $store->name);

        return redirect()->back()->with('success', $message);
    }

    public function destroy(Promo $store)
    {
        $store->delete();
        $message = sprintf('Successfully deleted %s', $store->name);

        return redirect()->back()->with('success', $message);
    }

    public function show(Promo $store)
    {
        return Inertia::render('Promo/Show', [
            'store' => $store
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

        $data = Promo::find($id);
        if($data->status == 1){
            $data->status = 0;
        }else{
            $data->status = 1;
        }
        $data->save();

        return Inertia::location('/promo');
    }
}
