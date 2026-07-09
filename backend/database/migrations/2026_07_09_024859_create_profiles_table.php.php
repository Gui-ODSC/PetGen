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
         Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->string('bio', 500);
            $table->string('about_me', 500)->nullable();
            $table->string('city', 100)->nullable();
            $table->string('state', 100)->nullable();
            $table->boolean('private')->default(true);
            $table->timestamps();
            $table->bigInteger('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users');
        });

         Schema::create('profile_pictures', function (Blueprint $table) {
            $table->id();
            $table->string('path', 500);
            $table->string('mime_type', 100);
            $table->string('size', 100);
            $table->timestamps();
            $table->bigInteger('profile_id')->unsigned();
            $table->foreign('profile_id')->references('id')->on('profiles');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profile_pictures');
        Schema::dropIfExists('profiles');
    }
};
