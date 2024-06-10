import Layout from "./components/auth/Layout";
import Login from "./components/auth/login";
import { SiteInfoSetApi } from "./redux/ApiCall/ApiAddress";
import { baseURL } from "@/utility/Config";

export default async function Home() {

  const resInfo = await fetch(baseURL + SiteInfoSetApi, { cache: 'no-store' });
  const SiteInfo = await resInfo.json();


  return (<>
    <Layout>
      <Login
        SiteInfo={SiteInfo.data?.site_info}
      />
    </Layout>
  </>
  )
}
