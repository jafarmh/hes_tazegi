<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class CrmOrder extends Model
{
    use HasFactory;
    protected $guarded=[];

    function loader() : HasManyThrough {
        return $this->hasManyThrough(CrmLoader::class,CrmOrderLoader::class,"crm_loader_id","id");
    }

    function insurer() : BelongsTo {
        return $this->belongsTo(Insurer::class,"insurer_id");
    }

    function good() : BelongsTo {
        return $this->belongsTo(Goods::class,"goods_id");
    }

    function goodItem() : BelongsTo {
        return $this->belongsTo(Goods::class,"goods_item_id");
    }

    function  origin() : BelongsTo {
        return $this->belongsTo(City::class,"origin_city_id");
    }

    function  destination() : BelongsTo {
        return $this->belongsTo(City::class,"destination_city_id");
    }

    function employer() : BelongsTo {
        return $this->belongsTo(Employer::class,"employer_id");
    }

    function shipping() : BelongsTo {
        return $this->belongsTo(CrmShipping::class,"crm_shipping_id");
    }

    function packaging() : BelongsTo {
        return $this->belongsTo(Packaging::class,"packaging_id");  
    }

    function offers() : HasMany {
        return $this->hasMany(CrmOrderDriverRequest::class);  
    }

}
