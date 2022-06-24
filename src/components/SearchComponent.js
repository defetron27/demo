import {Col, Container, Form, Row} from "react-bootstrap";
import {useState} from "react";

export default function SearchComponent({setSearchText}) {
    const [searchBy, setSearchBy] = useState("Mobile No");

    const selectStyle = {
        dropdownIndicator: (provided) => ({
            ...provided,
            "svg": {
                fill: "red"
            }
        }),
        borderRadius: "0px 5px 5px 0px",
        // backgroundColor: "#4AC1BD",
        // color: "white",
        boxShadow: "none",
    }

    return (
        <Row className="">
            <Col className="col-xl-4 px-0">
                <Form>
                    <Form.Control style={{borderRadius: "5px 0px 0px 5px", boxShadow: "none",}} className=""
                                  placeholder={`Search By ${searchBy}`} type="text"
                                  onChange={(e) => setSearchText(e.target.value)}/>
                </Form>
            </Col>
            <Col className="col-xl-4 px-0">
                <Form.Select style={selectStyle} value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
                    <option value="Mobile No">Mobile No.</option>
                    <option value="Application Id">Application Id</option>
                    <option value="Name">Name</option>
                </Form.Select>
            </Col>
        </Row>
    )
}