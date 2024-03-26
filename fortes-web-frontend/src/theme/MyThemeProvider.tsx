import { ThemeProvider } from 'styled-components';
import { light } from '~/theme';
import GlobalStyle from './globalStyle';

export const MyThemeProvider = ({ children }: any) => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle /> {children}
    </ThemeProvider>
  );
};
