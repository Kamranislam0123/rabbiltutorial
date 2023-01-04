import React, { Component, Fragment } from 'react';
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'
import {Button, Col, Container, Row,} from "react-bootstrap";

export default class TopBanner extends Component {

  render() {
    return (
      <Fragment>
        <Container fluid={true} className="topFixBanner p-0 ">
            <div className="topBannerOverlay">
                <Container className={"topContent"}>
                    <Row>
                        <Col className='text-center'>
                            <h1 className="topTitle"> Software and Engineer</h1>
                            <h5 className='subTitle' > Mobile & Web Application </h5>
                            <Button variant="primary">More Info</Button>
                        </Col>
                    </Row>
                </Container>
            </div>

        </Container>
        </Fragment>
    )
  }
}
