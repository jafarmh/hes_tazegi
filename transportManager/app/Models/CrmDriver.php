<?php

namespace App\Models;

use App\Services\Common\DateService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOneOrMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
class CrmDriver extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable,SoftDeletes;
    protected $guarded=[];
    protected $appends = ['healthCardDateP','cardValidationDateP','names'];


    public function attach(): MorphOneOrMany
    {
        return $this->morphMany(Attachment::class, 'attachtable');
    }

    public function getNamesAttribute()
    {
        return $this->name." ".$this->family;
    }
    public function getHealthCardDatePAttribute()
    {
        return DateService::ChangeDateToPersian($this->healthCardDate)??"";
    }

    public function getCardValidationDatePAttribute()
    {
        return DateService::ChangeDateToPersian($this->cardValidationDate)??"";
    }

    public function message(): MorphMany
    {
        return $this->morphMany(CrmMessage::class, 'smstable');
    }

    function certificate() : BelongsTo {
        return $this->belongsTo(Constants::class,"certificateType");
    }

    public function findForPassport(string $username): CrmDriver
    {
        return $this->where('mobile', $username)->first();
    }

    public function validateForPassportPasswordGrant($password)
    {
        return true;
    }

    public function remittances(): HasMany
    {
        return $this->hasMany(CrmRemittance::class,'crm_driver_id');
    }

    public function transport(): HasManyThrough
    {
     
        return $this->HasManyThrough(CrmTransport::class,CrmDriverTransport::class,"crm_driver_id","id",null,"crm_transport_id");
    }

    public function driverTransport(): HasMany
    {
        return $this->hasMany(CrmDriverTransport::class);
    }

    public function tickets(): MorphMany
    {
        return $this->morphMany(Ticket::class, 'creatortable');
    }


}
