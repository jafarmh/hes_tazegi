import * as React from 'react';

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';
import SquareIcon from '@mui/icons-material/Square';
import Them from '../Them';

export default function  CheckboxesGroup() {
  return (
    <Them>
      <FormControlLabel control={<Checkbox

        icon={<CheckBoxOutlineBlankIcon />}
        checkedIcon={<SquareIcon />}
      />}
        label="سبک فیلتر" />

      <FormControlLabel control={<Checkbox
        icon={<CheckBoxOutlineBlankIcon />}
        checkedIcon={<SquareIcon />}
      />}
        label="نمایش شرکت‌های تایید شده" />

      <FormControlLabel control={<Checkbox
        icon={<CheckBoxOutlineBlankIcon />}
        checkedIcon={<SquareIcon />}
      />}
        label="نمایش شرکت‌های تایید شده" />
        
    </Them>
  );
}