import * as React from 'react';

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';
import SquareIcon from '@mui/icons-material/Square';
import Them from '../Them';

export default function CheckBoxInput({ label, value, change, checked = false }: { label: string, value: any, checked: boolean, change: (checked: boolean, data: any) => any }) {

  return (
    <Them>
      <FormControlLabel control={<Checkbox
        value={value}
        checked={checked}
        onChange={(e) => change(e.currentTarget.checked, e.currentTarget.value)}
        icon={<CheckBoxOutlineBlankIcon />}
        checkedIcon={<SquareIcon />}
      />}
        label={label} />


    </Them>
  );
}