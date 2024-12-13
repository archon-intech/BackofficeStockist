<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Auditable;

class Balance extends Model
{
    use HasFactory;
    use Auditable;

    protected $table = 'balance';

    protected $fillable = [
        'owner_id',
        'order_id',
        'deposit_id',
        'barcode_id',
        'code',
        'amount',
        'type',
        'note',        

    ];

    public function owner()
    {
        return $this->belongsTo(Member::class, 'owner_id', 'id');
    }

    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id');
    }

    public function deposit()
    {
        return $this->belongsTo(Deposit::class, 'deposit_id');
    }

    public function barcode()
    {
        return $this->belongsTo(Barcode::class, 'barcode_id');
    }
}
