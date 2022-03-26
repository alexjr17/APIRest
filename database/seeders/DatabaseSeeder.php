<?php

namespace Database\Seeders;

use App\Models\Categoria;
use App\Models\Comentario;
use App\Models\Post;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        Categoria::factory(10)->create();
        Post::factory(50)->create();
        Comentario::factory(500)->create();
    }
}
