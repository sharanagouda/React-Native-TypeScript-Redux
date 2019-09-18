import {REQUEST_POSTS,RECEIVE_POSTS} from "../actionTypes";

function requestPosts() {
    return {
      type: REQUEST_POSTS,
    }
  }
  
  function receivePosts(json) {
    return {
      type: RECEIVE_POSTS,
      posts: json,
      receivedAt: Date.now()
    }
  }
  
  export function fetchPosts() {
    return dispatch => {
      return fetch(`http://jsonplaceholder.typicode.com/todos`)
        .then(response => response.json())
        .then(json => {
            dispatch(receivePosts(json))
        })
    }
  }

  function getData(json) {
     
    return {
      type: RECEIVE_POSTS,
      posts: json,
      receivedAt: Date.now()
    }
  }

export function getUserAsync() {  
    return async dispatch => {
      function onSuccess(success) {
        
          let data = success.json();
          console.log("hu",data);
        dispatch({ type: RECEIVE_POSTS, payload: success });
        return success;
      }
      function onError(error) {
        dispatch({ type: "ERROR_GENERATED", error });
        return error;
      }
      try {
        const success = await fetch(`https://api.openbrewerydb.org/breweries`);
        
        return onSuccess(success);
      } catch (error) {
        return onError(error);
      }
    }
  }