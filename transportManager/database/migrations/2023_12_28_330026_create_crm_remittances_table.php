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
        Schema::create('crm_remittances', function (Blueprint $table) {
            $table->id();

            $table->string('remittance_date');
            $table->string('remittance_number');
            $table->decimal('capacity');

            $table->unsignedBigInteger('crm_shipping_id')->comment('حمل');
            $table->foreign("crm_shipping_id")->references('id')->on("crm_shippings")->cascadeOnDelete();

            $table->unsignedBigInteger('crm_transport_id')->comment('ناوگان');
            $table->foreign("crm_transport_id")->references('id')->on("crm_transports")->cascadeOnDelete();

            $table->unsignedBigInteger('crm_driver_id');
            $table->foreign("crm_driver_id")->references('id')->on("crm_drivers")->cascadeOnDelete();

            $table->unsignedBigInteger('freight_company_id')->nullable()->comment('شرکت باربری');
            $table->foreign("freight_company_id")->references('id')->on("companies")->cascadeOnDelete();

            $table->unsignedBigInteger('origin_company_branch_id');
            $table->foreign("origin_company_branch_id")->references('id')->on("company_branches")->cascadeOnDelete();

            $table->unsignedBigInteger('destination_company_branch_id');
            $table->foreign("destination_company_branch_id")->references('id')->on("company_branches")->cascadeOnDelete();
       

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('crm_remittances');
        Schema::enableForeignKeyConstraints();
    }
};
