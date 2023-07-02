import React from 'react'
import { Fragment } from 'react'
import TopNavigation from '../TopNavigtion/TopNavigation'
import Footer from '../Footer/Footer'
import { Container, Form } from 'react-bootstrap'
function AddTopic() {
    return (
      <Fragment>
      <TopNavigation/>
              <div className='bg-h'>
                  <Container>
                  <h1>Add Topic</h1>
                 
                  <h1>Add Topic</h1>
                  <h1>Add Topic</h1>
                  <div className='bg-white'>  
                  <Form.Control style={{background:'#F2F2F2'}} size="lg" type="text" placeholder="Large text" />
                  <Form.Control style={{background:'#F2F2F2'}} size="lg" type="text" placeholder="Large text" />
    
                  <Form.Control type="submit" size="lg" value={'post services'} style={{background:'#285be7' , color:'white'}}  />
  
                  </div>
                  </Container>
              </div>
  
         <Footer/>
      </Fragment>  )
  }
  

export default AddTopic