<?php
namespace App\Traits;

use Illuminate\Support\Facades\Auth;

trait Auditable
{
    protected static function bootAuditable()
    {
        static::creating(function ($model) {
            $model->created_by = Auth::user()->name ?? "Admin";
        });

        static::updating(function ($model) {
            $model->updated_by = Auth::user()->name ?? "Admin";
        });
    }
}