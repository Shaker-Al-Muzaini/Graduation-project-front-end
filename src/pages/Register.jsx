import React from "react";
import "./PagesDesign.css";
import { Button, Col, Container, Form, NavLink, Row } from "react-bootstrap";
function Register() {
	return (
		<div className="center bg">
			<img src="/logo.png" className="my-3" width={"23%"} height={170} />
			<div className="glass">
				<Container className="mt-3 py-1 px-5">
					<p className="text-center">Register</p>
					<Form>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Row>
								<Col>
									<Form.Control type="text" placeholder="FirstName" className="radius" />
								</Col>
								<Col>
									<Form.Control type="text" placeholder="LastName" className="radius" />
								</Col>
							</Row>
							<Form.Control
								type="email"
								className="mt-3 radius"
								placeholder="Email"
							/>
								<Form.Control
								type="password"
								className="mt-3 radius"
								placeholder="password"
							/>
								<Form.Control
								type="password"
								className="mt-3 radius"
								placeholder="ConfirmPassword"
							/>

							<Button className="mt-3 w-100 radius" href="http://localhost:3000/" variant="primary" type="submit">
								Register
							</Button>{" "}
						</Form.Group>
					</Form>
				</Container>
			</div>
			<p className="d-flex align-items-center">
				you have an account ?{" "}
				<NavLink exact to="/" className="ylo m-0"  href="http://localhost:3000/login">
					Login
				</NavLink>
			</p>
			
		</div>
	);
}

export default Register;
