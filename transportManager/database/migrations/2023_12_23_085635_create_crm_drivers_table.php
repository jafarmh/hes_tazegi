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
        Schema::create('crm_drivers', function (Blueprint $table) {
            $table->id();

            $table->string('national_code')->unique();
            $table->string('name');
            $table->string('family');
            $table->string('fatherName');
            $table->string('birthCityName')->nullable();
            $table->string('certifcateIssueCityName')->nullable();
            $table->string('mobile');
            $table->string('shebaNumber');
            $table->string('bankName');
            $table->string('smartNumber')->comment("شماره هوشمند راننده");
            $table->date('smartDate')->nullable()->comment("تاریخ اعتبار هوشمند راننده");
            $table->string('certifcateNumber');
            $table->date('cardValidationDate')->comment("تاریخ اعتبار گواهی نامه");
            $table->date('healthCardDate')->comment("تاریخ اعتبار کارت سلامت");
            $table->string('insurancecode')->comment("کد بیمه");
            $table->string('insuranceBranch')->comment("کد شعبه بیمه");
            $table->integer('isActiveDriver')->default(0)->comment("فعال بودن در راهداری ");
            $table->integer('isActive')->default(0)->comment("فعال بودن در شرکت ما ");
            $table->integer('verification')->default(0)->comment("تایید احراز هویت");
            $table->enum("level", ["Bronze", "Silver", "Gold"])->default('Bronze');


            $table->unsignedBigInteger('certificateType')->comment("نوع گواهی نامه");
            $table->foreign("certificateType")->references('id')->on("constants")->cascadeOnDelete();

            $table->unsignedBigInteger('birthCity')->nullable();
            $table->foreign("birthCity")->references('id')->on("cities")->cascadeOnDelete();

            $table->unsignedBigInteger('certifcateIssueCity')->comment("شهر دریافت گواهینامه")->nullable();
            $table->foreign("certifcateIssueCity")->references('id')->on("cities")->cascadeOnDelete();
            $table->softDeletes();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('crm_drivers');
        Schema::enableForeignKeyConstraints();
    }
};
