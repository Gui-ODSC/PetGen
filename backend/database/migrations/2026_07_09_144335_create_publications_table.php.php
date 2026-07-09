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
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title', 100);
            $table->string('description', 500);
            $table->enum('status', ['DRAFT', 'PUBLISHED', 'ARCHIVED']);
            $table->timestamps();
            $table->bigInteger('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users');
        });

        Schema::create('post_comments', function (Blueprint $table) {
            $table->id();
            $table->string('comment', 500);
            $table->timestamps();
            $table->bigInteger('post_id')->unsigned();
            $table->foreign('post_id')->references('id')->on('posts');
            $table->bigInteger('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users');
        });

        Schema::create('post_likes', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->bigInteger('post_id')->unsigned();
            $table->foreign('post_id')->references('id')->on('posts');
            $table->bigInteger('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users');
        });

        Schema::create('post_pictures', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->string('path', 500);
            $table->string('mime_type', 100);
            $table->string('size', 100);
            $table->string('order', 100);
            $table->timestamps();
            $table->bigInteger('post_id')->unsigned();
            $table->foreign('post_id')->references('id')->on('posts');
        });

        Schema::create('post_pets', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->bigInteger('post_id')->unsigned();
            $table->foreign('post_id')->references('id')->on('posts');
            $table->bigInteger('pet_id')->unsigned();
            $table->foreign('pet_id')->references('id')->on('pets');
        });

        Schema::create('post_favorites', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->bigInteger('post_id')->unsigned();
            $table->foreign('post_id')->references('id')->on('posts');
            $table->bigInteger('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('post_favorites');
        Schema::dropIfExists('post_pets');
        Schema::dropIfExists('post_pictures');
        Schema::dropIfExists('post_likes');
        Schema::dropIfExists('post_comments');
        Schema::dropIfExists('posts');
    }
};
