import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            query: '',
        }

    }

    inputSubmit = (e) => {
        e.preventDefault();
        this.props.history.push(`/results/${this.state.query}`);
    }
    
    inputWatch = (ev) => {
        this.setState({ query: ev.target.value });
    }

    render(){
        return (
            <div>
                <h2>HOME PAGE</h2>
                <br/>
                <form onSubmit={ (e) => this.inputSubmit(e) }>
                    <input type='text' name='name' onChange={ (ev) => this.inputWatch(ev) } />
                    <input type='submit' value='Search movie!'/>
                </form>
            </div>
        )
    }
}


export default Home;
