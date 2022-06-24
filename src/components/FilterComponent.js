import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter} from "@fortawesome/free-solid-svg-icons";

export default function FilterComponent({setFilterText}) {
    const [parentFilterBy, setParentFilterBy] = useState("Job Opening");
    const [childFilterBy, setChildFilterBy] = useState("Job Opening");

    const filtersLst = {
        "Job Opening": [
            "Active",
            "InActive"
        ],
        "Job Type": [
            "Food Delivery",
            "Grocery Delivery"
        ],
        "State": [
            "Bengalru",
            "Chennai"
        ],
    }

    const select1Style = {
        dropdownIndicator: (provided) => ({
            ...provided,
            "svg": {
                fill: "red"
            }
        }),
        borderRadius: "5px 0px 0px 5px",
        // backgroundColor: "#4AC1BD",
        // color: "white",
        boxShadow: "none",
    }

    const select2Style = {
        dropdownIndicator: (provided) => ({
            ...provided,
            "svg": {
                fill: "red"
            }
        }),
        borderRadius: "0px",
        // backgroundColor: "#4AC1BD",
        // color: "white",
        boxShadow: "none",
    }

    const btn1Style = {
        borderRadius: "0px 5px 5px 0",
        backgroundColor: "#4AC1BD",
        color: "white",
        boxShadow: "none",
        border: "1px solid #4AC1BD",
    }

    return (
        <Row className="justify-content-end">
            <Col className="col-xl-4 px-0">
                <Form.Select style={select1Style} value={parentFilterBy}
                             onChange={(e) => setParentFilterBy(e.target.value)}>
                    <option value="Job Opening">Job Opening</option>
                    <option value="Job Type">Job Type</option>
                    <option value="State">State</option>
                    <option value="City">City</option>
                    <option value="Application Status">Application Status</option>
                </Form.Select>
            </Col>
            <Col className="col-xl-4 px-0">
                <Form.Select style={select2Style} value={childFilterBy}
                             onChange={(e) => setChildFilterBy(e.target.value)}>
                    {filtersLst[parentFilterBy].map((value) => <option key={value}>{value}</option>)}
                </Form.Select>
            </Col>
            <Col className=" col-2 px-0">
                <Button className="w-100" style={btn1Style}>
                    Filter <FontAwesomeIcon icon={faFilter}/>
                </Button>
            </Col>
        </Row>
    )
}