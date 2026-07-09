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
        Schema::create('appointment_types', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->text('description');
            $table->timestamps();
        });

        Schema::create('pet_appointments', function (Blueprint $table) {
            $table->id();
            $table->string('title', 100);
            $table->text('description');
            $table->timestamp('date_time');
            $table->enum('status', ['SCHEDULED', 'COMPLETED', 'CANCELLED'])->default('SCHEDULED');
            $table->string('location', 255);
            $table->string('professional_name', 100);
            $table->timestamps();
            $table->bigInteger('pet_id')->unsigned();
            $table->foreign('pet_id')->references('id')->on('pets');
            $table->bigInteger('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users');
            $table->bigInteger('appointment_type_id')->unsigned();
            $table->foreign('appointment_type_id')->references('id')->on('appointment_types');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pet_appointments');
        Schema::dropIfExists('appointment_types');
    }
};
