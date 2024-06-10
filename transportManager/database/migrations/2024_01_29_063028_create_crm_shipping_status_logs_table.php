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
        Schema::create('crm_shipping_status_logs', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('crm_shipping_id');
            $table->foreign("crm_shipping_id")->references('id')->on("crm_shippings")->cascadeOnDelete();
            $table->foreignId('status_id')->comment(" وضعیت")->references('id')->on("crm_shipping_statuses")->cascadeOnDelete();
            $table->text("status_description")->nullable()->comment("توضیح وضعیت");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('crm_shipping_status_logs');
    }
};
