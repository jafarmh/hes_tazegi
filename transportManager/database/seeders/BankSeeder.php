<?php

namespace Database\Seeders;

use App\Models\Bank;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class BankSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

    public function run(): void
    {
        Schema::disableForeignKeyConstraints();
        Bank::truncate();

        $id = 1;
        DB::table('banks')->insert(['id' => $id,'title' => 'توسعه تعاون']); $id++;
        DB::table('banks')->insert(['id' => $id,'title' => 'توسعه صادرات ایران']); $id++;
        DB::table('banks')->insert(['id' => $id,'title' => 'سپه']); $id++;
        DB::table('banks')->insert(['id' => $id,'title' => 'صنعت و معدن']); $id++;
        DB::table('banks')->insert(['id' => $id,'title' => 'کشاورزی']); $id++;
        DB::table('banks')->insert(['id' => $id,'title' => 'مسکن']); $id++;
        DB::table('banks')->insert(['id' => $id,'title' => 'ملّی ایران']); $id++;
        DB::table('banks')->insert(['id' => $id,'title' => 'پست بانک ایران']); $id++;
        DB::table('banks')->insert(['id' => $id,'title' => 'اقتصاد نوین']); $id++;
        DB::table('banks')->insert(['id' => $id,'title' => 'ایران زمین']); $id++;
        DB::table('banks')->insert(['id' => $id,'title' => 'پارسیان']); $id++;
        DB::table('banks')->insert(['id' => $id,'title' => 'پاسارگاد']); $id++;
        DB::table('banks')->insert(['id' => $id,'title' => 'تجارت']); $id++;
        DB::table('banks')->insert(['id' => $id,'title' => 'خاورمیانه']); $id++;
        DB::table('banks')->insert(['id' => $id,'title' => 'دی']); $id++;
        DB::table('banks')->insert(['id' => $id,'title' => 'سامان']); $id++;
        DB::table('banks')->insert(['id' => $id,'title' => 'سرمایه']); $id++;
        DB::table('banks')->insert(['id' => $id,'title' => 'سینا']); $id++;
        DB::table('banks')->insert(['id' => $id,'title' => 'صادرات']); $id++;
        DB::table('banks')->insert(['id' => $id,'title' => 'قرض‌الحسنه رسالت']); $id++;
        DB::table('banks')->insert(['id' => $id,'title' => 'کارآفرین']); $id++;
        DB::table('banks')->insert(['id' => $id,'title' => 'گردشگری']); $id++;
        DB::table('banks')->insert(['id' => $id,'title' => 'ملت']); $id++;
        DB::table('banks')->insert(['id' => $id,'title' => 'آینده']); $id++;
        DB::table('banks')->insert(['id' => $id,'title' => 'رفاه کارگران']); $id++;

        Schema::enableForeignKeyConstraints();
    }
}
