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
        Schema::create('employers', function (Blueprint $table) {
            $table->id();
            $table->string("mobile")->unique();
            $table->enum("type",["person","company"])->default("person");
            $table->foreignId("person_id")->nullable()->references('id')->on("people")->cascadeOnDelete();
            $table->foreignId("company_id")->nullable()->references('id')->on("companies")->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employers');
    }
};
