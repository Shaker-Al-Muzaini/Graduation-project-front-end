import React, { useState } from "react";
import "./PagesDesign.css";
import { Button, Container, Form, NavLink } from "react-bootstrap";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	function login(e) {
		e.preventDefault();
		if (password === "123") {
			const token = "abc";
			localStorage.setItem("token", token);
			localStorage.setItem("email", email);
			setIsLoggedIn(true); // تحديث حالة isLoggedIn
			window.location.href = "http://localhost:3000/";
		} else {
			alert("wrong details");
		}
	}

	return (
		<div className="center bg">
			<img src="/logo.png" className="my-3" width={"23%"} height={170} />
			<div className="glass">
				<Container className="mt-5 py-3 px-5">
					<p className="text-center">Login</p>
					<Form>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Control
								type="email"
								placeholder="Email"
								className="radius"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<Form.Control
								type="password"
								className="mt-3 radius"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>

							<Button
								className="mt-3 w-100 radius"
								variant="primary"
								onClick={login}
								type="submit"
							>
								Submit
							</Button>
							{}
						</Form.Group>
					</Form>
				</Container>
			</div>
			<p className="d-flex align-items-center">
				dont have an account ?{" "}
				<NavLink exact to="/" className="ylo m-0" href="http://localhost:3000/register">
					Sign Up
				</NavLink>
			</p>
			<NavLink exact to="/" className="ylo m-0">
				Forgot Password ?
			</NavLink>
		</div>
	);
}

export default Login;
