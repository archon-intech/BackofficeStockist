<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Auditable;

class PaketHasProduct extends Model
{
    use HasFactory;
    use Auditable;

    protected $table = 'paket_has_products';

    protected $fillable = [
        'paket_id',
        'product_id',
        'qty',
    ];

    public function paket()
    {
        return $this->belongsTo(Paket::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
