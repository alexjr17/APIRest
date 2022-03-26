<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    protected $table = 'posts';
    protected $fillable =['titulo', 'contenido', 'categoria_id'];

    static $rules = [
        'titulo' => 'required|max:20',
        'contenido' =>'required',
        'categoria_id' => 'required'
    ];

    //relacion uno a muchos
    public function comentarios(){
        return $this->hasMany(Comentario::class);
    }

    //relacion uno a muchos invertida}
    public function categoria(){
        return $this->belongsTo(Categoria::class);
    }
}
