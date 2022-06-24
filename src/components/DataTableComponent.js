import DataTable from "react-data-table-component-with-filter";
import {useEffect, useState} from "react";
import {format} from "date-fns";
import {Form} from "react-bootstrap";

export default function DataTableComponent({searchText}) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const filteredItems = items.filter(
        item => item.llbMobileNo && item.llbMobileNo.toLowerCase().includes(searchText.toLowerCase()),
    );

    useEffect(() => {
        let myHeaders = new Headers();
        myHeaders.append("Authorization", "llBearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3MDEwNDgxNTU3Iiwicm9sZXMiOlsiQURNSU4iXSwiaXNzIjoiaHR0cDovLzEyNy4wLjAuMTo4MDg4L2FwaS92MS92ZXJpZnkvb3RwIiwiZXhwIjoxNjU0MDE2MTU0fQ.c3JXR0Vs0oFmcMSCNSy_f7qzAjNpP_3JYkt1KWSXKkY");

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
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

    const columns = [
        {
            name: 'Application ID',
            selector: row => `#${row.id}`,
            sortable: true,
        },
        {
            name: 'Mobile No',
            selector: row => row.llbSalaryMax ?? "-",
            sortable: true,
        },
        {
            name: 'Name',
            selector: row => row.llbSalaryMin ?? "-",
            sortable: true,
        },
        {
            name: 'Lead Id',
            selector: row => row.llempLeadId ?? "-",
            sortable: true,
        },
        {
            name: 'Applied At',
            selector: row => row.appliedOn ?? "-",
            format: row => row.appliedOn != null ? format(new Date(row.appliedOn), "MMMM do, yyyy H:mma") : "-",
            sortable: true,
            grow: 1.5,
        },
        {
            name: 'Preferred City',
            selector: row => row.llbPreferredCity ?? "-",
            sortable: true,
        },
        {
            name: 'Job Opening',
            selector: row => row.llbSalaryMin ?? "-",
            sortable: true,
        },
        {
            name: 'Vehicle Preference',
            selector: row => row.llbSalaryMin ?? "-",
            sortable: true,
        },
        {
            name: 'Application Status',
            selector: row =>
                <Form.Select aria-label="Job Applied Status"
                             menu="true"
                             onChange={(e) => {
                                 console.log(e.target.value);
                             }}>
                    <option value="1">Approve</option>
                    <option value="2">Reject</option>
                    <option value="3">Wait List</option>
                </Form.Select>,
            sortable: true,
            grow: 1.2,
        },
    ];

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <DataTable
                columns={columns}
                data={items}
                pagination
                paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                persistTableHead
            />
        );
    }
}