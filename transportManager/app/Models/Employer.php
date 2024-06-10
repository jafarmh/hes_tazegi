<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Employer extends Authenticatable
{
    use HasFactory,HasApiTokens,Notifiable;
    protected $guarded=[];

    function company() : HasOne {
        return $this->hasOne(Company::class,"id");
    }
    
    function people() : HasOne {
        return $this->hasOne(Person::class,"id");
    }
    
    public function findForPassport(string $username): Employer
    {
        return $this->where('mobile', $username)->first();
    }
    public function validateForPassportPasswordGrant($password)
    {
        return true;
    }


}
