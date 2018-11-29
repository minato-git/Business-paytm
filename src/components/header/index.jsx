import React, { Component } from "react";
import { Logobusiness } from "../svg-sprite";
import { Menumobile } from "../svg-sprite";
import * as style from './style.module.scss';

class Header extends Component {

  render() {

    return (
      <header className={`${style.header}`}>
        <div className={` container grid justify-between align-center h100`}>
          <div className={`grid justify-between`}>
            <a className={`${style.logoDesk} grid justify-center align-center`} href='/docs'>
              <Logobusiness />
            </a>
          </div>
          <div className={`${style.mobMenuWrap} grid align-center d-visible`}>
            <a href="/">
              <Menumobile/>
            </a>
          </div>
          <div className={`${style.topMenu} grid justify-between align-center h-xs`}>
            <ul className={`${style.menuList} grid-inline justify-between`}>
              <li className={`${style.topMenuLink}`}><a href="/">PRODUCTS</a></li>
              <li className={`${style.topMenuLink}`}><a href="/">PRICING</a></li>
              <li className={`${style.topMenuLink}`}><a href="/">Developers</a></li>
              <li className={`${style.topMenuLink}`}><a href="/">About</a></li>
            </ul>
            <a className={`btn btn-small btn-blue`} href="/">Login</a>
          </div>

        </div>
        
        {/* {
          this.props.state.showMainLogIn ?
            <div className={`popupWrapper  ${(this.props.state.showLogin && !this.props.state.loggedIn  ? ' fadeIn' : '')}`}>
              <div className="popup pos-abs iframeOpen">
                <div className="popup-wrapper pos-rel">
                  <span className="closePopup" onClick={this.hideLogin}><img src="/assets/ic-clear.svg" /></span>
                  <div className="popup-content">
                    <iframe id="oAuth" className="popup-iframe hidden" src="https://dashboard.paytm.com/developer-login" title="oAuth"></iframe>
                  </div>
                </div>
              </div>
            </div> : null
        } */}


        {/* <Overlay show={expandMenu} showDropdownMethod={this.showDropdownMethod} /> */}
        {/* <PopupTypeFirst show={activeOverlay === 'filter'}>
          <div className="p16">
            <h2>Filters</h2>
            <div>
              <Select
                options={RefundFilterOptions}
                showLabel={true}
                addClasses='header-select'
                showSearch={true}
              />
              <Select
                options={RefundFilterOptions}
                showLabel={true}
                addClasses='header-select'
                showSearch={true}
              />
              <Select
                options={RefundFilterOptions}
                showLabel={true}
                addClasses='header-select'
                showSearch={true}
              />
            </div>
          </div>
        </PopupTypeFirst> */}
        {/* <div className={`${style.bannerWrapper}`}>
          <div className={`container`}>
            <div className={`${style.bannerInner}`}>
                <h2>The easiest way to accept payments everywhere</h2>
            </div>
          </div>
        </div> */}
      </header>
    );
  }
}

export default Header;