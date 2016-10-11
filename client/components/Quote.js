import React from 'react';
import { Link } from 'react-router';

const Quote = React.createClass({
  render() {
    const quoteId = parseInt(this.props.params.quoteId);

    const i = this.props.quotes.findIndex((quote) => quote.id === quoteId );
    const quote = this.props.quotes[i];

    return (
        <div className="quote-item" key={quote.id}>
          <h3>{quote.title}</h3>
          <div className="quote-content" dangerouslySetInnerHTML={{__html: quote.content}} />
          <Link className="btn btn-default navbar-btn" to={`/quotes`}>Back</Link>
        </div>
    )
  }
});

export default Quote;
