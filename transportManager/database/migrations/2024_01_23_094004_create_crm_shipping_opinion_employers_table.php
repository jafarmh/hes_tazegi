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
        Schema::create('crm_shipping_opinion_employers', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('rate');
            $table->text('comment');

            $table->unsignedBigInteger('crm_shipping_id');
            $table->foreign("crm_shipping_id")->references('id')->on("crm_shippings")->cascadeOnDelete();

            $table->unsignedBigInteger("company_id");
            $table->foreign("company_id")->references('id')->on("companies")->cascadeOnDelete();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('crm_shipping_opinion_employers');
    }
};
