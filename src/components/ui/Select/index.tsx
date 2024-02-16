'use client'

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import St, { SelectProps } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

type Object = {
  codigo: string
  nome: string
}

type MultipleSelectProps = SelectProps & {
  data?: Object[],
  name?: string
}

export default function Select({data, name, ...rest} : MultipleSelectProps) {
  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">{name}</InputLabel>
        <St
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
          {...rest}
        >
          {data?.map((item) => (
            <MenuItem
              key={name}
              value={item.codigo}
            >
              {item.nome}
            </MenuItem>
          ))}
        </St>
      </FormControl>
    </div>
  );
}