import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Page2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
    }
    componentDidMount() {
        const host = (process.env.NODE_ENV === 'production') ? 
            'http://localhost:8080' : 'http://localhost:3000';
        axios.get(host + "/api/getUsername")
        .then((res) => {
            this.setState({ username: res.data.username });
        })
        .catch((err) => {
            this.setState({ username: 'friend!'});
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <h2>Hi, { this.state.username }</h2>
                <h1>I am also a react app</h1>
                <Link to="/app">To the previous page.</Link>
            </div>
        );
    }
};

export default Page2;