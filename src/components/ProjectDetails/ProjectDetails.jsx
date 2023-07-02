
import React, { Component, Fragment } from 'react'

import {Col, Container, Row, Button, Card} from 'react-bootstrap'

import g from '../../asset/image/projectDetails.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import ReactHtmlParser from "react-html-parser";

export class ProjectDetails extends Component {

    constructor(props) {
        super();
    }

    render() {

        let project_name='';
        let project_description ='';
        let project_image_2='';
        let project_image_1='';
        let project_features='';
        let report_file='';
        let authors_photo='';
        let author_report='';

        let  Array=this.props.ProjectData;
        project_name=Array['project_name'];
        project_description=Array['project_description'];
        project_image_1=Array['project_image_1'];
        project_image_2=Array['project_image_2'];
        project_features=Array['project_features'];
        report_file=Array['report_file'];
        authors_photo=Array['authors_photo'];
        author_report=Array['author_report'];

        return (
            <Fragment>
                <Row>

                    <Col lg={6} md={6} sm={12} style={{background:'#D6E7FF'}} className="mt-5">
                        <Container className='mx-5 px-5 py-3'>
                            <h1> {project_name} </h1>

                            <Button variant="info" href={report_file}> Live Preview </Button>

                        </Container>

                    </Col>


                    <Col lg={6} md={6} sm={12} className="mt-5 m-0">

                        <img src={project_image_1}  className=" m-0" width={'100%'} />

                    </Col>


                    <Col lg={3} md={6} sm={12} className="mt-5 ms-5">
                        <Container>

                            <img src={project_image_2} height={'300px'} className=" m-0" width={'100%'} />
                            <div className="d-flex avat align-items-center">
                                <Card.Img variant="top" className="border-5" src={authors_photo} />
                                <h4>{author_report} </h4>
                            </div>
                        </Container>

                    </Col>


                    <Col lg={6} md={6} sm={12}  className="mt-5">
                        <Container >
                            {ReactHtmlParser(project_description)}


                        </Container>

                    </Col>



                </Row>
                <div className='d-flex'>
                    <img src={project_image_1} height={'140px'}  className="mt-5 m-0" width={'25%'} />
                    <img src={project_image_2} height={'140px'}  className="mt-5 m-0" width={'25%'} />
                    <img src={project_image_1} height={'140px'}  className="mt-5 m-0" width={'25%'} />
                    <img src={project_image_2} height={'140px'}  className="mt-5 m-0" width={'25%'} />

                </div>
                <Container className='mt-5'>
                    {ReactHtmlParser(project_features)}

                </Container>




            </Fragment>
        )
    }
}

export default ProjectDetails
