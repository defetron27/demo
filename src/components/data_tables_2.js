import DataTable from 'react-data-table-component-with-filter';
import {useEffect, useMemo, useRef, useState} from "react";
import {
    Button, Card, Col, Container, InputGroup, Modal, Overlay, OverlayTrigger, Popover, Row, Tooltip
} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {format} from "date-fns";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faFilter} from "@fortawesome/free-solid-svg-icons";

export default function MyDataTable2() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        let myHeaders = new Headers();
        myHeaders.append("Authorization", "llBearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3MDEwNDgxNTU3Iiwicm9sZXMiOlsiQURNSU4iXSwiaXNzIjoiaHR0cDovLzEyNy4wLjAuMTo4MDg4L2FwaS92MS92ZXJpZnkvb3RwIiwiZXhwIjoxNjUzODQ0NTk4fQ.Z6ezAqO-mon953E5o5GWSk8hUdmtCv6CHcXxMSsy1es");

        let requestOptions = {
            method: 'GET', headers: myHeaders, redirect: 'follow'
        };

        fetch("https://testdashboard.lightninglogistics.in/hrms/api/v1/get-jobs-by-lead-id/1479", requestOptions)
            .then(response => response.text())
            .then(result => {
                let myObject = JSON.parse(result);
                console.log(myObject["data"]);
                setItems(myObject["data"]);
                setIsLoaded(true);
            })
            .catch(error => console.log('error', error));
    }, [])

    const columns = [{
        name: 'Title', selector: row => row.llbTitle, sortable: true,
    }, {
        name: 'SalaryMax', selector: row => row.llbSalaryMax, sortable: true,
    }, {
        name: 'SalaryMin', selector: row => row.llbSalaryMin, sortable: true,
    }, {
        name: 'Created At',
        selector: row => row.created,
        format: row => format(new Date(row.created), "MMMM do, yyyy H:mma"),
        sortable: true,
    }, {
        cell: (row) => <Form.Select aria-label="Default select example" className="bg-warning text-white" menu="true"
                                    onChange={(e) => {
                                        // this.selected
                                        setIsOpen(true);
                                        console.log(e.target.value);
                                    }}>
            {/*<option>Job Status</option>*/}
            <option value="1">Approve</option>
            <option value="2">Reject</option>
            <option value="3">Wait List</option>
        </Form.Select>
    }];

    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    /*const filteredItems = items.filter(
        item => item.llbTitle && item.llbTitle.toLowerCase().includes(filterText.toLowerCase()),
    );*/

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const [show, setShow] = useState(false);
    const target = useRef(null);

    const popover = (
        <Popover id="popover-basic">
        <Popover.Header as="h3">Filter By</Popover.Header>
        <Popover.Body>
            {/*And here's some <strong>amazing</strong> content. It's very engaging.
                right?*/}
            <Form>
                <div key={`inline-radio`} className="mb-1">
                    <Form.Check
                        label="Mobile No."
                        name="group1"
                        type="radio"
                        id={`inline-radio-1`}
                    />
                    <Form.Check
                        label="Name"
                        name="group1"
                        type="radio"
                        id={`inline-radio-2`}
                    />
                    <Form.Check
                        label="Application Id"
                        name="group1"
                        type="radio"
                        id={`inline-radio-3`}
                    />
                </div>
            </Form>
        </Popover.Body>
    </Popover>);


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <Container className="my-2">
                    <Row className="justify-content-end">
                        <Col className="col-3 p-0">
                            <InputGroup>
                                <Form.Control style={{borderRadius: "5px 0px 0px 5px"}}
                                              type="text"
                                              placeholder="Filter By Name"
                                              onChange={e => setFilterText(e.target.value)}
                                />
                            </InputGroup>
                        </Col>
                        <Col className="col-1 p-0">
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                <Button className=" w-100 m-0" style={{borderRadius: "0px 5px 5px 0px"}}
                                        variant="success">Filter By</Button>
                            </OverlayTrigger>
                        </Col>
                    </Row>
                </Container>
                <DataTable
                    columns={columns}
                    data={items}
                    pagination
                    paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                    subHeader
                    selectableRows
                    persistTableHead
                />
                <Modal show={isOpen} onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>);
    }
}