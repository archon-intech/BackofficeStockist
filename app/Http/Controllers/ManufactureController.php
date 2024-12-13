<?php

namespace App\Http\Controllers;

use App\Models\Manufacture;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ManufactureController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request)
    {
        $query = Manufacture::query()->when($request->get('search'), function ($query, $search) {
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

        return Inertia::render('Manufacture/Index', [
            'data' => $data
        ]);
    }

    public function create()
    {
        return Inertia::render('Manufacture/Create');
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

        $store = Manufacture::create($request->all());
        $message = sprintf('Successfully created %s', $store->name);

        return redirect()->back()->with('success', $message);
    }

    public function edit(Manufacture $store)
    {
        return Inertia::render('Manufacture/Edit', [
            'store' => $store
        ]);
    }

    public function update(Manufacture $store, Request $request)
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

    public function destroy(Manufacture $store)
    {
        $store->delete();
        $message = sprintf('Successfully deleted %s', $store->name);

        return redirect()->back()->with('success', $message);
    }

    public function show(Manufacture $store)
    {
        return Inertia::render('Manufacture/Show', [
            'store' => $store
        ]);
    }
}
