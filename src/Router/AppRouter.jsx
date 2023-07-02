import React, { Component, Fragment } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import HomePage from'../pages/HomePage'

import AboutPage from'../pages/AboutPage'
import ContactPage from'../pages/ContactPage'
import CoursesPage from '../pages/CoursesPage';
import ProjectPage from '../pages/ProjectPage';
import ServicePage from '../pages/ServicePage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Addservice from '../components/Services/Addservice';
import ServiceDetails from '../components/Services/ServiceDetails';
import AddProject from '../components/AllProject/AddProject';
import Profile from '../pages/Profile';
import ForumPage from '../pages/ForumPage';
import AddTopic from '../components/ForumTab/AddTopic';
import ForumPost from '../components/ForumTab/ForumPost';
export class AppRouter extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/AllCourses" component={CoursesPage} />
                    <Route exact path="/AllProject" component={ProjectPage} />
                    <Route exact path="/AllServices" component={ServicePage} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/posts" component={ForumPost} />
                    <Route exact path="/Register" component={Register} />
                    <Route exact path="/AddService" component={Addservice} />
                    <Route exact path="/AddProject" component={AddProject} />
                    <Route exact path="/AddTopic" component={AddTopic} />
                    <Route exact path="/ProjectDetailsPage/:IDP" component={ProjectDetailsPage} />
                    <Route exact path="/ServiceDetails" component={ServiceDetails} />
                    <Route exact path="/Profile" component={Profile} />
                    <Route exact path="/CourseDetailsPage/:IDC" component={CourseDetailsPage} />
                    <Route exact path="/Forum" component={ForumPage} />

                </Switch>


            </Fragment>
        )
    }
}

export default AppRouter
