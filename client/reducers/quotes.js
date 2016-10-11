function quotes( state = [], action ){

  switch(action.type){

    case 'RECEIVE_QUOTES' :
      var reshapedQuotes = action.quotes.map( function(quote) {
        var quoteObj = {};
        quoteObj['id'] = quote.id;
        quoteObj['title'] = quote.title.rendered;
        quoteObj['content'] = quote.content.rendered;
        return quoteObj;
      });
      return reshapedQuotes;

    default:
      return state;
  }
}

export default quotes;
