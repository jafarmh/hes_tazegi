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
        Schema::create('crm_transport_black_lists', function (Blueprint $table) {
            $table->id();

            $table->string('smart_number');
            $table->string('block_reason')->comment('دلیل بلاک شدن')->nullable();
            $table->string('unblock_reason')->comment('دلیل آنبلاک شدن')->nullable();
            $table->dateTime('start_date')->comment("تاریخ شروع");
            $table->dateTime('end_date')->comment("تاریخ پایان")->nullable();
            $table->string('car_number')->nullable();

            // $table->unsignedBigInteger('blocker_id');
            // $table->foreign("blocker_id")->references('id')->on("user_organs")->cascadeOnDelete();

            // $table->unsignedBigInteger('unblocker_id')->nullable();
            // $table->foreign("unblocker_id")->references('id')->on("user_organs")->cascadeOnDelete();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('crm_transport_black_lists');
    }
};
