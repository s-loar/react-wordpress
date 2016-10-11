export function receiveQuotes(quotes){
  return {
    type: 'RECEIVE_QUOTES',
    quotes
  }
}

export function fetchQuotes() {
  return function(dispatch, getState) {
    var state = getState();
    var url = "http://104.131.25.188/wp-json/wp/v2/posts";
    // var url = "http://localhost/wp-json/wp/v2/posts";
    return fetch(url)
      .then( function(result) {
        if (result.status === 200) {
          return result.json();
        }
        throw "request failed";
      })
      .then( function(jsonResult) {
        dispatch(receiveQuotes(jsonResult));
      })
      .catch( function(error) {
        console.log('request failed', error);
      });
  }
}
