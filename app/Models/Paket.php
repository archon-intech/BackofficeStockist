<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Auditable;

class Paket extends Model
{
    use HasFactory;
    use Auditable;

    // protected $table = 'promo';

    protected $fillable = [
        'name',
        'price',
        'is_enabled',
    ];

    public function pakethasproducts()
    {
        return $this->hasMany(PaketHasProduct::class);
    }
}
