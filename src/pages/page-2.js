import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Helmet from 'react-helmet'


class SecondPage extends Component {  
  render() {
      return (
        <Layout>
          <h1>Hi from the second page</h1>
          <p className=".icon-bg">Welcome to page 2</p>
          <Link to="/">Go back to the homepage</Link>
          <Helmet>
            <script src="/js/jotForm.js"></script>
          </Helmet>
        </Layout>
      );
  }
}

export default SecondPage
