import {Col, Container, Form, Row} from "react-bootstrap";
import {useState} from "react";

export default function MyContainers() {
    const [filterBy, setFilterBy] = useState("Mobile No");

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className="bg-primary col-xl-6 col-md-6 col-lg-6 col-sm-4 col-12">Hello Col 1</Col>
                    <Col>Hello Col 2</Col>
                </Row>
                <Row className="bg-warning">
                    <Col>Hello Col 3</Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col className="bg-success col-xl-6 col-md-6 col-lg-6 col-sm-4 col-12">Hello Col 1</Col>
                    <Col>Hello Col 2</Col>
                </Row>
                <Row className="bg-danger">
                    <Col>Hello Col 3</Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col className="bg-success">Hello Col 1</Col>
                    <Col className="bg-warning">Hello Col 2</Col>
                </Row>
            </Container>
            <Container fluid>
                <Row className="justify-content-start">
                    <Col className="bg-warning col-3">Hello Col 1</Col>
                    <Col className="bg-success col-3">Hello Col 2</Col>
                </Row>
            </Container>
            <Container fluid className="my-3">
                <Row className="justify-content-start ps-4">
                    <Col className="bg-warning col-4 px-0">
                        <Form>
                            <Form.Control className="" placeholder={`Filter By ${filterBy}`} type="text"/>
                        </Form>
                    </Col>
                    <Col className="bg-success col-3 px-0">
                        <Form.Select value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
                            <option value="Mobile No">Mobile No.</option>
                            <option value="Application Id">Application Id</option>
                            <option value="Name">Name</option>
                        </Form.Select>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}