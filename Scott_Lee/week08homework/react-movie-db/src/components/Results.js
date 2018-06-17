import React, { Component } from 'react';
import jsonp from 'jsonp-es6';
import {Link} from 'react-router-dom';


class Results extends Component {
    constructor(props){
        super(props);

        this.state = {
            api_key: 'dd7b8a10120a376e04e7430d2fa912d8',            
            results: [],
        };

        this.searchResults = this.searchResults.bind(this);
        this.searchResults( this.props.match.params.query );
    }


    // 'https://api.themoviedb.org/3/search/movie?api_key=dd7b8a10120a376e04e7430d2fa912d8&query=Alien'

    searchResults( movie_query ){
        console.log( 'the movie query is: ', movie_query );

        const tmdbURL = `https://api.themoviedb.org/3/search/movie?api_key=${this.state.api_key}&query=${movie_query}`;

        console.log(tmdbURL);

        jsonp( tmdbURL, {callback: 'jsoncallback'} )
        .then(data => {
            // console.log( data.results );
            // console.log( data.results[0]["original_title"] );
            
            this.setState({ results: data.results })
        });
    }


    render() {
        return (
            <div>
                <h2> Search results for: {`${this.props.match.params.query}`} </h2>
                <Link to="/">Back to Home</Link>                
                <ul>
                    {
                        this.state.results.map( movie => <li>
                            {movie["original_title"]}
                            </li> )
                    }
                </ul>
                <p> Show page links below </p>
                <ul>
                    {
                    // this.state.results.map( movie => <Movie movieId={movie.id} history={this.props.history }/> )
                    }
                </ul>
            </div>
        )
    }
}

export default Results