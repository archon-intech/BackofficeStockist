<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Auditable;

class Manufacture extends Model
{
    use HasFactory;
    use Auditable;

    protected $table = 'manufactures';

    protected $fillable = [
        'name',
        'address',
        'telp',
        'pic',
        'created_by',
        'updated_by'
    ];

}
