<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

    public function run(): void
    {
        Schema::disableForeignKeyConstraints();

        DB::table('users')->truncate();

        DB::table('users')->insert([
            'id' => 1,
            'name' => 'مدیر سیستم',
            'email' => 'administrator@admin.com',
            'password' => Hash::make('1qaz@WSX!'),
            'email_verified_at' => now(),
            'remember_token' => Str::random(10),
        ]);


        Schema::enableForeignKeyConstraints();
    }

}
