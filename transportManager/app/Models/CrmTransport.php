<?php

namespace App\Models;

use App\Repositories\ConstantRepository;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphOneOrMany;

class CrmTransport extends Model
{
    use HasFactory;
    protected $guarded=[];



    public function brand()
    {
        return $this->belongsTo(Constants::class,"brand")
        ->where("constants.constant_type_id","=",ConstantRepository::TypeFindByField("title","carBrand")->id);
    }

    public function fleet()
    {
        return $this->belongsTo(Constants::class,"type_fleet")
        ->where("constants.constant_type_id","=",ConstantRepository::TypeFindByField("title","fleetType")->id);
    }

    public function certificateType()
    {
        return $this->belongsTo(Constants::class,"certificate_type")
        ->where("constants.constant_type_id","=",ConstantRepository::TypeFindByField("title","certificateType")->id);
    }

    public function loader()
    {
        return $this->belongsTo(CrmLoader::class, 'crm_loader_id');
    }

    public function insurer()
    {
        return $this->belongsTo(Insurer::class, 'insurer_id');
    }

    public function transportDriver(): HasMany
    {
        return $this->hasMany(CrmDriverTransport::class,"crm_transport_id","id");
    }

}
