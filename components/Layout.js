



import styled from "styled-components";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Navbar />
      {children}
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  padding: 20px;
`


export default Layout