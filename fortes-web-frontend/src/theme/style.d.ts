import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
    title: string;
    colors: {
      text: string;
      primary: string;
      secondary: string;
      success: string;
      error: string;

      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;

      opacity100: string;
      opacity200: string;
      opacity300: string;
      opacity400: string;
      opacity500: string;
      orange: string;
    };

    fontSizes: {
      1: string;
      10: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
    };

    radius: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      round: string;
    };

    shadows: {
      1: string;
      2: string;
    };

    space: {
      0: string;
      1: string;
      10: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
    };

    weight: {
      1: number;
      2: number;
      3: number;
      4: number;
      5: number;
      6: number;
      7: number;
      8: number;
      9: number;
    };

    zIndices: {
      appBar: number;
      drawer: number;
      modal: number;
      snackbar: number;
      tooltip: number;
    };
  }
}
