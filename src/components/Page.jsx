import React from 'react';
import { Link } from 'react-router-dom';

class Page extends React.Component {
    render() {
        return <div>
            <h1>I am a react app</h1>
            <Link to="/app/2">To the other page.</Link>
            </div>;
    }
}

export default Page;