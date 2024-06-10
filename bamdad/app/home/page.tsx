import { baseURL, baseURLWordpress } from "@/utility/Config";

import APIBack from "../redux/ApiBack";
import HomeC from "../components/home";
import HomeMobile from "@/app/components/home/HomeMobile";
import LayoutMobile from "@/app/components/layout/LayoutMobile";
import TabsBlueLine from "@/app/components/elements/tabs/TabsBlueLine";
import { exportSolutionApi } from "../redux/ApiCall/ApiAddress";

export default async function Home() {
  const newsRes = await fetch(baseURLWordpress+'?categories=1', { cache: "no-cache" });
  const news = await newsRes.json();

  const eventRes = await fetch(baseURLWordpress+'?categories=25', { cache: "no-cache" });
  const event = await eventRes.json();

  const megRes = await fetch(baseURLWordpress+'?categories=84', { cache: "no-cache" });
  const meg = await megRes.json();


  
  const mediaRes = await fetch(baseURLWordpress+'?categories=78', { cache: "no-cache" });
  const media = await mediaRes.json();
  
 
  
  const res = await fetch(baseURL + exportSolutionApi, { cache: 'no-store' });
  const ExportSolutionList = await res.json()
  return (<>
    <LayoutMobile>

      {/* tabs */}
       

      <HomeC
        ExportSolutionList={ExportSolutionList.data.data}
        news={news}
        Events={event}
        Media={media}
        Meg={meg}
      />


    </LayoutMobile>
  </>
  )
}
