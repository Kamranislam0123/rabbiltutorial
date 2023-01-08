import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Button, Card } from 'react-bootstrap'
import weblogo from '../../image/website.png'
import mobilelogo from '../../image/smartphone.png'
import designlogo from '../../image/web-design.png'

export default class services extends Component {
    render() {
        return (
<Fragment>

<Container className='text-center'>
    <h1 className='serviceMainTitle'>
        SERVICES
    </h1>
    <Row>
        <Col lg = {4} md = {6} sm = {12} >
        <div className="serviceCard text-center" >
<img src= {weblogo}/>
<h1> Web Development</h1>
<p> Lorem ipsum </p>
        </div>
        </Col>

        <Col lg = {4} md = {6} sm = {12} >
        <div className="serviceCard text-center" >
        <img src= {mobilelogo}/> 
        <h1> Android App Development</h1>
        <p> Lorem ipsum </p>
        </div>
        </Col>

        <Col lg = {4} md = {6} sm = {12}>
            <div className="serviceCard text-center" >
            <img src= {designlogo}/> 
            <h1> Desgin</h1>
            <p> Lorem ipsum </p>
            </div>
        
        </Col>

    </Row>
</Container>
</Fragment>
  )
    }
}