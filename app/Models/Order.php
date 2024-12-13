<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Auditable;

class Order extends Model
{
    use HasFactory;
    use Auditable;

    protected $table = 'order';

    protected $fillable = [
        'sku',
        'name',
        'price',
        'description',
        'ingredients',
        'benefits',
        'usage',
        'is_enabled',
        'point',
        'weight',
        'length',
        'width',
        'height',
        'slug',
        'created_at',
        'updated_at',
        'created_by',
        'updated_by',
    ];

    public function seller()
    {
        return $this->belongsTo(Member::class, 'seller_id');
    }

    public function buyer()
    {
        return $this->belongsTo(Member::class, 'buyer_id');
    }

    // public function user()
    // {
    //     return $this->belongsTo(User::class);
    // }

    // public function store()
    // {
    //     return $this->hasOne(Store::class, 'owner_id');
    // }
}
