<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comentario extends Model
{
    use HasFactory;
    // protected $table = 'comentarios';

    protected $fillable = ['contenido', 'post_id'];
    static $rules = [
        'contenido' => 'required',
        'post_id' => 'required'
    ];

    //relacion uno a muchos invertida}
    public function post(){
        return $this->belongsTo(Post::class, 'post_id');
    }
}
