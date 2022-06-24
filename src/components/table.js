import DataTable from 'react-data-table-component-with-filter';
import {useEffect, useMemo, useState} from "react";
import {Button, InputGroup, Modal} from "react-bootstrap";
import { Form } from "react-bootstrap";
import {format} from "date-fns";
/*

const columns = [
    {
        name: 'Title',
        selector: row => row.title,
        sortable: true,
    },
    {
        name: 'Year',
        selector: row => row.year,
        sortable: true,
    },
];
const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]
*/

/*export default function MyComponent() {
    return (
        <DataTable
            columns={columns}
            data={data}
            selectableRows
            pagination
        />
    );
}*/

export default function MyComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        let myHeaders = new Headers();
        myHeaders.append("Authorization", "llBearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5ODc2NTQzMjIwIiwicm9sZXMiOlsiQURNSU4iXSwiaXNzIjoiaHR0cDovLzEyNy4wLjAuMTo4MDg4L2FwaS92MS92ZXJpZnkvb3RwIiwiZXhwIjoxNjUzNjY1NzE1fQ.NVR13b1j0pzkBBbFcDh-NotgtTIv7cTPPPt1pPxP8oM");

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://testdashboard.lightninglogistics.in/hrms/api/v1/getJobOpeningsByFilter", requestOptions)
            .then(response => response.text())
            .then(result => {
                let myObject = JSON.parse(result);
                // console.log(myObject["data"]);
                console.log(myObject["data"]["jobOpenings"]["content"]);
                setItems(myObject["data"]["jobOpenings"]["content"]);
                setIsLoaded(true);
            })
            .catch(error => console.log('error', error));
    }, [])

    const columns = [
        {
            name: 'Title',
            selector: row => row.llbTitle,
            sortable: true,
        },
        {
            name: 'SalaryMax',
            selector: row => row.llbSalaryMax,
            sortable: true,
        },
        {
            name: 'SalaryMin',
            selector: row => row.llbSalaryMin,
            sortable: true,
        },
        {
            name: 'Created At',
            selector: row => row.created,
            format: row => format(new Date(row.created), "MMMM do, yyyy H:mma"),
            sortable: true,
        },
        /*{
            name: 'Modified At',
            selector: row => row.modified,
            format: row => format(new Date(row.modified), "MMMM do, yyyy H:mma"),
            sortable: true,
        },*/
        /*{
            cell: () => <Button variant="warning" style={{color: "white"}} onClick={openModal}>Action</Button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },*/
        {
            cell: (row) =>
                <Form.Select aria-label="Default select example" className="bg-warning text-white" menu="true" onChange={(e) => {
                    // this.selected
                    setIsOpen(true);
                    console.log(e.target.value);
                }}>
                    {/*<option>Job Status</option>*/}
                    <option value="1">Approve</option>
                    <option value="2">Reject</option>
                    <option value="3">Wait List</option>
                </Form.Select>
        }
    ];

    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const filteredItems = items.filter(
        item => item.llbTitle && item.llbTitle.toLowerCase().includes(filterText.toLowerCase()),
    );

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear}
                             filterText={filterText}/>
        );
    }, [filterText, resetPaginationToggle]);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <DataTable
                    title="Job Applications"
                    columns={columns}
                    data={filteredItems}
                    pagination
                    paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                    subHeader
                    subHeaderComponent={subHeaderComponentMemo}
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
            </div>
        );
    }
}

const FilterComponent = ({filterText, onFilter, onClear}) => (
    /*<Row>
        <Col xs={7}>
            <input
                type="text"
                value={filterText}
                onChange={onFilter}
            />
        </Col>
        <Col>
            <Button variant="primary" onClick={onClear}>X</Button>
        </Col>
    </Row>*/
    <div>
        <InputGroup>
            <Form.Control
                type="text"
                placeholder="Filter By Title"
                onChange={onFilter}
            />
            <div className="search-icon">
                <Button variant="primary" onClick={onClear}>X</Button>
                {/*<FontAwesomeIcon icon={faClose}/>*/}
            </div>
        </InputGroup>
    </div>
);

{
    /*<div>
        {/!*<Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Job Status
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Approve</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Reject</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Wait List</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>*!/}
        <FormGroup>

        </FormGroup>
    </div>

    <div style={{width: '700px'}}>
                    <FormSelect aria-label="Default select example" className="bg-warning text-white" menu="ture" onChange={() => {
                        // this.selected
                        setIsOpen(true);
                    }}>
                        <option>Job Status</option>
                        <option value="1">Approve</option>
                        <option value="2">Reject</option>
                        <option value="3">Wait List</option>
                    </FormSelect>
</div>

<Form.Control
                    as="select"
                    onChange={(e) => {
                        console.log("e.target.value", e.target.value);
                    }}>
                    <option value="Approve">Approve</option>
                    <option value="Reject">Reject</option>
                    <option value="WaitList">Wait List</option>
                </Form.Control>

    */
}

