import { BrochureAllApi, ProductSAllApi, UsersApi, UsersListApi, exportSolutionApi } from '../redux/ApiCall/ApiAddress';

import LayoutMobile from '../components/layout/LayoutMobile';
import LayoutMobileInnerPage from '../components/layout/LayoutMobileInnerPage';
import React from 'react'
import Search from '../components/search';
import { baseURL } from '@/utility/Config';

export default async function page() {

  const res = await fetch(baseURL + exportSolutionApi, { cache: 'no-store', next: { revalidate: 10 } });
  const ExportSolutionList = await res.json()

  const product = await fetch(baseURL + ProductSAllApi + "?type=product", { cache: 'no-store', next: { revalidate: 5 } });
  const products = await product.json()
  const service = await fetch(baseURL + ProductSAllApi + "?type=service", { cache: 'no-store', next: { revalidate: 5 } });
  const services = await service.json()
  const Brochure = await fetch(baseURL + BrochureAllApi, { cache: 'no-store', next: { revalidate: 5 } });
  const Brochures = await Brochure.json()

  const User = await fetch(baseURL + UsersListApi, { cache: 'no-store', next: { revalidate: 5 } });
  const Users = await User.json()

  return (
    <LayoutMobile   >
      <Search
        ExportSolutionList={ExportSolutionList.data.data}
        products={products.data.data}
        Brochures={Brochures.data.data}
        Services={services.data.data}
        Users={Users.data.data}

      />
    </LayoutMobile>
  )
}
