<?php

namespace App\Http\Controllers;

use App\Models\Member;
use App\Models\Store;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class MemberController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request)
    {
        $query = Member::query()->with('user', 'store')->when($request->get('search'), function ($query, $search) {
            $search = strtolower(trim($search));
            return $query->whereRaw('LOWER(name) LIKE ?', ["%$search%"]);
        })->when($request->get('sort'), function ($query, $sortBy) {
            return $query->orderBy($sortBy['key'], $sortBy['order']);
        });

        if ($request->get('limit') == -1) {
            $data = $query->paginate($query->count());
        } else {
            $data = $query->paginate($request->get('limit', 10));
        }
        // dd($data);

        return Inertia::render('Member/Index', [
            'data' => $data
        ]);
    }

    public function toko($id)
    {
        $id = $id;
        return Inertia::render('Member/Toko', [
            'id' => $id
        ]);
    }

    public function TokoStore(Request $request)
    {
        $this->validate($request, [
            'code' => ['required'],
            'name' => ['required'],
            'owner_id' => ['required'],
            'address' => ['required'],
            'phone' => ['required'],
            'phone_with_whatsapp' => ['required'],
            'type' => ['required'],
            'taxpayer_identification_number' => ['required'],
        ]);

        $store = Store::create($request->all());
        $message = sprintf('Successfully created %s', $store->name);

        return redirect()->back()->with('success', $message);
    }

    public function create()
    {
        return Inertia::render('Member/Create');
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

        $member = Member::create($request->all());
        $message = sprintf('Successfully created %s', $member->name);

        return redirect()->back()->with('success', $message);
    }

    public function edit(Member $member)
    {
        $member = Member::with('user')->find($member->id);
        return Inertia::render('Member/Edit', [
            'member' => $member
        ]);
    }

    public function update(Member $member, Request $request)
    {
        $data = $this->validate($request, [
            'name' => ['required'],
            'nameUser' => ['required'],
            'email' => ['nullable', 'email'],
            'phone' => ['nullable'],
        ]);
        $member->update($data);
        $user = User::find($member->user_id);
        $user->name = $request->nameUser;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->save();
        $message = sprintf('Successfully updated %s', $member->name);

        return redirect()->back()->with('success', $message);
    }

    public function destroy(Member $member)
    {
        $member->delete();
        $message = sprintf('Successfully deleted %s', $member->name);

        return redirect()->back()->with('success', $message);
    }

    public function show(Member $member)
    {
        $member = Member::with('user')->find($member->id);
        return Inertia::render('Member/Show', [
            'member' => $member
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

        $data = User::find($id);
        if($data->is_blocked == 1){
            $data->is_blocked = 0;
        }else{
            $data->is_blocked = 1;
        }
        $data->save();

        return Inertia::location('/member');
    }
}
