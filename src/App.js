import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Route path="/" exact component={ProductListing}></Route>
            </Router>
        </div>
    );
}

export default App;
