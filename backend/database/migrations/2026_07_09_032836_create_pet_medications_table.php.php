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
        Schema::create('pet_medications', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->string('dosage', 100);
            $table->string('frequency', 100);
            $table->string('via_administration', 100);
            $table->timestamp('start_date');
            $table->timestamp('end_date')->nullable();
            $table->text('observations')->nullable();
            $table->string('prescribed_by', 100)->nullable();
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
        Schema::dropIfExists('pet_medications');
    }
};
