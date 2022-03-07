
import Link from "next/link"
import { useRouter } from "next/router"
import styled from "styled-components"


const Navbar = () => {
  const router = useRouter()
  console.log('router', router)
  const path = router.pathname
  console.log('path', path)

  return (
    <Nav>
      <Link href="/" passHref><A><LinkText />Home</A></Link>
      <Link href="/about" passHref><A><LinkText />About</A></Link>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  gap: 30px;
`

const LinkText = styled.div`

`

const A = styled.a`

`

export default Navbar