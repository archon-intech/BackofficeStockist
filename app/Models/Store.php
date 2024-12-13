<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Auditable;

class Store extends Model
{
    use HasFactory;
    use Auditable;

    protected $table = 'store';

    protected $fillable = [
        'uuid',
        'code',
        'owner_id',
        'name',
        'province_code',
        'city_id',
        'district_id',
        'address',
        'phone',
        'phone_with_whatsapp',
        'created_at',
        'updated_at',
        'is_blocked',
        'type',
        'taxpayer_identification_number',
        'official'


    ];

    public function member()
    {
        return $this->belongsTo(Member::class, 'owner_id');
    }
}
