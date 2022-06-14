import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/index';
import Section from './components/Section/index';
import Footer from './components/Footer/footer';
import './index.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Section />
                <Footer />
            </Router>
        </div>
    );
}

export default App;
