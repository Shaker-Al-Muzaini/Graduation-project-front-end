import React from "react";
import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function ProfileDetails() {
	return (
		<Container>
			<div className="d-flex align-items-center">
				<img src="/1.webp" style={{borderRadius:'50%'}} className="my-3" height={150} width={150} alt="" />
                <div>
                <h2>Hasan Hoca</h2>
				<p>Gaza Palestine</p>
		
                </div>
				</div>
			<div style={{background:'#EAEAEA' , padding:'20px' , borderRadius:'20px'}}
            className="my-5"
            >
				<h2>About</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
					perspiciatis vitae tenetur, aspernatur sint provident animi eos, ea a nulla
					corrupti? Repellendus explicabo, itaque consequuntur optio blanditiis
					nostrum illo cum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Error, perspiciatis vitae tenetur, aspernatur sint provident animi eos, ea
					a nulla corrupti? Repellendus explicabo, itaque consequuntur optio
					blanditiis nostrum illo cum? Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Error, perspiciatis vitae tenetur, aspernatur sint
					provident animi eos, ea a nulla corrupti? Repellendus explicabo, itaque
					consequuntur optio blanditiis nostrum illo cum?
				</p>
			</div>
			<Tabs
				defaultActiveKey="home"
				transition={true}
				id="noanim-tab-example"
				className="mb-3"
			>
				<Tab eventKey="home" title="Services">
					<div style={{background:'#EAEAEA' , padding:'20px' , borderRadius:'10px'}}>
						<h4>services</h4>
                        <div className="d-flex gap-5">

                            <div  style={{background:'#0D6EFD',borderRadius:'20px'}}>
                            <img src="/1.webp" style={{borderRadius:'20px'}}  height={150} width={150} alt="" />
                                <h6 className="text-center mt-2" style={{fontSize:'14px', color:'white'}}>Medical Surgical</h6>

                            </div>
                        </div>
                        
                        
					</div>
				</Tab>
				<Tab eventKey="profile" title="Research && Reports">
                <div style={{background:'#EAEAEA' , padding:'20px' , borderRadius:'10px'}}>
						<h4>Research && Reports</h4>
                        <div className="d-flex gap-5">

                            <div  style={{background:'#0D6EFD',borderRadius:'20px'}}>
                            <img src="/1.webp" style={{borderRadius:'20px'}}  height={150} width={150} alt="" />
                                <h6 className="text-center mt-2" style={{fontSize:'14px', color:'white'}}>Medical Surgical</h6>

                            </div>
                        </div>
                        
                        
					</div>
				</Tab>
			</Tabs>
		</Container>
	);
}

export default ProfileDetails;
