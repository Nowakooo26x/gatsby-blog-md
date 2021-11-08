import * as React from "react"

import Container from '@mui/material/Container';

const Main = ({children}) => {
  return (
    <main>
        <Container maxWidth="lg">
            {children}
        </Container>     
    </main>
  )
}

export default Main