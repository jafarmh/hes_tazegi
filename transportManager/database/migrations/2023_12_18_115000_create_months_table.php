<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('months', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->timestamps();
        });

        $default=[
            ["id"=>"1","name"=>"فروردین"],
            ["id"=>"2","name"=>"اردیبهشت"],
            ["id"=>"3","name"=>"خرداد"],
            ["id"=>"4","name"=>"تیر"],
            ["id"=>"5","name"=>"مرداد"],
            ["id"=>"6","name"=>"شهریور"],
            ["id"=>"7","name"=>"مهر"],
            ["id"=>"8","name"=>"آبان"],
            ["id"=>"9","name"=>"آذر"],
            ["id"=>"10","name"=>"دی"],
            ["id"=>"11","name"=>"بهمن"],
            ["id"=>"12","name"=>"اسفند"],
        ];

        DB::table("months")->insert($default);

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('months');
    }
};
