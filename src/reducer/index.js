const intialState = {user: '', password: '', loggedIn: false, error: ''};
const reducer = (state = intialState, actions) => {
    if (actions.type == 'loginUser') {
        console.log("payload",actions.payload);
        if (actions.payload.user === "user" &&
            actions.payload.pass === "pass") {
            return {...state, loggedIn: true};
        }
        else {
            return {...state, error: "Not a valid User"};
        }
    }
    if (actions.type == "setUser") {
        return {...state, user: actions.payload}
    }
    if (actions.type == "setPassword") {
        return {...state, password: actions.payload}
    }
    if (actions.type == "logout") {
        return {...state, loggedIn: false}
    }


    return state;
};

export default reducer;