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
        Schema::create('crm_waybill_financially', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->unsignedBigInteger('crm_waybill_id');
            $table->foreign("crm_waybill_id")->references('id')->on("crm_waybills")->cascadeOnDelete();

            $table->unsignedBigInteger('crm_waybill_cost_type_id');
            $table->foreign("crm_waybill_cost_type_id")->references('id')->on("crm_waybill_cost_types")->cascadeOnDelete();

            $table->integer('amount');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('crm_waybill_financially');
    }
};
