import { FC, forwardRef, useCallback, useState } from 'react';
import { InputRoot } from '~/components/InputRoot';
import { Props } from '../../@types/components/text-field';
import { InputContent } from './style';

export const TextField: FC<Props> = forwardRef((props, ref) => {
  const [inputType, setInputType] = useState(props.type);
  const id = `textfield-${props.type}-${props.name}`;

  const handleIconClick = useCallback(() => {
    setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  }, []);

  return (
    <InputRoot
      {...props}
      changeIcon={inputType === 'password' ? '' : ''} //add icons with open and closed eyes
      onIconClick={handleIconClick}
      hasError={props.hasError}
    >
      <InputContent
        ref={ref as React.MutableRefObject<HTMLInputElement>}
        disabled={props.disabled}
        maxLength={props.maxLength}
        name={props.name}
        onChange={props.onChange}
        placeholder={props.placeholder}
        type={inputType}
        value={props.value}
        id={id}
      />
    </InputRoot>
  );
});
