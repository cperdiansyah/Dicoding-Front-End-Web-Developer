<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Gallery;
use App\Models\Product;
use App\Models\User;
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
        User::factory(10)->create();

        User::create([
            'name' => 'Chandra Perdiansyah',
            'username' => 'cperdiansyah',
            'email' => 'chandraperdiansyah@gmail.com',
            'password' => bcrypt('admin'),
            'is_admin' => true,
        ]);
        Category::create([
            'name' => 'Mukena Dewasa',
            'slug' => 'mukena-dewasa',
        ]);

        Category::create([
            'name' => 'Sajadah',
            'slug' => 'sajadah',
        ]);

        Category::create([
            'name' => 'Mukena Anak',
            'slug' => 'mukena-anak',
        ]);
        Product::create([
            'name' => 'Mukena Anak',
            'slug' => 'mukena-anak',
            'description' => 'Mukena Anak',
            'price' => '10000',
            'quantity' => '10',
            'category_id' => '3',
            'weight' => '10',
            'warna' => 'Merah',
        ]);

        User::factory(5)->create();
        Product::factory(6)->create();
        Category::factory(5)->create();
        Gallery::factory(5)->create();
    }
}
