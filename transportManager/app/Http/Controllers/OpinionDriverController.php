<?php

namespace App\Http\Controllers;

use App\Http\Requests\Driver\Opinion\AddOpinionRequest;
use App\Services\Driver\CrmShippingOpinionService;
use Illuminate\Http\Request;

class OpinionDriverController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $service=new CrmShippingOpinionService();
        return $service->getAllOpinionForDriver(auth("driver")->user());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AddOpinionRequest $request)
    {
        $service=new CrmShippingOpinionService();
        return $service->addCommentRate($request->validated(),auth("driver")->user());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $service=new CrmShippingOpinionService();
        return $service->getDetailById($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
