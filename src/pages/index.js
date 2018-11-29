import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import $ from 'jquery';


class IndexPage extends Component { 

  
  
  render()  {

    $(".btn-text").click( function() {
      debugger;
      alert('jquery chal gyi');
    })
      return (
       

        <Layout>
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
          <button className={'btn-text'}>Click me</button>

          <picture>
            <source type="image/webp"  srcSet="/assets/images/gatsby-astronaut.webp"/>
            <source type="image/png"  srcSet="/assets/gatsby-astronaut.png"/>
            <img alt='' src="/assets/gatsby-astronaut.png"/>
          </picture>
          <picture>
            <source type="image/webp"  srcSet="/assets/images/art-js.webp"/>
            <source type="image/png"  srcSet="/assets/art-js.png"/>
            <img alt='' src="/assets/art-js.png"/>
          </picture>
          </div>
          <Link to="/page-2/">Go to page 2</Link>
        </Layout>
      );
  }
}

export default IndexPage
