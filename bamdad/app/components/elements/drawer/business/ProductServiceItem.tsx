import React, { useEffect, useState } from 'react'

import ChooseCategory from '../../category/ChooseCategory'
import Hashtags from '../../search/Hashtags'
import InputGray from '../../inputs'
import TextAreaGray from '../../inputs/TextArea'
import Upload from '../../button/Upload'
import UploadVideo from '../../button/UploadVideo'
import galleryAdd from '@/asset/img/gallery-add.svg'
import { useTranslation } from 'react-i18next'

export default function ProductServiceItem(props: any) {
    const { t } = useTranslation();
    const { setValue, register, errors, control, Controller, getValues, reset,CategorySelected,setCategorySelected,openCategory,setOpenCategory } = props
    const [imgSrc, setImgSrc] = useState<any>();

    useEffect(()=>{
        if(CategorySelected !==undefined){
            setValue("category_id",CategorySelected?.id??"")
        }
    },[])

    useEffect(() => {
        if (getValues("image") !== '' && getValues("image") !== undefined) {
            SetImg(getValues("image"))
        } else {
            setImgSrc(undefined)
        }
    }, [getValues("image")]);


    const SetImg = (img: File) => {
        let reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onloadend = function (e: any) {
            setImgSrc(reader.result ?? undefined)
        };
    }

    return (
        <>

            {/* {imgSrc && <div>
                <img src={imgSrc} alt=".." className='rounded-xl w-28 h-28 object-cover' />
            </div>} */}
            <div>
                <Upload text={t("addBannerImg")}
                    accept="image/*"
                    color='lightBlue'
                    colorText='blue'
                    iconImg={galleryAdd.src}
                    changeValue={(file: any) => SetImg(file)}
                    Controller={Controller}
                    control={control}
                    getValues={getValues}
                    name="image"
                    reset={reset}
                    showFileName={false}
                    imgSrc={imgSrc}
                />
            </div>
            {/* <div className="flex flex-row gap-x-2 justify-between">
                        <div><img src={Product.src} alt="" /></div>
                        <div><img src={Product.src} alt="" /></div>
                        <div><img src={Product.src} alt="" /></div>

                    </div>  */}


            <ChooseCategory
                CategorySelected={CategorySelected ?? undefined}
                setCategorySelected={setCategorySelected}
                openCategory={openCategory}
                setOpenCategory={setOpenCategory}
                Controller={Controller}
                control={control}
                getValues={getValues}
                name='category_id'
                reset={reset} />
            <div>

                <p className='text-red-400 font-bold text-sm '>
                    {errors['category_id']?.message?.toString()}
                </p>

            </div>
            <div >
                <InputGray name='title' register={register} errors={errors} key='bp-name' placeholder={t("title")} />
            </div>
            <div >

                <InputGray type='number' errors={errors} register={register} placeholder={t("price")} name='price' key='bp-price' />
            </div>

            <div className='w-full'>
                <TextAreaGray name='description' register={register} errors={errors} key='bp-description' placeholder={t("description")} />
            </div>
            <div>
                <UploadVideo accept='.mp4' text={t("addBannerVideo")} changeValue={(file: any) => setValue("videos", file)} />
                {/* <OrangLightBtn click={()=>{}} text='افزودن ویدئو' icon={<img src={videoAdd.src} />}/> */}
            </div>
            <div >
                <InputGray name='hashtag' register={register} errors={errors} key='bp-hashtag' placeholder={t("addBannerTag")} />
            </div>

            {/* <div className='flex flex-row gap-x-2' >
                        <Hashtags text='محصولات' />
                        <Hashtags text='محصولات_صادراتی' />
                    </div> */}
            <div></div>
        </>
    )
}
