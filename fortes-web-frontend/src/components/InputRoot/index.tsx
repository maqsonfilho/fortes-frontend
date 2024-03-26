import { FC, useCallback, useState } from 'react';
import { Label } from '~/components/Label';
import { Content, Error, Icon, InputContent, InputContentError, Root } from './style';
import { Props } from '~/@types/components/input-root';

export const InputRoot: FC<Props> = ({
  children,
  className,
  disabled,
  errorDescription,
  hasError = false,
  type,
  label,
  icon,
  changeIcon,
  onIconClick,
}) => {
  const [showIcon, setShowIcon] = useState(true);

  const handleIconClick = useCallback(
    (event: React.MouseEvent<Element, MouseEvent>) => {
      if (onIconClick) {
        onIconClick(event);
      }
      setShowIcon((prevShowIcon) => !prevShowIcon);
    },
    [onIconClick],
  );

  return (
    <Root className={className}>
      {label && <Label hasError={hasError}>{label}</Label>}

      <Content>
        {hasError ? (
          <InputContentError disabled={disabled} type={type}>
            {children}

            {changeIcon ? <Icon onClick={handleIconClick}>{showIcon ? icon : changeIcon}</Icon> : <Icon>{icon}</Icon>}
          </InputContentError>
        ) : (
          <InputContent disabled={disabled} type={type}>
            {children}

            {changeIcon ? <Icon onClick={handleIconClick}>{showIcon ? icon : changeIcon}</Icon> : <Icon>{icon}</Icon>}
          </InputContent>
        )}

        {hasError && !!errorDescription?.length && <Error>{errorDescription}</Error>}
      </Content>
    </Root>
  );
};
