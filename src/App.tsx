import './App.css';
import Button from './geo-components/button/button';
import Heading from './geo-components/heading/heading';
import TopNavigationBar from './geo-components/top-navigation-bar/top-navigation-bar';

function App() {
    return (
        <>
            <TopNavigationBar title="Application" />
            <div className="mt-18">
                <Heading label="Data List" />
                <Button label="Save" displayType="primary" /> <Button label="Cancel" displayType="outline" />
            </div>
        </>
    );
}

export default App;
