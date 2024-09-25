import * as React from 'react';

import {
  Select as SelectCn,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select';

type SelectValuesProps = {
  value: string;
  name: string;
}[];

type SelectProps = {
  placeholder: string;
  selectLabel: string;
  selectValues: SelectValuesProps;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

const Select = ({
  placeholder,
  selectLabel,
  selectValues,
  onChange,
}: SelectProps) => {
  return (
    <SelectCn onValueChange={(value) => onChange(value)}>
      <SelectTrigger className='w-[190px]'>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{selectLabel}</SelectLabel>
          {selectValues.map((selectValue) => (
            <SelectItem key={selectValue.value} value={selectValue.value}>
              {selectValue.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </SelectCn>
  );
};

export default Select;
