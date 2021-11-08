import * as React from "react"
import { Link } from "gatsby"

import Layout from "../layout/Layout"

import Typography from '@mui/material/Typography';

const NotFoundPage = () => {
  return (
    <Layout>
        <Typography>
          Strona nie istnieje, error: 404.
        </Typography>
        <Link to="/">Go home</Link>
    </Layout>
  )
}

export default NotFoundPage
