<?php

namespace App\Filter\City;

use App\Filter\Filter;

class CityName extends Filter
{

    protected function applyFilter($builder)
    {
        return $builder->where('cities.city','like', '%' . request($this->filterName()) . '%');

    }
}
