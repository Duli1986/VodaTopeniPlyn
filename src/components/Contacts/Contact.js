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
                                    <h3>Aleš Příhoda</h3>
                                    <div>prihoda@engineersprague.cz</div>
                                </Col>
                                <Col lg="4" className="section-centered">
                                    <h3>Tomáš Hlaváč</h3>
                                    <div>hlavac@engineersprague.cz</div>
                                </Col>
                                <Col lg="4" className="section-centered">
                                    <h3>Richard Jarošík</h3>
                                    <div>fandimkarlovce@gmail.com</div>
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
