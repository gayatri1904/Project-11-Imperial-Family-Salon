import React from "react";
import Logo from "../MyResources/logo.png";
import '../MyResources/Footer.css';
import MediaQuery from "react-responsive";
import {
	faFacebook,
	faInstagram,
	faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
	return (
		<>
			<footer>
				<MediaQuery minDeviceWidth={800}>
				<div class="content">
					<div class="top" style={{marginTop:"-50px"}}>
						<div class="logo-details" style={{display:"flex"}}>
							<img style={{ position:"relative",top:"50px",width: "50px",marginBottom:"100px" }} src={Logo} alt="logo"></img>
							<p style={{ position:"relative",top:"55px",paddingLeft:"20px",fontFamily:"Times New Roman",fontSize:"25px"}}>Imperial Family Salon & Makeover Studio</p>
						</div>
						<div class="media-icons">
							<a
								class="facebook social"
								target="_blank"
								href="https://www.facebook.com/tpc.pce"
								rel="noreferrer"
							>
								<i>
									{" "}
									<FontAwesomeIcon icon={faFacebook} size="2x" />
								</i>
							</a>
							<a
								class="instagram social"
								target="_blank"
								href="https://www.instagram.com/tpc.pce/"
								rel="noreferrer"
							>
								<i class="">
									{" "}
									<FontAwesomeIcon icon={faInstagram} size="2x" />
								</i>
							</a>
							<a
								class="Linkedin social"
								href="https://wa.me/919920422894"
								rel="noreferrer"
							>
								<i class="">
									{" "}
									<FontAwesomeIcon icon={faWhatsapp} size="2x" />
								</i>
							</a>
						</div>
					</div>
					<div class="link-boxes">
						<ul class="box">
							<li class="link_name">Owner</li>
							<li>
								<p style={{color:"white"}}>Mangal Anil Pagare</p>
							</li>
						</ul>
						<ul class="box">
							<li class="link_name">Address</li>
							<li>
							<p style={{color:"white",width:"300px"}}>Hariom Heritage CHS, Shop No.11, Sector 21, Kharghar, Navi Mumbai, Maharashtra 410210</p>
							</li>
						</ul>
						<ul class="box">
							<li class="link_name">Contact</li>
							<li>
								<p style={{color:"white"}}>
									9920422894</p>
							</li>
							<li>
								<p style={{color:"white"}}>8369650620</p>
							</li>
							<li>
								<p style={{color:"white"}}>imperialfamilysalon@gmail.com</p>
							</li>
						</ul>
					</div>
				</div>
				<iframe
								title={Map}
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30173.066258200015!2d73.05549187661465!3d19.035874475086946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3fa1d15fea7%3A0xeaf7e831944bcf2d!2sImperial%20Family%20Salon!5e0!3m2!1sen!2sin!4v1671702151163!5m2!1sen!2sin"
								width="600"
								height="400"
								frameborder="0"
								style={{marginLeft:"31vw",marginBottom:"50px",marginTop:"-50px"}}
								className="footer-map"
							></iframe>
			</MediaQuery>

			<MediaQuery maxDeviceWidth={600}>
				<div class="content">
					<div class="top" style={{marginTop:"-50px"}}>
						<div class="logo-details" style={{display:"flex"}}>
							<img style={{ position:"relative",top:"50px",width: "45px",marginBottom:"100px"}} src={Logo} alt="logo"></img>
							<p style={{ position:"relative",top:"57px",paddingLeft:"10px",fontSize:"20px",fontFamily:"Times New Roman"}}>Imperial Family Salon</p>
						</div>
						<div class="media-icons">
							<a
								class="facebook social"
								target="_blank"
								href="https://www.facebook.com/tpc.pce"
								rel="noreferrer"
							>
								<i>
									{" "}
									<FontAwesomeIcon icon={faFacebook} size="2x" />
								</i>
							</a>
							<a
								class="instagram social"
								target="_blank"
								href="https://www.instagram.com/tpc.pce/"
								rel="noreferrer"
							>
								<i class="">
									{" "}
									<FontAwesomeIcon icon={faInstagram} size="2x" />
								</i>
							</a>
							<a
								class="Linkedin social"
								target="_blank"
								href="https://wa.me/919920422894"
								rel="noreferrer"
							>
								<i class="">
									{" "}
									<FontAwesomeIcon icon={faWhatsapp} size="2x" />
								</i>
							</a>
						</div>
					</div>
					<div class="link-boxes">
						<ul class="box">
							<li class="link_name">Contact</li>
							<li>
								<p style={{color:"white",fontSize:"12px"}}>
									9920422894</p>
							</li>
							<li>
								<p style={{color:"white",fontSize:"12px"}}>8369650620</p>
							</li>
							<li>
								<p style={{color:"white",fontSize:"12px"}}>imperialfamilysalon@gmail .com</p>
							</li>
						</ul>
						<ul class="box">
							<li class="link_name">Owner</li>
							<li>
								<p style={{color:"white",fontSize:"12px"}}>Mangal Anil Pagare</p>
							</li>
						</ul>
						<ul class="box">
							<li class="link_name">Address</li>
							<li>
							<p style={{color:"white",width:"300px",fontSize:"12px"}}>Hariom Heritage CHS, Shop No.11, Sector 21, Kharghar, Navi Mumbai, Maharashtra 410210</p>
							</li>
						</ul>
					</div>
				</div>
				<iframe
								title={Map}
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30173.066258200015!2d73.05549187661465!3d19.035874475086946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3fa1d15fea7%3A0xeaf7e831944bcf2d!2sImperial%20Family%20Salon!5e0!3m2!1sen!2sin!4v1671702151163!5m2!1sen!2sin"
								width="300"
								height="200"
								frameborder="0"
								style={{marginLeft:"13vw",marginBottom:"50px",marginTop:"-50px"}}
							></iframe>
			</MediaQuery>
			</footer>
		</>
	);
};

export default Footer;
