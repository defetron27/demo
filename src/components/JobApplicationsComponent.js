import SearchComponent from "./SearchComponent";
import DataTableComponent from "./DataTableComponent";
import {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import FilterComponent from "./FilterComponent";

export function JobApplicationsComponent() {
    const [searchText, setSearchText] = useState('');

    return (
        <div className="p-4">
            <Container className="mb-4 px-2" fluid>
                <Row>
                    <Col className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                        <SearchComponent
                            setSearchText={setSearchText}/>
                    </Col>
                    <Col
                        className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mt-xl-0 mt-lg-2 mt-md-2 mt-sm-2 mt-2">
                        <FilterComponent
                            setFilterText={setSearchText}/>
                    </Col>
                </Row>
            </Container>
            <div>
                <DataTableComponent searchText={searchText}/>
            </div>
        </div>
    )
}