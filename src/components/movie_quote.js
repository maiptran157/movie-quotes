import React, { Component } from 'react';
// import auth from '../hoc/auth';
import { connect } from 'react-redux';
import { getMovieQuote } from '../actions';

class MovieQuote extends Component {
    // props.log('From moview quotes');
    componentDidMount() {
        this.props.getMovieQuote();
    }
    render() {
        return (
            <div className="center">
                <h1>Movie Quote Here!</h1>
                <h4>{this.props.quote}</h4>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        quote: state.movie.quote
    }
}

export default connect(mapStateToProps, {
    getMovieQuote: getMovieQuote
})(MovieQuote);
// export default auth(MovieQuote);