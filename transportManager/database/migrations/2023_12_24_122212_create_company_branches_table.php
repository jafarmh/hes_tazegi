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
        Schema::create('company_branches', function (Blueprint $table) {
            $table->id();

            $table->string('title')->nullable();
            $table->string('postal_code')->nullable();
            $table->string('address')->nullable();

            $table->unsignedBigInteger('company_id');
            $table->foreign("company_id")->references('id')->on("companies")->cascadeOnDelete();

            $table->unsignedBigInteger('companyBranchType')->comment("نوع شعبه");
            $table->foreign("companyBranchType")->references('id')->on("constants")->cascadeOnDelete();

            $table->unsignedBigInteger('city_id')->nullable();
            $table->foreign("city_id")->references('id')->on("cities")->cascadeOnDelete();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('company_branches');
    }
};
