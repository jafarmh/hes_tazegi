import React from "react";

export interface ChildrenProps {
    children: React.ReactNode
}

export interface ImgCardProps {
    img:string,
    title:string,
    text:string,
    width?:string
}

export interface CartImgUserProps{
    img:string,
    title:string,
    description:string,
    avatar:string,
    name:string,
    date:string
}

export interface IconTxtProps{
    icon:string,
    txt:string
}
export interface TitleDetailProps{
    title:string,
    detail:string
}

export interface ButtonProps extends ChildrenProps{
    bg?:string,
    txt?:string
}

export interface CategoryHeaderProps{
    img:string,
    title:string,
    list:string[]
}