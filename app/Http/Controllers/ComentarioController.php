<?php

namespace App\Http\Controllers;

use App\Models\Comentario;
use Illuminate\Http\Request;

class ComentarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $comentarios = Comentario::all();
        foreach ($comentarios as $comentario) {
            $comentario->post->titulo;
            $data[] = $comentario;
        }
        return response()->json([
            'comentarios' => $data
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
        $comentario = Comentario::create($request->all());
        $comentario->post->titulo;
        return response()->json([
            'message' => "Comentario creado",
            'post' => $comentario
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Comentario  $comentario
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $comentario = Comentario::find($id);
        if ($comentario) {
            $comentario->post->titulo;
            return response()->json([
                'message' => 'unico reqistro',
                'post' => $comentario,
                'status' => 200
            ]);
        } else {
            return 'No se encontro este registro';
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Comentario  $comentario
     * @return \Illuminate\Http\Response
     */
    public function edit(Comentario $comentario)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Comentario  $comentario
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $comentario = Comentario::find($id);
        if ($comentario) {
            $comentario->update($request->all());
            $comentario->post->titulo;
            return response()->json([
                'message' => 'Comentario actualizado',
                'post' => $comentario
            ]);
        } else {
            return 'No se pudo eliminar';
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Comentario  $comentario
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $comentario = Comentario::find($id);
        if ($comentario) {
            $comentario->delete();
            return response()->json([
                'message' => 'Comentario fue elimino con exito'
            ]);
        }else{
            return 'No se pudo eliminar';
        }
    }
}
