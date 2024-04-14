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
                    <Col>Coming soon! Here will be the web tools that I'm working on.</Col>
                </Row>
            </Container>
        </>
    );
}

export default Tools;