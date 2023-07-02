import React, { Component } from 'react';
import { Fragment } from 'react';
import TopNavigation from '../TopNavigtion/TopNavigation';
import Footer from '../Footer/Footer';
import './Services.css';
import { Container, Form } from 'react-bootstrap';
import TopPage from "../../pages/TopPage";
import RestApp from "../../AppUrl/RestApp";
import AppUrl from "../../AppUrl/AppUrl";

class Addservice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services_name: '',
            services_image: '',
            services_owner_name: '',
            services_owner_image: '',
            services_description:'',
            price:'',
        };
    }
    async handleSubmit(e) {
        //      const {name, email, message}= this.state
        // const  Contact={'Contact':{name, email, message}}
        RestApp.PostRequest(AppUrl.ServicesC,JSON.stringify(this.state)).then(result=>{
        }).catch(error=>{
            alert("er");
        });
        alert("تم الإرسال بنجاح");
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        });

    }


    render() {
        return (
            <Fragment>
                <TopPage pagetitle="Add Services"/>
                <TopNavigation/>
                <div className='bg-h'>

                    <Container>
                        <div className='bg-white'>
                            <Form>
                            <Form.Control name="services_name" onChange={this.handleChange.bind(this)} value={this.state.services_name} style={{background:'#F2F2F2'}} size="lg" type="text" placeholder="services_name" />
                            <Form.Control name="services_owner_name" onChange={this.handleChange.bind(this)} value={this.state.services_owner_name} style={{background:'#F2F2F2'}} size="lg" type="text" placeholder="services_owner_name" />
                            <Form.Control name="services_description" onChange={this.handleChange.bind(this)} value={this.state.services_description} style={{background:'#F2F2F2'}} size="lg" type="text" placeholder="services_description" />
                            <Form.Control name="price" onChange={this.handleChange.bind(this)} value={this.state.price} style={{background:'#F2F2F2'}} size="lg" type="text" placeholder="price" />

                            <Form.Control type="file" onChange={this.handleChange.bind(this)} name="services_image" value={this.state.services_image} style={{background:'#F2F2F2'}} size="md"  placeholder="services_image" />
                            <Form.Control type="file" onChange={this.handleChange.bind(this)} name="services_owner_image" value={this.state.services_owner_image} style={{background:'#F2F2F2'}} size="md"  placeholder="services_owner_image" />

                            <Form.Control type="submit" size="lg" value={'post services'}  onClick={this.handleSubmit.bind(this)} style={{background:'#285be7' , color:'white'}}  />
                </Form>
                        </div>
                    </Container>

                </div>

                <Footer/>
            </Fragment>
        );
    }
}

export default Addservice;
