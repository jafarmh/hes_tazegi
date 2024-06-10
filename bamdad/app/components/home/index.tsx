'use client';

import { ExportSolutionProps } from '@/app/interface/Entity';
import HomeMobile from './HomeMobile';
import React from 'react'
import TabsBlueLine from '../elements/tabs/TabsBlueLine';
import { useTranslation } from 'react-i18next';

export default function HomeC({ ExportSolutionList, news,Events,Media,Meg }:
    { ExportSolutionList: ExportSolutionProps[], news: any,Events:any,Media:any,Meg:any }
) {
    const {t}=useTranslation();
    return (
        <>
            <TabsBlueLine items={[
                { active: true, link: "#", title: t("allNews") },
                { active: false, link: "/exportSolution", title: t("exportSolution") },
                { active: false, link: "/exhibition", title: t("allExhibition") },
                { active: false, link: "/business", title: t("accounts") },
            ]} />

            <HomeMobile
                ExportSolutionList={ExportSolutionList}
                News={news}
                Events={Events}
                Media={Media}
                Meg={Meg}
            />
        </>
    )
}
