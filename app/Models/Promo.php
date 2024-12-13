<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Auditable;

class Promo extends Model
{
    use HasFactory;
    use Auditable;

    // protected $table = 'promo';

    protected $fillable = [
        'requirement',
        'status',
    ];
}
