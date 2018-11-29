import React, { Component } from "react";
import * as style from './style.module.scss';
import { Logodeveloper } from "../svg-sprite";


class Footer extends Component {

	render() {
		return (
	<footer className={`${style.footer}`}>
		<div className={`${style.signupOuterWrap} container`}>
			<div className={`${style.signupBox} grid justify-center align-center`}>
				<p>Start accepting Payments today</p>
				<button className={`btn btn-primary`}>Sign up for free</button>
			</div>
		</div>
		<div className={`${style.footerTop}`}>
			<div className={`grid justify-between container`}>
				<div className={`${style.companyInfo}`}>
					<Logodeveloper/>
					<h4 className={`${style.infoHeading}`}>India’s Largest & most trusted payments network.</h4>
					<p>&copy; 2018 Paytm <a href="/">Privacy and terms</a></p>
				</div>
				<div className={`${style.companySitemap} grid justify-between h-xs`}>
					<div className={`${style.sitemapBox}`}>
						<h4>Offerings</h4>
						<ul className={`${style.sitemapList}`}>
							<li><a href="/">Accept Payments Online</a></li>
							<li><a href="/">Accept Payments In-Store</a></li>
							<li><a href="/">Accept Payments via SMS/Chat or Email</a></li>
							<li><a href="/">Food Wallet</a></li>
							<li><a href="/">Paytm Cash</a></li>
							<li><a href="/">Paytm Gold</a></li>
						</ul>
					</div>
					<div className={`${style.sitemapBox}`}>
						<h4>Offerings</h4>
						<ul className={`${style.sitemapList}`}>
							<li><a href="/">Accept Payments Online</a></li>
							<li><a href="/">Accept Payments In-Store</a></li>
							<li><a href="/">Accept Payments via SMS/Chat or Email</a></li>
							<li><a href="/">Food Wallet</a></li>
							<li><a href="/">Paytm Cash</a></li>
							<li><a href="/">Paytm Gold</a></li>
						</ul>
					</div>
					<div className={`${style.sitemapBox}`}>
						<h4>Offerings</h4>
						<ul className={`${style.sitemapList}`}>
							<li><a href="/">Accept Payments Online</a></li>
							<li><a href="/">Accept Payments In-Store</a></li>
							<li><a href="/">Accept Payments via SMS/Chat or Email</a></li>
							<li><a href="/">Food Wallet</a></li>
							<li><a href="/">Paytm Cash</a></li>
							<li><a href="/">Paytm Gold</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div className={`${style.footerBottom} max-wrap grid align-center justify-between h100`}>
			<div className={`container`}>
				<div className={`${style.footerInner}`}>
					<ul className={`${style.footerList}  max-wrap`}>
						<li>
							<a href="/">About</a>
						</li>
						<li>
							<a href="/">Press</a>
						</li>
						<li>
							<a href="/">Blog</a>
						</li>
						<li>
							<a href="/">Developers</a>
						</li>
						<li>
							<a href="/">Contact</a>
						</li>
						<li>
							<a href="/">Jobs</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>);
	}
}

export default Footer;
