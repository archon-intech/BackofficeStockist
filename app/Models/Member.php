<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Auditable;

class Member extends Model
{
    use HasFactory;
    use Auditable;

    protected $table = 'member';

    protected $fillable = [
        'uuid',
        'account_id',
        'referrer_id',
        'upline_id',
        'type',
        'name',
        'firebase_uid',
        'identification',
        'product_point',
        'created_at',
        'updated_at',
        'created_by',
        'updated_by',

    ];

    public function account()
    {
        return $this->belongsTo(Account::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function store()
    {
        return $this->hasOne(Store::class, 'owner_id');
    }
}
