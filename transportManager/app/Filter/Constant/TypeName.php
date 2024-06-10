<?php

namespace App\Filter\Constant;

use App\Filter\Filter;

class TypeName extends Filter
{

    protected function applyFilter($builder)
    {
        return $builder->where('constant_types.title','like', '%' . request($this->filterName()) . '%');

    }
}
