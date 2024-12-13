<?php

namespace App\Http\Controllers;

use App\Models\Paket;
use App\Models\PaketHasProduct;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PaketController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request)
    {
        $query = Paket::query()->when($request->get('search'), function ($query, $search) {
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

        return Inertia::render('Paket/Index', [
            'data' => $data
        ]);
    }

    public function create()
    {
        $products = Product::where('is_enabled', 1)->get();
        return Inertia::render('Paket/Create', [
            'products' => $products
        ]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => ['required'],
            'price' => ['required'],
            'is_enabled' => ['required'],
        ]);

        $paket = Paket::create($request->all());
        foreach($request->product as $key => $p){
            $data = PaketHasProduct::create([
                'paket_id' => $paket->id,
                'product_id' => $key,
                'qty' => $p
            ]);
        }
        $message = sprintf('Successfully created %s', $paket->name);

        return redirect()->back()->with('success', $message);
    }

    public function edit(Paket $paket)
    {
        $products = Product::where('is_enabled', 1)->get();

        return Inertia::render('Paket/Edit', [
            'paket' => $paket,
            'products' => $products
        ]);
    }

    public function update(Paket $paket, Request $request)
    {
        $data = $this->validate($request, [
            'name' => ['required'],
            'price' => ['required'],
            'is_enabled' => ['required'],
        ]);
        $paket->update($data);
        $paket->paketHasProducts()->delete();
        foreach($request->product as $key => $p){
            $data = PaketHasProduct::create([
                'paket_id' => $paket->id,
                'product_id' => $key,
                'qty' => $p
            ]);
        }
        $message = sprintf('Successfully updated %s', $paket->name);

        return redirect()->back()->with('success', $message);
    }

    public function destroy(Paket $paket)
    {
        $paket->delete();
        $paket->paketHasProducts()->delete();
        $message = sprintf('Successfully deleted %s', $paket->name);

        return redirect()->back()->with('success', $message);
    }

    public function show(Paket $paket)
    {
        $paket_has_products = Paket::join('paket_has_products', 'pakets.id', '=', 'paket_has_products.paket_id')
            ->join('product', 'paket_has_products.product_id', '=', 'product.id')
            ->where('pakets.id', $paket->id)
            ->get();
        return Inertia::render('Paket/Show', [
            'paket' => $paket,
            'paket_has_products' => $paket_has_products
        ]);
    }
}
