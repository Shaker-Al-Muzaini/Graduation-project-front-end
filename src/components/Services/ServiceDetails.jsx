import React, {Component, Fragment} from "react";
import {Col, Card, Container, Button, Row} from "react-bootstrap";

import "../Services/Services.css";
import "../../asset/css/Bootstrap.min.css";
import ReactHtmlParser from 'react-html-parser'
class ServiceDetails extends Component {
	constructor(props) {
		super();
	}

	render() {
		let price='';
		let services_image ='';
		let srvices_description='';
		let services_owner_name='';
		let services_owner_image='';
		let services_name='';
		//
		let  Array=this.props.ServicessData;
		//
		price=Array['price'];
		services_image=Array['services_image'];
		srvices_description=Array['services_description'];
		services_owner_name=Array['services_owner_name'];
		services_owner_image=Array['services_owner_image'];
		services_name= Array['services_name'];



		const List = [services_name ];

		const view = List.map((List) => {
			return (
				<Col lg={12} md={6} sm={12}>
					<Card className="serviceCard border-none">
						{" "}
						<div className="d-flex align-items-center justify-content-between">
							<div className="d-flex avat align-items-center">
								<Card.Img variant="top" className="border-5" src={services_owner_image} />
								<h4>{services_owner_name} </h4>
							</div>
							<div>
								<Card.Title className="text-right">{price}$</Card.Title>
								<Card.Title className="serviceName">{services_name}</Card.Title>

							</div>
						</div>
						<Card.Img
							variant="top"
							width={300}
							height={250}
							className="serviceimg"
							src={services_image}
						/>


						<h3 className="mt-5">Srvices Descriptionr</h3>
						<p>
							{ReactHtmlParser(srvices_description)}
						</p>
					</Card>
				</Col>
			);
		});
		return (
			<Fragment>


				<Container>
					<div className="d-flex justify-content-end mt-5">
						<Button className="text-right btn-blue " >
							Buy now						</Button>
					</div>




					<Row>{view}</Row>
				</Container>
			</Fragment>
		);
	}
}

export default ServiceDetails;
