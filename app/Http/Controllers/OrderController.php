<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request)
    {
        $query = Order::query()->with('seller', 'seller.user')->whereNotNull('seller_id')->when($request->get('search'), function ($query, $search) {
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

        return Inertia::render('Order/Index', [
            'data' => $data
        ]);
    }

    public function create()
    {
        return Inertia::render('Order/Create');
    }

    public function order(Request $request)
    {
        $this->validate($request, [
            'name' => ['required'],
            'gender' => ['required'],
            'email' => ['nullable', 'email'],
            'phone' => ['nullable'],
            'address' => ['nullable'],
        ]);

        $order = Order::create($request->all());
        $message = sprintf('Successfully created %s', $order->name);

        return redirect()->back()->with('success', $message);
    }

    public function edit(Order $order)
    {
        return Inertia::render('Order/Edit', [
            'order' => $order
        ]);
    }

    public function update(Order $order, Request $request)
    {
        $data = $this->validate($request, [
            'name' => ['required'],
            'gender' => ['required'],
            'email' => ['nullable', 'email'],
            'phone' => ['nullable'],
            'address' => ['nullable'],
        ]);
        $order->update($data);
        $message = sprintf('Successfully updated %s', $order->name);

        return redirect()->back()->with('success', $message);
    }

    public function destroy(Order $order)
    {
        $order->delete();
        $message = sprintf('Successfully deleted %s', $order->name);

        return redirect()->back()->with('success', $message);
    }

    public function show(Order $order)
    {
        return Inertia::render('Order/Show', [
            'order' => $order
        ]);
    }
}
