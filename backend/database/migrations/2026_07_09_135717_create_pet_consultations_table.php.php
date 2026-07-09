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
        Schema::create('pet_consultations', function (Blueprint $table) {
            $table->id();
            $table->string('reason', 100);
            $table->text('diagnosis')->nullable();
            $table->text('treatment')->nullable();
            $table->string('professional', 100);
            $table->string('temperature', 100)->nullable();
            $table->text('observations')->nullable();
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
        Schema::dropIfExists('pet_consultations');  
    }
};
