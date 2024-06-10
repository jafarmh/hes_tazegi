import React, { useEffect, useState } from 'react'
import { emptyDataSiteInfo, setDataSiteInfo } from '../redux/reducer/general/SiteInfo';

import { GetSiteInfo } from '../redux/ApiCall/General'
import { useDispatch } from 'react-redux'

function useSiteInfoGetData(dispatch: any) {
    GetSiteInfo((res: any) => {
        if (res) {
            dispatch(emptyDataSiteInfo())
            dispatch(setDataSiteInfo(res?.site_info))
        }
    })



    return
}

export default useSiteInfoGetData