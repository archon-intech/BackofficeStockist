<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Auditable;

class Barcode extends Model
{
    use HasFactory;
    use Auditable;

    protected $table = 'barcode';

    protected $fillable = [
        'id',
        'code',
        'type',
        'seller_id',
        'owner_id',
        'order_id',
        'creator_id',
        'variant',
        'created_by',
        'updated_by',
        'created_at',
        'updated_at',
        'owned_at',
        'sold_at',
    ];

    public function barcodeHistories()
    {
        return $this->belongsTo(BarcodeHistory::class, 'barcode_id');
    }

    public function owner()
    {
        return $this->belongsTo(Member::class, 'owner_id');
    }

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
}

