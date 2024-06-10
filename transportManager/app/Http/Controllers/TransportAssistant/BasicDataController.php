<?php

namespace App\Http\Controllers\TransportAssistant;

use App\Http\Controllers\Controller;
use App\Services\Common\ConstantService;
use App\Services\Common\StateCityService;
use App\Services\Common\GoodsService;
use App\Services\Common\InsurerService;
use App\Services\Common\LoaderService;
use App\Services\Common\PackagingService;
use Illuminate\Http\Request;

class BasicDataController extends Controller
{
    private StateCityService $stateCityService;
    private GoodsService $goodsService;
    private PackagingService $packagingService;
    private LoaderService $loaderService;
    private ConstantService $constantService;
    private InsurerService $insurerService;

    function __construct()  {
        $this->stateCityService = new StateCityService();
        $this->goodsService = new GoodsService();
        $this->packagingService = new PackagingService();
        $this->loaderService = new LoaderService();
        $this->constantService = new ConstantService();
        $this->insurerService = new InsurerService();
    }

    /**
     * @OA\Get(
     *     path="/transportAssistant/cityList",
     *      tags={"Transport Assistant :: Basic Info"},
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Parameter( name="Token",required=true,in="header",@OA\Schema(type="string"))
     * )
     */
    public function cityList()
    {
        return $this->stateCityService->getCityList();
    }


    /**
     * @OA\Get(
     *     path="/transportAssistant/stateList",
     *      tags={"Transport Assistant :: Basic Info"},
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Parameter( name="Token",required=true,in="header",@OA\Schema(type="string"))
     * )
     */
    public function stateList()
    {
        return $this->stateCityService->getStateList();
    }

    /**
     * @OA\Get(
     *     path="/transportAssistant/goodsList",
     *      tags={"Transport Assistant :: Basic Info"},
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Parameter( name="Token",required=true,in="header",@OA\Schema(type="string"))
     * )
     */
    public function goodsList()
    {
        return $this->goodsService->getList();
    }

    /**
     * @OA\Get(
     *     path="/transportAssistant/packagingList",
     *      tags={"Transport Assistant :: Basic Info"},
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Parameter( name="Token",required=true,in="header",@OA\Schema(type="string"))
     * )
     */
    public function packagingList()
    {
        return $this->packagingService->getList();
    }

    /**
     * @OA\Get(
     *     path="/transportAssistant/loaderList",
     *      tags={"Transport Assistant :: Basic Info"},
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Parameter( name="Token",required=true,in="header",@OA\Schema(type="string"))
     * )
     */
    public function loaderList()
    {
        return $this->loaderService->getList();
    }

    /**
     * @OA\Get(
     *     path="/transportAssistant/brandList",
     *      tags={"Transport Assistant :: Basic Info"},
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Parameter( name="Token",required=true,in="header",@OA\Schema(type="string"))
     * )
     */
    public function carBrandList()
    {
        return $this->constantService->getList('carBrand');
    }

    /**
     * @OA\Get(
     *     path="/transportAssistant/fleetTypeList",
     *      tags={"Transport Assistant :: Basic Info"},
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Parameter( name="Token",required=true,in="header",@OA\Schema(type="string"))
     * )
     */
    public function fleetTypeList()
    {
        return $this->constantService->getList('fleetType');
    }

    /**
     * @OA\Get(
     *     path="/transportAssistant/insurerList",
     *      tags={"Transport Assistant :: Basic Info"},
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Parameter( name="Token",required=true,in="header",@OA\Schema(type="string"))
     * )
     */
    public function insurerList()
    {
        return $this->insurerService->getList();
    }

}
