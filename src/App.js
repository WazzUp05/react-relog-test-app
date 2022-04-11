import './App.scss';
import ListComponent from './components/ListComponent/ListComponent';
import MapComponent from './components/MapComponent/MapComponent';
import apps from '../src/data/NeRelog_apps5000.json';
import clients from '../src/data/NeRelog_clients5000.json';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <div className="sidebar">
                    <ListComponent />
                </div>
                <div className="content">
                    <MapComponent apps={apps} clients={clients} />
                </div>
            </div>
        </div>
    );
}

export default App;
