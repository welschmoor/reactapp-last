import { ThemeProvider } from "styled-components"
import { GlobalStyle, darkTheme } from "../styles/styleGLOBAL"


const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />

      <Component {...pageProps} />

    </ThemeProvider>
  )
}


export default App
