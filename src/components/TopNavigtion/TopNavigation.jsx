import React, { Component, Fragment } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "../TopNavigtion/TopNavigation.css";
import Logo from "../../asset/image/logo.png";
import LogoScroll from "../../asset/image/logoScroll.png";

import { NavLink } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

class TopNavigation extends Component {
	constructor() {
		super();
		this.state = {
			navBarTitle: "navTitle",
			logo: [Logo],
			NavbarBack: "navBackground",
			NavbarItems: "navItem",
			variant: "dark",
			isLoggedIn: false

		};

	}
	login = () => {
		this.setState({ isLoggedIn: true });
	}

	logout = () => {
		this.setState({ isLoggedIn: false });
	}


	// Scroll = () => {
	//     this.setState({ navBarTitle: 'navTitleScroll', logo: [LogoScroll] ,NavbarBack:'navBackgroundScroll' ,NavbarItems:'navItemScroll' ,  variant:"dark"})
	//
	// }

	componentDidMount() {
		window.addEventListener("scroll", this.Scroll);
	}

	render() {

		return (
			<Fragment>
				<Navbar

					fixed="top"
					style={{
						position: "fixed",
						width: "100%",
						height: "98px",
						left: "0px",
						top: "0px",

						background: "#FFFFFF",
						boxShadow: "0px 4px 4px rgba(5, 27, 53, 0.2)",
					}}
					collapseOnSelect
					expand="lg"
					className={this.state.NavbarBack}
				>
					<Navbar.Brand href="/">
						<div
							style={{
								position: "relative",
							}}
						>
							<img
								src={this.state.logo}
								style={{
									height: "70px",
									width: "85px",

								}}
							/>
							<div
								style={{
									position: "absolute",
									width: "50px",
									height: "45px",
									left: "105px",
									top: "13px",
									fontFamily: "Montserrat",
									fontStyle: "normal",
									fontWeight: "800",
									fontSize: "18px",
									lineHeight: "45px",
									display: "flex",
									alignItems: "center",
									color: "#3054A7",
								}}
							>
								R M E
							</div>
							<div
								style={{
									position: "absolute",
									width: "323px",
									height: "45px",
									left: "105px",
									top: "43px",
									fontFamily: "Montserrat",
									fontStyle: "normal",
									fontWeight: "600",
									fontSize: "15px",
									lineHeight: "45px",
									display: "flex",
									alignItems: "center",
									color: "#3054A7",
								}}
							>
								Revolutionizing Medical Education
							</div>
						</div>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ms-auto d-flex gap-4 me-5 ">
							<div>
								<NavLink
									exact
									activeStyle={{ color: "#f0ec2c" }}
									className={this.state.NavbarItems}
									to="/"
								>
									Home
								</NavLink>
							</div>
							<div>
								<NavLink
									exact
									activeStyle={{ color: "#f0ec2c" }}
									className={this.state.NavbarItems}
									to="/about"
								>
									About
								</NavLink>
							</div>
							<div>
								<NavLink
									exact
									activeStyle={{ color: "#f0ec2c" }}
									className={this.state.NavbarItems}
									to="/AllServices"
								>
									Services
								</NavLink>
							</div>
							<div>
								<NavLink
									exact
									activeStyle={{ color: "#f0ec2c" }}
									className={this.state.NavbarItems}
									to="/AllCourses"
								>
									Courses
								</NavLink>
							</div>
							<div>
								<NavLink
									exact
									activeStyle={{ color: "#f0ec2c" }}
									className={this.state.NavbarItems}
									to="/AllProject"
								>
									Researches & Reports
								</NavLink>
							</div>
							<div>
								<NavLink
									exact
									activeStyle={{ color: "#f0ec2c" }}
									className={this.state.NavbarItems}
									to="/forum"
								>
									Forum
								</NavLink>
							</div>
							<div>
								<NavLink
									exact
									activeStyle={{ color: "#f0ec2c" }}
									className={this.state.NavbarItems}
									to="/contact"
								>
									Contact
								</NavLink>
							</div>
							<Nav className="ms-5 d-flex gap-2">
								{this.state.isLoggedIn ? (
									<div>
										<NavLink
											exact
											activeStyle={{ color: "#f0ec2c" }}
											className={this.state.NavbarItems}
											to="/profile"
										>
											<FontAwesomeIcon icon={faUser} />
										</NavLink>
									</div>
								) : (
									<>
										<div>
											<NavLink
												exact
												activeStyle={{ color: "#f0ec2c" }}
												className={this.state.NavbarItems}
												to="/login"
												onClick={() => this.login()} // استدعاء login() عند النقر على الرابط "Login"
											>
												Login
											</NavLink>
										</div>
										<div>
											<NavLink
												style={{
													background: "#014dff",
													color: "#fafafa",
													padding: "4px 20px",
													borderRadius: "10px",
												}}
												exact
												activeStyle={{ color: "#f0ec2c" }}
												className={this.state.NavbarItems}
												to="/register"
												onClick={() => this.logout()} // استدعاء logout() عند النقر على الرابط "Register"
											>
												Register
											</NavLink>
										</div>
									</>
								)}
							</Nav>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Fragment>
		);
	}
}
export default TopNavigation;
