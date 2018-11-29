import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
    <picture>
      <source type="image/webp" srcset="/assets/images/gatsby-astronaut.webp"/>
      <source type="image/png" srcset="/assets/gatsby-astronaut.png"/>
      <img alt='' src="/assets/gatsby-astronaut.png"/>
    </picture>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
