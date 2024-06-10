'use client'

import * as yup from 'yup'

import { AddNewPS, GetMyListProduct, GetMyListService } from '@/app/redux/ApiCall/ProductService';
import { CategoryProps, ProductData } from '@/app/interface/Entity';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { DisableBtnLoadingBlue, OrangLightBtn } from '../../button/Btns';
import React, { useEffect, useState } from 'react'
import { emptyProductMeData, setProductMeData } from '@/app/redux/reducer/user/Product';
import { emptyServicesMeData, setServicesMeData } from '@/app/redux/reducer/user/Services';
import { useDispatch, useSelector } from 'react-redux';

import Back from '@/asset/img/back.svg'
import CategoryDrawer from '../CategoryDrawer';
import ChooseCategory from '../../category/ChooseCategory';
import DrawerBottom from '..'
import Hashtags from '../../search/Hashtags';
import InputGray from '@/app/components/elements/inputs';
import NumberFormatsGray from '../../inputs/NumberFormats';
import { RootState } from '@/app/redux/Store';
import SuccessDrawer from '../SuccessDrawer';
import TextAreaGray from '@/app/components/elements/inputs/TextArea';
import TextSuccess from '../common/TextSuccess';
import { TimeShowSuccessDrawer } from '@/utility/Config';
import Upload from '../../button/Upload';
import UploadVideo from '../../button/UploadVideo';
import { emptyProductDetailData } from '@/app/redux/reducer/user/ProductDetail';
import galleryAdd from '@/asset/img/gallery-add.svg'
import { toast } from 'react-toastify';
import useRtlLtr from '@/app/hooks/RtlLtr';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';

interface Props {
    isOpen: true | false,
    height?: string,
    changeOpen: Function,
    window?: () => Window;
    type: "service" | "product"
}
export default function AddEditProductBusinessDrawer(props: Props) {
    const { t } = useTranslation();
    const schema = yup.object({
        title: yup.string().required(t("titleReq")),
        price: yup.number().required(t("priceReq")).typeError(t("requirePriceNumber")),
        description: yup.string().required(t("descriptionReq")),
        category_id: yup.string().required(t("requireCategory")),

    }).required();
    const { register, handleSubmit, setValue, reset, resetField, control, getValues, formState: { errors } } = useForm<any>({ resolver: yupResolver(schema) });
    const Datas = useSelector((state: RootState) => state.ProductDetail);
    const { isOpen, changeOpen, type } = props
    const [openM, setOpenM] = useState(isOpen);
    const [disabled, setDisabled] = useState(false);
    const [CategorySelected, setCategorySelected] = useState<CategoryProps>();
    const [loading, setLoading] = useState(false)
    const [openSuccess, setOpenSuccess] = useState(false);
    const [imgSrc, setImgSrc] = useState<any>();
    const [openCategory, setOpenCategory] = useState(false);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(emptyProductDetailData());

    }, [])
    const change = (value: boolean) => {
        setOpenM(value)
        changeOpen(value)
    }

    useEffect(() => {
        if (Datas) {
            let data = Datas;
            let hashtags: string[] = [];
            if (data.tags) {
                data.tags.forEach(tag => {
                    hashtags.push(tag.name)
                });
            }
            data = { ...data, ...{ hashtag: hashtags.join(' ') } }
            reset(data);
        }
    }, [Datas])

    const onSubmit: SubmitHandler<ProductData> = param => {
        let params: any = param
        params['type'] = type
        let tag = param.hashtag !== undefined ? param.hashtag.split(" ") : [];
        let tags: any = [];
        tag.forEach(item => {
            if (item !== "")
                tags.push({ name: item })
        });
        if (tags.length > 0) {
            params['tags'] = tags
        }
        delete (params['hashtag']);
        delete (params['user']);
        delete (params['id']);
        delete (params['user_id']);
        delete (params['attach']);

        if (params?.image === '') {
            delete (params['image']);
        }
        delete(params['category']);

        setLoading(true);
        setDisabled(true);
        AddNewPS(params, (res: any) => {
            setLoading(false);
            setDisabled(false);
            if (res) {

                GetMyListProduct("1", (res: any) => {
                    if (res) {
                        dispatch(emptyProductMeData());
                        dispatch(setProductMeData(res.data));
                    }
                })
                GetMyListService("1", (res: any) => {
                    if (res) {
                        dispatch(emptyServicesMeData());
                        dispatch(setServicesMeData(res.data));
                    }
                })
                setOpenSuccess(true);
                setTimeout(() => {
                    change(false);
                }, TimeShowSuccessDrawer);
            }
        }, type);

    };

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
    const dir = useRtlLtr()
    return (
        <>
            <DrawerBottom isOpen={openM} changeOpen={change} height='95%'>
                <div className="flex flex-col gap-y-6  mt-5" dir={dir} >
                    <div className="flex flex-row justify-center items-center">
                        <div className='flex-grow'><b className='text-[var(--black)]' >{t("addProductService")}</b></div>
                        <div onClick={() => change(false)} className='flex-none'><img src={Back.src} alt="back" /></div>
                    </div>
                    <form className="flex flex-col gap-y-6  mt-5" dir={dir} onSubmit={handleSubmit(onSubmit)}>


                        <div>
                            <Upload
                                text={t("addBannerImg")}
                                accept="image/*"
                                color='lightBlue'
                                colorText='blue'
                                showFileName={false}
                                iconImg={galleryAdd.src}
                                changeValue={(file: any) => SetImg(file)}
                                Controller={Controller}
                                control={control}
                                getValues={getValues}
                                name="image"
                                reset={resetField}
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
                            reset={resetField} />
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


                        <div>
                            <DisableBtnLoadingBlue disabled={disabled} loading={loading} type='submit' click={() => { }} text={disabled ? t("completeAllField") : t("confirm")} />

                        </div>
                    </form>
                </div>

            </DrawerBottom>


            {
                openSuccess && <SuccessDrawer showHomeLink={false} changeOpen={setOpenSuccess} isOpen={openSuccess} text={<TextSuccess txt={t("successAdd")} />} />
            }

            {
                openCategory && <CategoryDrawer ChangeValue={(value: CategoryProps) => { setCategorySelected(value); setValue("category_id", value.id.toString()); }}
                    isOpen={openCategory} changeOpen={(value: boolean) => setOpenCategory(value)} />
            }
        </>
    )
}
