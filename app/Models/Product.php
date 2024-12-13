<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Auditable;

class Product extends Model
{
    use HasFactory;
    use Auditable;

    protected $table = 'product';

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

    // public function account()
    // {
    //     return $this->belongsTo(Account::class);
    // }

    // public function user()
    // {
    //     return $this->belongsTo(User::class);
    // }

    // public function store()
    // {
    //     return $this->hasOne(Store::class, 'owner_id');
    // }
}
