import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography";

const Footer = () => {
  const {site: {siteMetadata: { title }}} = useStaticQuery(graphql`{
    site {
      siteMetadata {
        title
      }
    }
  }
  `)

  return (
    <footer>
        <Divider>
          <Typography>
          {title}
          </Typography>
        </Divider>
    </footer>
  )
}

export default Footer