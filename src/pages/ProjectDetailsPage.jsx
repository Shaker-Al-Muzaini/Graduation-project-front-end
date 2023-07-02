import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigtion/TopNavigation'
import Footer from '../components/Footer/Footer'
import TopPage from './TopPage'
import ProjectDetails from '../components/ProjectDetails/ProjectDetails'
import RestApp from "../AppUrl/RestApp";
import AppUrl from "../AppUrl/AppUrl";

export class ProjectDetailsPage extends Component {


    constructor({match}) {
        super();
        this.state={
            MyProjectID:match.params.IDP,
            ProjectData:[],
        }
    }

    componentDidMount(){
        window.scroll(0,0);
        RestApp.GetRequest(AppUrl.won_project+this.state.MyProjectID).then(result => {
            this.setState({ProjectData:result['data']['project']})

        })

    }


     render() {
          return (
              <Fragment>
              <TopNavigation/>
              <TopPage pagetitle="Researches & Reports" />

              <ProjectDetails ProjectData={this.state.ProjectData}/>
                

              <Footer/>
              
              </Fragment>
          )
     }
}

export default ProjectDetailsPage
