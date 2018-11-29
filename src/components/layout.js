import React, { Component } from "react";
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header/index'
import Footer from './footer/index'
import './../style/preload.scss';
import './layout.css'



class Layout extends Component {
  
  componentDidMount() {

  }

  render() {
    const { pageContext = {} } = this.props;

    return <StaticQuery
      query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
      render={data => (
        
       <div className={`height100`}>
            <Helmet
              title={ pageContext.frontmatter ? pageContext.frontmatter.title : data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            >
              <html lang="en" />
            </Helmet>
          <div id='app' className="grid vertical">
            {/* <div classNameName="maintainanceMsg">
              <div className="msg-wrap">
                <div>
                  <img src="/assets/ic-warning.svg" alt=""/>
                  <span className="m-text"><strong>Please note:</strong>
                  Paytm Payment Gateway staging will be unavailable for testing due to scheduled maintenance between 23-Nov-2018 to 25-Nov-2018.</span>
                </div>
                <span className="msgCloseBtn" onClick={this.hideMaintinanceMsg}>
                  <img src="/assets/ic-close.svg" alt=""/>
                </span>
              </div>
            </div> */}
          
              <Header />
                <main> 
                {this.props.children}
                <Footer />
                </main>
              
          </div>
            {/* <DefaultPageLayout  user={this.state.user} userText={this.state.userText} loggedIn={this.state.loggedIn} showLogin={this.state.showLogin}>
            {children}
            </DefaultPageLayout> */}
            {/* <Header siteTitle={data.site.siteMetadata.title} />
            <div style={{ background: '#00b9f5' }}>
              <div className="headersub">
                <Link to={`${root}/`} className='link' activeClassName='linkactive'>Home</Link>
                <Link to={`${root}/docs/android`} className='link' activeClassName='linkactive'>Docs</Link>
              </div>
            </div>
            <div
              style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '2.0875rem 1.0875rem 1.45rem',
              }}>

              {children}
              <hr style={{ margin: 10, height: 2, background: '#f0f0f0' }} />
              MIT License | <a href="https://twitter.com/apuravchauhan">@apuravchauhan</a>
            </div> */}
          </div>
      )}
    />

  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
