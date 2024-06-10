'use client'

import * as yup from 'yup'

import { AddNewFilePS, EditPS, GetMyListProduct, GetMyListService, GetProductDetail, RemoveFilePS } from '@/app/redux/ApiCall/ProductService';
import { AttachProps, CategoryProps, ProductData, TagProps } from '@/app/interface/Entity';
import { BlueLightBtn, DisableBtnLoadingBlue, OrangLightBtn } from '../../button/Btns';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react'
import { emptyProductMeData, setProductMeData } from '@/app/redux/reducer/user/Product';
import { emptyServicesMeData, setServicesMeData } from '@/app/redux/reducer/user/Services';
import { useDispatch, useSelector } from 'react-redux';

import Back from '@/asset/img/back.svg'
import CategoryDrawer from '../CategoryDrawer';
import ChooseCategory from '../../category/ChooseCategory';
import DrawerBottom from '..'
import Hashtags from '../../search/Hashtags';
import Product from '@/asset/img/product.png'
import ProductServiceItem from './ProductServiceItem';
import { RootState } from '@/app/redux/Store';
import ShowAttachWithRemove from '../../Show/ShowAttachWithRemove';
import SuccessDrawer from '../SuccessDrawer';
import TextSuccess from '../common/TextSuccess';
import { TimeShowSuccessDrawer } from '@/utility/Config';
import { setProductDetailData } from '@/app/redux/reducer/user/ProductDetail';
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
export default function EditProductBusinessDrawer(props: Props) {
    const { t } = useTranslation();
    const schema = yup.object({
        title: yup.string().required(t("titleReq")),
        price: yup.number().required(t("priceReq")),
        description: yup.string().required(t("descriptionReq")),
        category_id: yup.string().required(t("requireCategory")),
    }).required();
    const { register, handleSubmit, setValue, reset, getValues, resetField, control, formState: { errors } } = useForm<any>({ resolver: yupResolver(schema) });
    const Datas = useSelector((state: RootState) => state.ProductDetail);
    const { isOpen, changeOpen, type } = props
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openM, setOpenM] = useState(isOpen);
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false)
    const [openCategory, setOpenCategory] = useState(false);
    const [CategorySelected, setCategorySelected] = useState<CategoryProps>();


    const dispatch = useDispatch()

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
            setCategorySelected(data.category);
            let params:any=data
            delete(params['category']);
            delete(params['category_id']);

            reset(params);
        }
    }, [Datas])

    const RemoveFile = (param: AttachProps) => {
        RemoveFilePS(Datas.id.toString(), param.id.toString(), (res: any) => {
            GetProductDetail(Datas.id.toString(), (res: any) => {
                if (res) {
                    dispatch(setProductDetailData(res));
                }
            })
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
        })

    }
    const AttachFile = (id: string, param: any) => {
        return new Promise(resolve => {
            AddNewFilePS(id.toString(), param, (res: any) => { resolve(res) })
        })
    }

    const Submits = async (param: any, id: string, image: any, videos: any) => {
        setLoading(true);
        setDisabled(true);
        if (image !== undefined && image !== '') {
            await AttachFile(id, { file: image, type: "image" });
        }
        if (videos !== undefined && videos !== '') {
            await AttachFile(id, { file: videos, type: "video" });
        }

        EditPS(id.toString(), param, (res: any) => {
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
        });
    }

    const onSubmit: SubmitHandler<ProductData> = param => {

        let pr: any = param;
        let image = pr.image;
        let videos = pr.videos;
        let id = pr.id;
        if (CategorySelected !== undefined) {
            pr['category_id'] = CategorySelected?.id
            delete(pr['category']);
        }
        pr['tags'] = param.hashtag
        delete (pr['image']);
        delete (pr['videos']);
     
        Submits(pr, id, image, videos);

    };
    const dir = useRtlLtr()

    return (
        <>
            <DrawerBottom isOpen={openM} changeOpen={change} height='95%'>
                <div className="flex flex-col gap-y-6  mt-5" dir={dir} >
                    <div className="flex flex-row justify-center items-center">
                        <div className='flex-grow'><b className='text-[var(--black)]' >{t("edit")} {Datas.title ?? ""} </b></div>
                        <div onClick={() => change(false)} className='flex-none'><img src={Back.src} alt="back" /></div>
                    </div>
                    <div>
                        <ShowAttachWithRemove attach={Datas.attach} RemoveF={(item: AttachProps) => RemoveFile(item)} />
                    </div>
                    <hr className='bg-[--var(gray)] w-full h-1'></hr>
                    <form className="flex flex-col gap-y-6  mt-5" dir={dir} onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" {...register("id")} hidden name='id' />

                     
                  
                        <ProductServiceItem
                            CategorySelected={CategorySelected ?? undefined}
                            setCategorySelected={setCategorySelected}
                            openCategory={openCategory}
                            setOpenCategory={setOpenCategory}
                            register={register}
                            setValue={setValue}
                            errors={errors}
                            Controller={Controller}
                            control={control}
                            getValues={getValues}
                            reset={resetField}
                        />


                        <div className="flex flex-row flex-wrap gap-2 my-2">
                            {Datas.tags?.map((item) => (<Hashtags text={item.name} />))}
                        </div>



                        <DisableBtnLoadingBlue disabled={disabled} loading={loading} type='submit' click={() => { }} text={disabled ? t("completeAllField") : t("confirm")} />


                    </form>
                </div >

            </DrawerBottom >
            {
                openSuccess && <SuccessDrawer showHomeLink={false} changeOpen={setOpenSuccess} isOpen={openSuccess} text={<TextSuccess txt={t("successEdit")} />} />
            }


            {
                openCategory && <CategoryDrawer ChangeValue={(value: CategoryProps) => {setCategorySelected(value); resetField("category_id");setValue("category_id", value.id.toString()); }}
                    isOpen={openCategory} changeOpen={(value: boolean) => setOpenCategory(value)} />
            }
        </>
    )
}
