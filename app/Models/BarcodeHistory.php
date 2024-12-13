<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Auditable;

class BarcodeHistory extends Model
{
    use HasFactory;
    use Auditable;

    protected $table = 'barcode_history';

    protected $fillable = [
        'type',
        'barcode_id',
        'cashier_id',
        'order_id',
        'seller_id',
        'buyer_id',
        'creator_id',
        'at',
        'created_at',
        'updated_at',
        'created_by',
        'updated_by',
        
    ];

    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id');
    }

    public function creator()
    {
        return $this->belongsTo(Member::class, 'creator_id');
    }

    public function seller()
    {
        return $this->belongsTo(Member::class, 'seller_id');
    }

    public function buyer()
    {
        return $this->belongsTo(Member::class, 'buyer_id');
    }

    public function cashier()
    {
        return $this->belongsTo(Member::class, 'cashier_id');
    }
}

