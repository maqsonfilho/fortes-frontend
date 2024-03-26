import { FC, forwardRef, useCallback, useState } from 'react';
import { Select } from 'antd';// Seus tipos de props do select
import { InputRoot } from '~/components/InputRoot';
import { InputContent } from '../InputRoot/style';

interface Option {
    value: string;
    label: string;
  }

interface Props {
    name: string;
    options: Option[]; // Array de opções
    value?: string; // Valor selecionado
    disabled?: boolean;
    placeholder?: string;
    onChange?: (value: string) => void; // Função de callback para quando uma opção for selecionada
    hasError?: boolean;
  }
  

const { Option } = Select;

export const SelectField: FC<Props> = forwardRef((props) => {
  const [value, setValue] = useState(props.value);
  const id = `selectfield-${props.name}`;

  const handleChange = useCallback((value: string) => {
    setValue(value);
    if (props.onChange) {
      props.onChange(value);
    }
  }, [props.onChange]);

  return (
    <InputRoot hasError={props.hasError}>
      <InputContent>
        <Select
          disabled={props.disabled}
          onChange={handleChange}
          placeholder={props.placeholder}
          value={value}
          id={id}
        >
          {props.options.map(option => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </InputContent>
    </InputRoot>
  );
});