import './App.css';
import MyDataTable1 from "./components/data_tables_1";
import MyDataTable2 from "./components/data_tables_2";
import MyContainers from "./components/containers";
import SearchComponent from "./components/SearchComponent";
import DataTableComponent from "./components/DataTableComponent";
import {JobApplicationsComponent} from "./components/JobApplicationsComponent";
import {MusicUI} from "./components/Music_UI";


function App() {
    return (
        <div className="App">
            <MusicUI/>
            {/*<JobApplicationsComponent/>*/}
        </div>
    );
}

export default App;
