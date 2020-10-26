import React, {Component} from 'react'
import {Container, Row, Col} from "reactstrap"

class Contacts extends Component {

    render() {
        return (
            <div className="section section-dark-bck">
                <Container className="tim-container">
                    <div>
                        <h1>
                            Kontakt
                        </h1><br/><br/>
                    </div>
                    <div>
                        <Container>
                            <Row>
                                <Col lg="4" className="section-centered">
                                    <h3>David Šafránek</h3>
                                    <div></div>
                                </Col>
                                <Col lg="4" className="section-centered">
                                    <h3>Luboš Dulovec</h3>
                                    <div></div>
                                </Col>
                                <Col lg="4" className="section-centered">
                                    <h3>Martin Haltuch</h3>
                                    <div></div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Contacts
