
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
        Schema::create('crm_loaders', function (Blueprint $table) {
            $table->id();

            $table->string('name');
            $table->string('alias')->nullable()->comment('نام مستعار');
            $table->integer('start_tonnage')->comment('از تناژ (کلیوگرم)')->default(0);
            $table->integer('end_tonnage')->comment('تا تناژ (کلیوگرم)')->default(0);
            $table->integer("priority")->default(100);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('crm_loaders');
        Schema::enableForeignKeyConstraints();
    }
};
