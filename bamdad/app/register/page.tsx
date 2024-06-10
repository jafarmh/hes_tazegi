import { GetCategoryApi, GetCountryApi } from '../redux/ApiCall/ApiAddress'
import React, { useEffect } from 'react'

import API from '../redux/Api'
import APIBack from '../redux/ApiBack'
import Layout from '../components/auth/Layout'
import Register from '../components/auth/register'
import { baseURL } from '@/utility/Config'

export default async function page( ) {
 
 

  const res=await fetch(baseURL+GetCategoryApi+'?parent_id=0', { cache: 'no-store' });
  const Category = await res.json()

  const resCountry=await fetch(baseURL+GetCountryApi);
  const Country = await resCountry.json()
 
   
   return (
    <Layout>
        <Register category={Category.data} country={Country.data}/> 
    </Layout>
  )
}
 