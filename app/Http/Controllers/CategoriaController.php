<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Arr;

class CategoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categorias = Categoria::orderBy('id', 'desc')->get();
        return response()->json([
            'message' => 'Listando Categorias',
            'registros' => 'Son: ' . count($categorias),
            'categorias' => $categorias
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
        $request->validate(Categoria::$rules);
        $Categoria = Categoria::create($request->all());
        return response()->json([
            'message' => "Categoria creado",
            'post' => $Categoria
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Categoria  $categoria
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $categoria = Categoria::find($id);
        if ($categoria) {
            return response()->json([
                'message' => 'unico reqistro',
                'categoria' => $categoria,
                'status' => 200
            ]);
        } else {
            return 'No se encontro este registro';
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Categoria  $categoria
     * @return \Illuminate\Http\Response
     */
    public function edit(Categoria $categoria)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Categoria  $categoria
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate(Categoria::$rules);
        $categoria = Categoria::find($id);
        if ($categoria) {
            $categoria->update($request->all());
            return response()->json([
                'message' => 'Post actualizado',
                'post' => $categoria
            ]);
        } else {
            return 'No se encontro registro';
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Categoria  $categoria
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $categoria = Categoria::find($id);
        if ($categoria) {
            $categoria->delete();
            return response()->json([
                'message' => 'categoria fue elimino con exito'
            ]);
        }else{
            return 'No se pudo eliminar';
        }
    }
}
