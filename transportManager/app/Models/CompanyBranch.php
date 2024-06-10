<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CompanyBranch extends Model
{
    use HasFactory;
    protected $guarded=[];


    function company() : BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    public function city()
    {
        return $this->belongsTo(City::class, 'city_id');
    }

    public function type()
    {
        return $this->belongsTo(Constants::class, 'companyBranchType');
    }

}
