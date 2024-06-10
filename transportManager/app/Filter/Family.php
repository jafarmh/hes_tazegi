<?php

namespace App\Filter;

class Family extends Filter
{

    protected function applyFilter($builder)
    {
        return $builder->where('family','like', '%' . request($this->filterName()) . '%');

    }
}
