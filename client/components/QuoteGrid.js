import React from 'react';
import { Link } from 'react-router';

const QuoteGrid = React.createClass({
  componentDidMount() {
    this.props.fetchQuotes();
  },
  render() {
    return (

      <div>
        <div className="container-fluid">
          {this.props.quotes.map((quote, i) =>
            <div className="row quote-list" key={quote.id}>
                <div className="col-sm-4 col-sm-offset-0 col-md-4 col-md-offset-4 quote-item-title">
                  {quote.title}
                </div>
                <div className="col-sm-1 col-sm-offset-1 col-md-offset-0">
                  <Link className="btn btn-default navbar-btn" to={`/quotes/show/${quote.id}`}>View</Link>
                </div>
            </div>
          )
          }
        </div>
      </div>
    )
  }
});

export default QuoteGrid;
