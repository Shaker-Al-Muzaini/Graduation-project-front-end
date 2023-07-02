import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card, Button, NavLink } from "react-bootstrap";

import SerImg from "../../asset/image/Services.jpg";

import "../Services/Services.css";
import "../../asset/css/Bootstrap.min.css";
import AppUrl from "../../AppUrl/AppUrl";
import RestApp from "../../AppUrl/RestApp";
import { Link } from "react-router-dom";

class Services extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
		};
	}
	componentDidMount() {
		RestApp.GetRequest(AppUrl.th_services).then((result) => {
			this.setState({ data: result });
		});
	}

	render() {
		const List = this.state.data;
		const view = List.map((List) => {
			return (
				<Col lg={4} md={6} sm={12}>
					<Card className="serviceCard border-none">
						{" "}
						<Link to={"/ServiceDetailsPage/"+List.id}>
							<Card.Img
								variant="top"
								width={300}
								height={250}
								className="serviceimg"
								src={List.services_image}
							/>
							<div className="d-flex align-items-center justify-content-between">
								<div>
								<Card.Img variant="top" className="border-5" src={List.services_owner_image}  />
								</div>
								<div>
										<Card.Title className="text-right"> {List.services_owner_name}</Card.Title>
									<Card.Title className="serviceName">
										{List.services_name && List.services_name.split(" ").slice(0, 4).join(" ")}
									</Card.Title>

								</div>
							</div>
						</Link>
					</Card>
				</Col>
			);
		});
		return (
			<Fragment>
				<Container >
					<div className="d-flex justify-content-end mt-5">
					<Link className="text-right btn-blue "  exact to="/AddService">
						Add Service
					</Link>
					</div>
				
					<h1 className="text-center  serviceMainTitle"> SERVICES</h1>
					<div className="bottom "></div>

					<Row>{view}</Row>
				</Container>
			</Fragment>
		);
	}
}

export default Services;
