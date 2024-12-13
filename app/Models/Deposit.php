<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Auditable;

class Deposit extends Model
{
    use HasFactory;
    use Auditable;

    protected $table = 'deposit';

    protected $fillable = [
        'owner_id',
        'code',
        'amount',
        'discount',
        'total',
        'status',
        'data',
        'payment_method',
        'product_price',
        'product_quantity',
        'product_discount',
        'product_discount_type',
        'product_total',
        'starter_kit_price',
        'starter_kit_quantity',
        'starter_kit_discount',
        'starter_kit_discount_type',
        'starter_kit_total',
        'tax_ratio',
        'tax',
        'rabat_pajak',
        'rabat',
        'created_at',
        'updated_at',
        'closed_at',
        'created_by',
        'updated_by',
        
    ];

    public function member()
    {
        return $this->belongsTo(Member::class, 'owner_id');
    }
}
