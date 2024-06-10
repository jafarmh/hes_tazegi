import * as React from 'react';

import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Them from '../Them';
import { useTranslation } from 'react-i18next';

export default function RadioFilterType({Change}:{Change:Function}) {
    const {t}=useTranslation();
    return (
        <Them>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label"> </FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="product"
                    name="radio-buttons-group"
                    onChange={(e:any)=>Change(e.currentTarget.value)}
                >
                    <FormControlLabel className='text-[var(--black)]'  value="product" control={<Radio className='text-[var(--black)]' />} label={t("products")} />
                    <FormControlLabel className='text-[var(--black)]' value="service" control={<Radio className='text-[var(--black)]' />} label={t("services")} />
                    <FormControlLabel className='text-[var(--black)]' value="brochure" control={<Radio className='text-[var(--black)]' />} label={t("brochure")}/>
                    <FormControlLabel className='text-[var(--black)]' value="user" control={<Radio className='text-[var(--black)]' />} label={t("accounts")}/>
                    <FormControlLabel className='text-[var(--black)]' value="exportSolution" control={<Radio className='text-[var(--black)]' />} label={t("exportSolution")}/>
                </RadioGroup>
            </FormControl>
        </Them>
    );
}