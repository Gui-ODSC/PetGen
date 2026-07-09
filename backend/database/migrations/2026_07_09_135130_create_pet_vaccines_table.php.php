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
        Schema::create('pet_vaccines', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->string('manufacturer', 100)->nullable();
            $table->string('lot_number', 100)->nullable();
            $table->timestamp('date_administered');
            $table->timestamp('next_due_date')->nullable();
            $table->string('professional', 100)->nullable();
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
        Schema::dropIfExists('pet_vaccines');
    }
};
