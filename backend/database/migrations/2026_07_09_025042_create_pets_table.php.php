<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pet_categories', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->timestamps();
        }); 
        
        Schema::create('pet_races', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->bigInteger('category_id')->unsigned();
            $table->foreign('category_id')->references('id')->on('pet_categories');
            $table->timestamps();
        });

        Schema::create('pets', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->timestamp('date_birth')->nullable();
            $table->enum('sex', ['M', 'F']);
            $table->string('weight', 100)->nullable();
            $table->enum('size', ['SMALL', 'MEDIUM', 'LARGE']);
            $table->boolean('castrated')->default(false);
            $table->boolean('microchipped')->default(false);
            $table->string('microchip_number', 100)->nullable();
            $table->string('description', 500);
            $table->bigInteger('user_id')->unsigned();
            $table->bigInteger('race_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('race_id')->references('id')->on('pet_races');
            $table->timestamps();
        });

        Schema::create('pet_pictures', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->string('path', 500);
            $table->string('mime_type', 100);
            $table->string('size', 100);
            $table->boolean('is_main')->default(false);
            $table->timestamps();
            $table->bigInteger('pet_id')->unsigned();
            $table->foreign('pet_id')->references('id')->on('pets');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pet_pictures');
        Schema::dropIfExists('pets');
        Schema::dropIfExists('pet_races');
        Schema::dropIfExists('pet_categories');

    }
};
