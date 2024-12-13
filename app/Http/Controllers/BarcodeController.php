<?php

namespace App\Http\Controllers;

use App\Models\Barcode;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BarcodeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request)
    {
        $query = Barcode::query()->with('owner', 'order', 'creator')->when($request->get('search'), function ($query, $search) {
            $search = strtolower(trim($search));
            return $query->whereRaw('LOWER(name) LIKE ?', ["%$search%"]);
        })->when($request->get('sort'), function ($query, $sortBy) {
            return $query->barcodeBy($sortBy['key'], $sortBy['barcode']);
        });

        if($request->get('limit') == -1){
            $data = $query->paginate($query->count());
        }else{
            $data = $query->paginate($request->get('limit', 10));
        }
        // dd($data);

        return Inertia::render('Barcode/Index', [
            'data' => $data
        ]);
    }

    public function create()
    {
        return Inertia::render('Barcode/Create');
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

        $barcode = Barcode::create($request->all());
        $message = sprintf('Successfully created %s', $barcode->name);

        return redirect()->back()->with('success', $message);
    }

    public function edit(Barcode $barcode)
    {
        return Inertia::render('Barcode/Edit', [
            'barcode' => $barcode
        ]);
    }

    public function update(Barcode $barcode, Request $request)
    {
        $data = $this->validate($request, [
            'name' => ['required'],
            'gender' => ['required'],
            'email' => ['nullable', 'email'],
            'phone' => ['nullable'],
            'address' => ['nullable'],
        ]);
        $barcode->update($data);
        $message = sprintf('Successfully updated %s', $barcode->name);

        return redirect()->back()->with('success', $message);
    }

    public function destroy(Barcode $barcode)
    {
        $barcode->delete();
        $message = sprintf('Successfully deleted %s', $barcode->name);

        return redirect()->back()->with('success', $message);
    }

    public function show(Barcode $barcode)
    {
        return Inertia::render('Barcode/Show', [
            'barcode' => $barcode
        ]);
    }
}
