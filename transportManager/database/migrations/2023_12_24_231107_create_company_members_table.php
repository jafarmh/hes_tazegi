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
        Schema::create('company_members', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('name');
            $table->string('national_code');
            $table->string('mobile')->nullable();

            $table->unsignedBigInteger('company_id');
            $table->foreign("company_id")->references('id')->on("companies")->cascadeOnDelete();

            $table->unsignedBigInteger('companyRole')->comment("نقش فرد");
            $table->foreign("companyRole")->references('id')->on("constants")->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('company_members');
    }
};
