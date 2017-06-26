import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import Posts from './Posts';
import './index.css';

class Index extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <Posts />
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));

