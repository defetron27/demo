import {useEffect, useState} from "react";
import {Pagination, Table} from "react-bootstrap";

export default function MyDataTable() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [pagination, setPagination] = useState(<div></div>);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        let myHeaders = new Headers();
        myHeaders.append("Authorization", "llBearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3MDEwNDgxNTU3Iiwicm9sZXMiOlsiQURNSU4iXSwiaXNzIjoiaHR0cDovLzEyNy4wLjAuMTo4MDg4L2FwaS92MS92ZXJpZnkvb3RwIiwiZXhwIjoxNjUzODQ0NTk4fQ.Z6ezAqO-mon953E5o5GWSk8hUdmtCv6CHcXxMSsy1es");

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
                let size = myObject["data"].length;
                let pagItems = [];
                if (size > 0) {
                    if (size <= 10) {
                        pagItems.push(<Pagination.First key={"first"} disabled/>)
                        pagItems.push(<Pagination.Prev key={"prev"} disabled/>)
                        pagItems.push(<Pagination.Item key={"1"} onClick={onPaginationClick}>{1}</Pagination.Item>)
                        pagItems.push(<Pagination.Next key={"next"} disabled/>)
                        pagItems.push(<Pagination.Last key={"last"} disabled/>)
                    } else if (size <= 20) {
                        pagItems.push(<Pagination.First key={"first"} disabled/>)
                        pagItems.push(<Pagination.Prev key={"prev"} disabled/>)
                        pagItems.push(<Pagination.Item key={"1"} onClick={onPaginationClick}>{1}</Pagination.Item>)
                        pagItems.push(<Pagination.Item key={"2"} onClick={onPaginationClick}>{2}</Pagination.Item>)
                        pagItems.push(<Pagination.Next key={"next"} disabled/>)
                        pagItems.push(<Pagination.Last key={"last"} disabled/>)
                    } else if (size <= 40) {
                        pagItems.push(<Pagination.First key={"first"} disabled/>)
                        pagItems.push(<Pagination.Prev key={"prev"} disabled/>)
                        pagItems.push(<Pagination.Item key={"1"} onClick={onPaginationClick}>{1}</Pagination.Item>)
                        pagItems.push(<Pagination.Item key={"2"} onClick={onPaginationClick}>{2}</Pagination.Item>)
                        pagItems.push(<Pagination.Ellipsis key={"ellipsis"} disabled/>)
                        pagItems.push(<Pagination.Next key={"next"} disabled/>)
                        pagItems.push(<Pagination.Last key={"last"} disabled/>)
                    }
                }
                setPagination((
                    <div>
                        <Pagination>{pagItems}</Pagination>
                    </div>
                ));
                setIsLoaded(true);
            })
            .catch(error => console.log('error', error));
    }, [])

    function onPaginationClick(e) {
        console.log(e.target.text);
    }

    return (
        <div>
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
                </tbody>
            </Table>
            {/*<Pagination>
                <Pagination.First/>
                <Pagination.Prev/>
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Ellipsis/>
                <Pagination.Next/>
                <Pagination.Last/>
            </Pagination>*/}
            {pagination}
        </div>
    )
}