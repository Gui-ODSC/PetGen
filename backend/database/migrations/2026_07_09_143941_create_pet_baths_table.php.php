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
        Schema::create('pet_baths', function (Blueprint $table) {
            $table->id();
            $table->timestamp('date');
            $table->string('bath_type', 100);
            $table->string('local', 100);
            $table->string('professional', 100)->nullable();
            $table->string('products', 100)->nullable();
            $table->string('observations', 500)->nullable();
            $table->timestamps();
            $table->bigInteger('pet_id')->unsigned();
            $table->foreign('pet_id')->references('id')->on('pets');
            $table->bigInteger('appointment_id')->unsigned()->nullable();
            $table->foreign('appointment_id')->references('id')->on('pet_appointments');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pet_baths');
    }
};
