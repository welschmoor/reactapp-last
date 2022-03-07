import { ThemeProvider } from "styled-components"
import { GlobalStyle, darkTheme } from "../styles/styleGLOBAL"
import Layout from "../components/Layout"


const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}


export default App
