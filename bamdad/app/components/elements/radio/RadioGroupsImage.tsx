import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { emptyDataCategorySelectedValue, setDataCategorySelectedValue } from '@/app/redux/reducer/general/CategorySelectedValue';
import { useDispatch, useSelector } from 'react-redux';

import { CategoryProps } from '@/app/interface/Entity';
import Loader from '../Loader';
import React from 'react'
import Rectangle6 from '@/asset/img/news.png';
import { RootState } from '@/app/redux/Store';
import Them from '../Them'
import { baseURL } from '@/utility/Config';
import { getImageProf } from '@/utility/Function';
import useRtlLtr from '@/app/hooks/RtlLtr';

export default function RadioGroupsImage({ changeF, parentChange }: { changeF?: Function, parentChange: Function }) {

    const DataCategory = useSelector((state: RootState) => state.categoryDatas)
    const dispatch = useDispatch();
    const dir = useRtlLtr();
    const change = (value: CategoryProps) => {
        dispatch(emptyDataCategorySelectedValue());
        dispatch(setDataCategorySelectedValue([value]))
        if (changeF)
            changeF(value)
    }

    return (

        <Them>
            <FormControl>
                <RadioGroup
                // aria-labelledby="demo-radio-buttons-group-label"
                //defaultValue="female"
                //name="radio-buttons-group"
                >

                    <div className="flex flex-row justify-center flex-wrap gap-4">

                        {DataCategory[0].id !== '' && DataCategory.map((item) => {
                            return <>
                                <div className="text-white bg-[var(--gray)] rounded-2xl bg-blend-darken flex-none relative " key={item.id}>
                                    <img className=" object-cover rounded-2xl	max-[450px]:w-[130px] w-[180px] h-[70px]" src={getImageProf(item.attach)?.path ?? Rectangle6.src} alt={item.name} />
                                    <div
                                        onClick={() => { item.have_child ? parentChange(item.id) : () => { } }}
                                        className={`
                                    ${!item.have_child ? "absolute top-[20%] right-[0px] cursor-pointer bg-[#d9d9d994] rounded-2xl w-[90%] "
                                                : "bg-[#d9d9d994] absolute top-[20%] right-[0px] cursor-pointer rounded-2xl w-[90%] text-center p-1"}`}>

                                        {item.have_child && <span className='  text-black   '>{item.name}</span>}

                                        {!item.have_child && <FormControlLabel
                                            value={item}
                                            control={
                                                <Radio
                                                    size='small' value={JSON.stringify(item)} onChange={(e: any) => change(JSON.parse(e.target.value))}
                                                    className=' text-[10px]' />}
                                            label={<span className=' text-black text-xs rounded-xl '>{item.name}</span>} />
                                        }

                                    </div>

                                </div>
                            </>
                        })}
                        {DataCategory[0].id === '' && <Loader /> }
                    </div>
                </RadioGroup>
            </FormControl>
        </Them>

    )
}
