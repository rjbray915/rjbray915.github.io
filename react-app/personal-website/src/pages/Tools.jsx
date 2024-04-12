import Helmet from "react-helmet"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Tools() {
    return (
        <>
            <Helmet>
                <title>Robert Bray | Tools</title>
                <meta name="description" content="Tools I'm currently working on."/>
            </Helmet>
            <h2>Tools</h2>
            <Container>
                <Row>
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                </Row>
            </Container>
        </>
    );
}

export default Tools;