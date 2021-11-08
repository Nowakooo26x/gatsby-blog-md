import * as React from "react"

import Header from "./header/Header"
import Main from "./mian/Main"
import Footer from "./footer/Footer"

const Layout = ({children}) => {
  return (
    <>
        <Header/>
        <Main>
          {children}
        </Main>
        <Footer/>
    </>
  )
}

export default Layout