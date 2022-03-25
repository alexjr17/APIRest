<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comentario extends Model
{
    use HasFactory;
    // protected $table = 'comentarios';

    protected $fillable = ['contenido', 'post_id'];

    //relacion uno a muchos invertida}
    public function post(){
        return $this->belongsTo(Post::class);
    }
}
