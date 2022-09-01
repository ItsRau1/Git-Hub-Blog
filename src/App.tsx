import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { TransactionProvidier } from "./contexts/Context";
import { GlobalStyle } from "./styles/globalStyle";
import { defaultTheme } from "./styles/themes/defaultTheme";

export function App() {
  return (
    <ThemeProvider theme={ defaultTheme }>
      <GlobalStyle />
      <TransactionProvidier>
        <Header />
        <Main />
      </TransactionProvidier>
    </ThemeProvider>
  )
}

