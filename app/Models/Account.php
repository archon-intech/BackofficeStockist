<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Auditable;

class Account extends Model
{
    use HasFactory;
    use Auditable;

    protected $table = 'account';

    protected $fillable = [
        'uuid',
        'username',
        'email',
        'phone',
        'type',
        'password',
        'password_reset_token',
        'password_reset_token_expiration',
        'auth_token',
        'is_blocked',
        'is_system',
        'confirmation_token',
        'confirmation_expiration',
        'confirmed_at',
        'last_active_at',
        'registered_at',
        'created_by',
        'updated_by',
        'created_at',
        'updated_at',
        'pin',
        
    ];

    // public function customer()
    // {
    //     return $this->belongsTo(Customer::class);
    // }
}
