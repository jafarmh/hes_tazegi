import { useDispatch, useSelector } from 'react-redux'

import CheckBoxInput from '../checkbox/CheckBoxInput'
import React from 'react'
import Rectangle from '@/asset/img/news.png';
import { RootState } from '@/app/redux/Store'
import { getImageProf } from '@/utility/Function'
import { setDataCategorySelectedValue } from '@/app/redux/reducer/general/CategorySelectedValue';

const CategoryCheckBoxList = ({ parentChange }: { parentChange: Function }) => {
    const dispatch = useDispatch()
    const DataCategory = useSelector((state: RootState) => state.categoryDatas)
    const DataCategorySelected  = useSelector((state: RootState) => state.CategorySelectedValue);
    const ChangedCheckbox = (change: boolean, value: any) => {
        let valueData=JSON.parse(value)
        let datas = [...DataCategorySelected];
        
        const index = datas.findIndex((item) => +item.id === +valueData.id);
        if (change && index < 0) {
            datas.push(valueData);
        }

        if (!change && index >= 0) {
            datas = datas.filter((item) => +item.id !== +valueData.id);
        }
    
        dispatch(setDataCategorySelectedValue(datas));
    }

    return (
        DataCategory.length>0 &&<div className='flex flex-row flex-wrap gap-2'>
            {DataCategory[0].id!==''&& DataCategory.map((item) => <div className='basis-[45%] flex flex-row gap-1 rounded-md p-1 bg-no-repeat bg-cover  bg-center  h-[70px] items-center'
                style={{
                    backgroundImage: `url(${getImageProf(item.attach)?.path ?? Rectangle.src})`,
                    backgroundRepeat: "no-repeat"
                }}>
                <div
                onClick={() => { item.have_child ? parentChange(item.id) : () => { } }}
                 className='px-[.5em] rounded-md text-white bg-[#80808094] text-xs h-[45px] flex   items-center w-full'>
                    <div className='text-right'>{!item.have_child && <CheckBoxInput
                        checked={DataCategorySelected.findIndex((items)=>+items?.id===+item.id)>=0?true:false}
                        change={ChangedCheckbox}
                        label=''
                        value={JSON.stringify(item)} />}
                    </div>
                    <div className='text-right'>
                        <small 
                            className={item.have_child ? `cursor-pointer` : ``}>
                            {item.name}
                        </small>
                    </div>
                </div>


            </div>)}

        </div>
    )
}

export default CategoryCheckBoxList