<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    public function show()
    {
        $user = auth()->user();
        return view('tu-vista', compact('user'));
    }


    public function actualizarPuntos(Request $request)
    {
        $user = auth()->user(); // Obtén al usuario autenticado

        // Actualiza los puntos del usuario
        $user->puntos = $request->input('puntos');
        $user->save();

        return response()->json(['message' => 'Puntos actualizados correctamente']);
    }
    
}
