import React from 'react';
import Dashboard from "./containers/Dashboard";
import { ThemeProvider } from "styled-components";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: '' };
    }

    callAPI() {
        fetch('http://localhost:9000/matches')
        .then(res => res.text())
        .then(res => this.setState({
            apiResponse: res
        }));
    }

    componentWillMount() {
        this.callAPI();
    }

    render() {
        return (
            <ThemeProvider>
                <Dashboard />
            </ThemeProvider>
        );
    }
}

export default App;
