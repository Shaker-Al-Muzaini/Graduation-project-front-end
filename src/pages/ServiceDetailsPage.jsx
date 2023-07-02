import React, { Component ,Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import TopNavigation from '../components/TopNavigtion/TopNavigation'
import TopPage from './TopPage'
import CourseDetails from '../components/Services/ServiceDetails'
import AppUrl from ".././AppUrl/AppUrl"
import RestApp from ".././AppUrl/RestApp"
import ServiceDetails from "../components/Services/ServiceDetails";

export class ServiceDetailsPage extends Component {

    constructor({match}) {
        super();
        this.state={
            MyServicesID:match.params.IDC,
            ServicesData:[],
        }
    }
    componentDidMount(){
        window.scroll(0,0);
        RestApp.GetRequest(AppUrl.won_Services+this.state.MyServicesID).then(result => {
            this.setState({ServicesData:result['data']['Services']})
        })
    }

    render() {
        return (
            <Fragment>
                <TopNavigation />
                <TopPage pagetitle="Service Details" />
                <ServiceDetails ServicessData={this.state.ServicesData}/>
                <Footer/>
            </Fragment>
        )
    }
}

export default ServiceDetailsPage
