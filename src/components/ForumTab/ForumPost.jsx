import React from "react";
import { Fragment } from "react";
import { Container, Form } from "react-bootstrap";
import TopNavigation from "../TopNavigtion/TopNavigation";
import Footer from "../Footer/Footer";
import TopPage from "../../pages/TopPage";

function ForumPost() {
	return (
		<Fragment>
      <div  style={{background:'#F2F6F7'}}>
			<TopNavigation />
			<TopPage pagetitle="Forum" />

			<div style={{minHeight:'150vh'}} className="bg-h mt-5">
				<Container>
					<div>
						<div style={{ background: "white", padding: "40px" }}>
							<div className="d-flex">
								<img
									src="/1.webp"
									style={{ borderRadius: "50%" }}
									width={"80px"}
									height={"80px"}
									alt=""
                  />
								<div className="mt-2">
									<p style={{ fontWeight: "700" }}>All things computers and tech.</p>
									<p> Nizar Damiriyye</p>
								</div>
							</div>
							<div className="mt-4">
								<p>
									Hi! I'm Nizar Damiriyye. I'm a Computer Engineer & developer with a
									serious love for teaching I am a founder of Cearive Team Programming
									(C.T.P) and a Programmer & Instructor. I am working online for the last
									5 years and have created several successful websites running on the
									internet. I try to create a project-based course that helps you to
									learn professionally and make you fell as a complete developer. Cearive
									Team Programming exists to help you succeed in life. I am working
									online for the last 5 years and have created several successful
									websites running on the internet. I try to create a project-based
									course that helps you to learn professionally and make you fell as a
									complete developer. Cearive Team Programming exists to help you succeed
									in life. I am working online for the last 5 years and have created
									several successful websites running on the internet. I try to create a
									project-based course that helps you to learn professionally and make
									you fell as a complete developer. Cearive Team Programming exists to
									help you succeed in life. Each course has been hand-tailored to teach a
									specific skill. I hope you agree! Whether you’re trying to
								</p>
								<div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-1">
                  <img src="/HeartOutline.svg" alt="" />
                    <a>55</a>
                  </div>
									<p style={{color:'#00000099' , fontSize:'15px'}}>Posted: 4 hours ago</p>
								</div>
							</div>
						</div>
					</div>
          <div className="d-flex align-items-center justify-content-between" style={{background:'white', padding:'7px', marginTop:'20px'}}>
            <div>
            <Form.Control size="lg"  type="text" placeholder="Rebly..." style={{border:'none' , width:'150vh'}} />
          <p className="d-flex gap-4 ms-3 mt-1">
          <img src="/Vector.svg" width={'16px'} height={'16px'} alt="" />
          <img src="/Vector-1.svg"  width={'16px'} height={'16px'} alt="" />
          <img src="/Vector-2.svg" width={'16px'} height={'16px'} alt="" />
          <img src="/Vector-3.svg" width={'16px'} height={'16px'} alt="" />
          <img src="/Vector-4.svg" width={'16px'} height={'16px'} alt="" />
          </p>
            </div>
            <button style={{border:'none' , background:'none'}}>
              <img src="/send1.svg"  width={'23px'} height={'23px'}  alt="" />
            </button>
         
          </div>

          <div className="my-2" style={{ background: "white", padding: "20px" }}>
							<div className="d-flex">
								<img
									src="/1.webp"
									style={{ borderRadius: "50%" }}
									width={"80px"}
									height={"80px"}
									alt=""
                  />
												<div >
								<p>
									Hi! I'm Nizar Damiriyye. I'm a Computer Engineer & developer with a
									serious love for teaching I am a founder of Cearive Team Programming
									(C.T.P) and a Programmer & Instructor. I am working online for the last
									5 years and have created several successful websites running on the
									internet. I try to create a project-based course that helps you to
									learn professionally and make you fell as a complete developer. Cearive
									Team Programming exists to help you succeed in life. I am working
				
								</p>
								<div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-1">
                  <img src="/HeartOutline.svg" alt="" />
                    <a>55</a>
                  </div>
									<p style={{color:'#00000099' , fontSize:'15px'}}>Posted: 4 hours ago</p>
								</div>
							</div>
							</div>
		
						</div>
				</Container>
			</div>

			<Footer />
                  
                        </div>
		</Fragment>
	);
}

export default ForumPost;
