<?php

namespace App\Http\Controllers;

use App\Models\Store;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class OfficialStoreController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request)
    {
        $query = Store::query()->where('official',1)->with('member','member.user')->when($request->get('search'), function ($query, $search) {
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
        // dd($data);

        return Inertia::render('OfficialStore/Index', [
            'data' => $data
        ]);
    }

    public function create()
    {
        return Inertia::render('OfficialStore/Create');
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

        $store = Store::create($request->all());
        $message = sprintf('Successfully created %s', $store->name);

        return redirect()->back()->with('success', $message);
    }

    public function edit(Store $store)
    {
        return Inertia::render('OfficialStore/Edit', [
            'store' => $store
        ]);
    }

    public function update(Store $store, Request $request)
    {
        $data = $this->validate($request, [
            'code' => ['required'],
            'name' => ['required'],
            'address' => ['required'],
            'phone' => ['required'],
            'phone_with_whatsapp' => ['required'],
            'type' => ['required'],
            'taxpayer_identification_number' => ['required'],
        ]);
        $store->update($data);
        $message = sprintf('Successfully updated %s', $store->name);

        return redirect()->back()->with('success', $message);
    }

    public function destroy(Store $store)
    {
        $store->delete();
        $message = sprintf('Successfully deleted %s', $store->name);

        return redirect()->back()->with('success', $message);
    }

    public function show(Store $store)
    {
        return Inertia::render('OfficialStore/Show', [
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

        $data = Store::find($id);
        if($data->is_blocked == 1){
            $data->is_blocked = 0;
        }else{
            $data->is_blocked = 1;
        }
        $data->save();

        return Inertia::location('/officialstore');
    }
}
