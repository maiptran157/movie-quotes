import React from 'react';
import auth from '../hoc/auth';

const MovieQuote = props => {
    // props.log('From moview quotes');
    return (
        <div className="center">
            <h1>Movie Quote Here!</h1>
            <h4>You had me at hello.</h4>
        </div>
    )
};

export default auth(MovieQuote);