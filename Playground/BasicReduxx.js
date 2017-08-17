// There are two important thing in redux. 1 - An object that maintains the state. 2 - An Action to change that state
var reduxState = {
    searchText : 'Dog',
    showCompleted: false,
    todos: [{
        id: '123',
        text: 'Walk the Dog'
    }]
};


// Pure Functions

// Its always gonna return the same result, given the same input
// It doesn't even change any outside variable
function add(a, b){
    return a + b;
}

// In redux, pure funcions cannot have async request, which means no callbacks or Promises.
// Pure functions wlill also not change the value of the arguements

// This is just an action in redux, nothing more
var action = {
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'Something Else'
}