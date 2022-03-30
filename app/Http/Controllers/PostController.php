<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
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
        $posts = Post::with(['categoria', 'comentarios'])->orderBy('id', 'desc')->get();
        return response()->json($posts);
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
        $request->validate(Post::$rules);
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
            $post->categoria;
            $post->comentarios;
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
        $request->validate(Post::$rules);
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
