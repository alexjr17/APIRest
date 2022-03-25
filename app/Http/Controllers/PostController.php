<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::all();
        foreach ($posts as $post) {
            $post->categoria->nombre;
            // $post->comentarios->contenido;
            $data[] = $post;
        }
        return response()->json([
            'message' => 'Listando post',
            'registros' => 'Son: ' . count($data),
            'post' => $data
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $post = Post::create($request->all());
        return response()->json([
            'message' => "Post creado",
            'post' => $post
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $post = Post::find($id);
        if ($post) {
            $post->categoria->nombre;
            // $post->comentarios->contenido;
            return response()->json([
                'message' => 'unico reqistro',
                'post' => $post,
                'status' => 200
            ]);
        } else {
            return 'No se encontro este registro';
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $post = Post::find($id);
        if ($post) {
            $post->update($request->all());
            return response()->json([
                'message' => 'Post actualizado',
                'post' => $post
            ]);
        } else {
            return 'No se pudo eliminar';
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = Post::find($id);
        if ($post) {
            $post->delete();
            return response()->json([
                'message' => 'Post e elimino con exito'
            ]);
        }else{
            return 'No se pudo eliminar';
        }
    }
}
