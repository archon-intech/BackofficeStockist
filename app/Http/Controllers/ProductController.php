<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request)
    {
        $query = Product::query()->when($request->get('search'), function ($query, $search) {
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

        return Inertia::render('Product/Index', [
            'data' => $data
        ]);
    }

    public function create()
    {
        return Inertia::render('Product/Create');
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

        $product = Product::create($request->all());
        $message = sprintf('Successfully created %s', $product->name);

        return redirect()->back()->with('success', $message);
    }

    public function edit(Product $product)
    {
        return Inertia::render('Product/Edit', [
            'product' => $product
        ]);
    }

    public function update(Product $product, Request $request)
    {
        $data = $this->validate($request, [
            'sku' => ['required'],
            'name' => ['required'],
            'price' => ['required'],
            'description' => ['required'],
            'ingredients' => ['required'],
            'benefits' => ['required'],
            'usage' => ['required'],
            'point' => ['required'],
            'weight' => ['required'],
            'length' => ['required'],
            'width' => ['required'],
            'height' => ['required'],
            'type' => ['required'],

        ]);
        $data['is_enabled'] = 1;
        $data['slug'] = $slug = Str::slug($request->name);
        $product->update($data);
        $message = sprintf('Successfully updated %s', $product->name);

        return redirect()->back()->with('success', $message);
    }

    public function destroy(Product $product)
    {
        $product->delete();
        $message = sprintf('Successfully deleted %s', $product->name);

        return redirect()->back()->with('success', $message);
    }

    public function show(Product $product)
    {
        return Inertia::render('Product/Show', [
            'product' => $product
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

        $data = Product::find($id);
        if($data->is_enabled == 1){
            $data->is_enabled = 0;
        }else{
            $data->is_enabled = 1;
        }
        $data->save();

        return Inertia::location('/product');
    }
}
