<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'category_id' => $this->faker->numberBetween(1, 3),
            'name' => $this->faker->name,
            'slug' => $this->faker->unique()->slug,
            'price' => $this->faker->numberBetween(10000, 100000),
            'warna' => $this->faker->word(),
            'weight' => $this->faker->numberBetween(100, 1000),
            'quantity' => $this->faker->numberBetween(1, 100),
            'description' => $this->faker->text,
        ];
    }
}
