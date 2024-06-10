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
        Schema::create('crm_transports', function (Blueprint $table) {
            $table->id();
            $table->string('smart_number');
            $table->date('smart_date');
            $table->string('car_number');
            $table->string('car_construction_year');
            $table->string('car_vin');

            $table->unsignedBigInteger('insurer_id')->comment('بیمه گر');
            $table->foreign("insurer_id")->references('id')->on("constants")->cascadeOnDelete();
            $table->string('insurance_number');
            $table->date('insurance_date');


            $table->unsignedBigInteger('certificate_type')->comment('نوع گواهینامه');
            $table->foreign('certificate_type')->references('id')->on('constants')->onDelete('cascade');

            $table->date('technical_check_date')->comment('تاریخ معاینه فنی');

            $table->unsignedBigInteger('crm_loader_id')->comment('نوع بارگیر');
            $table->foreign("crm_loader_id")->references('id')->on("crm_loaders")->cascadeOnDelete();

            $table->unsignedBigInteger('crm_owner_id')->nullable()->comment(' صاحب ماشین ');
            $table->foreign('crm_owner_id')->references('id')->on('crm_owners');


            $table->unsignedBigInteger('brand')->comment('برند ناوگان');
            $table->foreign('brand')->references('id')->on('constants')->onDelete('cascade');

            $table->unsignedBigInteger('type_fleet')->nullable()->comment('نوع ناوگان');
            $table->foreign('type_fleet')->references('id')->on('constants')->onDelete('cascade');

          

            $table->integer('isActiveTransport')->default(0)->comment("فعال بودن در راهداری ");
            $table->integer('isActive')->default(0)->comment("فعال بودن در شرکت ما ");

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('crm_transports');
        Schema::enableForeignKeyConstraints();
    }
};
