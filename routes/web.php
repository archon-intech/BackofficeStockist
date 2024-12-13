<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PeopleController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\StoreController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\DepositController;
use App\Http\Controllers\BarcodeController;
use App\Http\Controllers\ManufactureController;
use App\Http\Controllers\BalanceController;
use App\Http\Controllers\OfficialStoreController;
use App\Http\Controllers\PromoController;
use App\Http\Controllers\PaketController;
use App\Models\Manufacture;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect()->route('dashboard');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Route::resource('/people', PeopleController::class)->except(['show']);
Route::resource('/member', MemberController::class);
Route::post('/member/activate/{id}', [MemberController::class, 'activate']);
Route::get('/member/toko/{id}', [MemberController::class, 'toko']);
Route::post('/member/toko', [MemberController::class, 'TokoStore']);
Route::resource('/product', ProductController::class);
Route::post('/product/activate/{id}', [ProductController::class, 'activate']);
Route::resource('/store', StoreController::class);
Route::post('/store/activate/{id}', [StoreController::class, 'activate']);
Route::resource('/officialstore', OfficialStoreController::class);
Route::resource('/order', OrderController::class);
Route::resource('/deposit', DepositController::class);
Route::post('/deposit/activate/{id}', [DepositController::class, 'activate']);
Route::resource('/barcode', BarcodeController::class);
Route::resource('/manufacture', ManufactureController::class);
Route::resource('/balance', BalanceController::class);
Route::resource('/promo', PromoController::class);
Route::post('/promo/activate/{id}', [PromoController::class, 'activate']);
Route::resource('/paket', PaketController::class);
Route::get('/api/check-role', function () {
    $role = 'guest'; // Default role

    if (Auth::check()) {
        $user = Auth::user();
        $role = $user->getRoleNames()->first() ?? 'guest';
    }

    return response()->json([
        'role' => $role
    ]);
});

require __DIR__.'/auth.php';
