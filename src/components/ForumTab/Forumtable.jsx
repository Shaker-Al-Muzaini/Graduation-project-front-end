import React from "react";
import { Container, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

function Forumtable() {
	return (
		<Container style={{width:'800px'}} className="mt-5">
         <div className="d-flex justify-content-between mt-3">
					<Link className="text-right btn-blue my-3"  exact to="/AddTopic">
						Add a new Topic
					</Link>
          <Form.Control type="email" placeholder="Search" style={{width:'20%', margin:'10px'}} />

					</div>
			<Table>
				<thead style={{ background: "#1b1f5cc5", color: "white" }}>
					<tr className="text-center">
						<th style={{ padding: "15px" }}>Authors</th>
						<th style={{ padding: "15px" }}>Topics</th>
						<th style={{ padding: "15px" }}>Replies</th>
						<th style={{ padding: "15px" }}>Activity</th>
					</tr>
				</thead>
				<tbody  style={{ background: "white", color: "black" }}>
					<tr className="text-center">

							<td>
								<a href="http://localhost:3000/posts"><img src="/1.webp"   style={{borderRadius:'50%'}} width={"80px"} height={"50px"} /></a>
							</td>
							<td>
								<h6 >Comhputers & Gadgets</h6>
								<p>All things computers and tech.</p>
							</td>
							<td>15</td>
							<td>1 hrs, 10 min ago</td>


					</tr>
          <tr className="text-center">
						<td>
							<a href="http://localhost:3000/posts">	<img src="/1.webp" style={{borderRadius:'50%'}} width={"80px"} height={"50px"} /></a>
						</td>
						<td>
							<h6>Comhputers & Gadgets</h6>
							<p>All things computers and tech.</p>
						</td>
						<td>15</td>
						<td>1 hrs, 10 min ago</td>
					</tr>
					
				</tbody>
			</Table>
		</Container>
	);
}

export default Forumtable;
