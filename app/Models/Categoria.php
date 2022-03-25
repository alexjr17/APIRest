<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    use HasFactory;
    protected $table = 'categorias';

    protected $fillable =['nombre'];

    //relacion uno a muchos
    public function posts(){
        return $this->hasMany(Categoria::class);
    }
}
