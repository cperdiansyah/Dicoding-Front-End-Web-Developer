<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('category_id');
            $table->string('name');
            $table->string('slug')->unique();
            $table->integer('price');
            $table->string('warna');
            $table->integer('weight');
            $table->integer('quantity')->default(false);
            $table->text('description')->nullable();
            $table->timestamp('publish_at');
            $table->boolean('is_delete')->default(false);
            $table->boolean('is_discount')->default(false);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
