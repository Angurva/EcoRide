<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Role extends Model
{
    use HasFactory;

    public function users()
    {
        // a role has one or many users
        return $this->belongsToMany(User::class);
    }
    
}
