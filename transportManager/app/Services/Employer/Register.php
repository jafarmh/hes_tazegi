<?php
namespace App\Services\Employer;

use App\Models\Employer;
use App\Repositories\CompanyRepository;
use App\Repositories\CrmDriverRepository;
use App\Repositories\EmployerRepository;
use App\Repositories\PersonRepository;

class Register
{

    function registerPerson($params)  {
        $mobile=$params['mobile'];
        unset($params['mobile']);

       
        $person=PersonRepository::NewItem($params);
        $employerData=[
            "mobile"=>$mobile,
            "type"=>"person",
            "person_id"=>$person->id
            
        ];
        $employer=EmployerRepository::NewItem($employerData);
      
        return successResponse(['employer' => $employer]);
    }

    function registerCompany($params)  {
        $mobile=$params['mobile'];
        unset($params['mobile']);

       
        $company=CompanyRepository::NewItem($params);
        $employerData=[
            "mobile"=>$mobile,
            "type"=>"company",
            "company_id"=>$company->id
            
        ];
        $employer=EmployerRepository::NewItem($employerData);
      
        return successResponse([ 'employer' => $employer]);
    }
    
}
