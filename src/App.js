import React, {Component} from 'react';
import './App.css';
import Employee from './component/employee';
import axios from 'axios';
import Login from './component/login';
import {connect} from 'react-redux';
import {loginUser, setUser, setPassword, logout} from './actions';
// React
// function
// class

class App extends Component {
    // clickedAlert = function () {
    //     alert("Clicked Alert");
    // }
    //
    //state = {employees: [],user: '', password: '', loggedin: false, error: ''};
    //
    // componentWillMount() { // life cycle hook
    //
    //
    //     axios.get("http://localhost:3004/employees").then((employees) => {
    //         console.log("Employee list", employees.data);
    //         this.setState({employees: employees.data});
    //     });
    // }
    //
    // changeNameHandler(event, index) {
    //     const employees = [...this.state.employees];
    //     employees[index].name = event.target.value;
    //     this.setState({employees: employees});
    // }
    //
    // deleteHandler(index) {
    //     const employees = [...this.state.employees];
    //     employees.splice(index, 1);
    //     this.setState({employees: employees});
    // }
    //
    // changePositionHandler(event, index) {
    //     const employees = [...this.state.employees];
    //     employees[index].position_held = event.target.value;
    //     this.setState({employees: employees});
    // }


    render() {

        console.log("props", this.props);
        // const jsx = (<div>
        //     {this.state.employees.map((employee, index) => {
        //         return <Employee name={employee.name}
        //                          date_joined={employee.date_joined}
        //                          position_held={employee.position_held}
        //                          changeNameHandler={(event) => {
        //                              this.changeNameHandler(event, index)
        //                          }}
        //                          changePositionHandler={(event) => {
        //                              this.changePositionHandler(event, index)
        //                          }}
        //                          deleteHandler={() => {
        //                              this.deleteHandler(index)
        //                          }}/>
        //
        //     })}
        // </div>);

        const jsx = <div>Hello</div>;

        if (this.props.loggedIn) {
            return <div>
                <button onClick={() => {
                    this.props.logout();
                }}>logout
                </button>
                {jsx}</div>
        }
        return <div><Login username={this.props.user}
                           password={this.props.password}
                           error={this.props.error}
                           handleUsername={(event) => this.props.setUser(event.target.value)}
                           handlePassword={(event) => this.props.setPassword(event.target.value)}
                           submit={() => {
                               this.props.loginUser(this.props.user, this.props.password);
                           }
                           }
        /></div>;
    }
}

const mapStateToProps = (state) => {
    console.log("State", state);
    const {user, password, loggedIn, error} = state;
    return {user, password, loggedIn, error};
}

export default connect(mapStateToProps, {logout,loginUser, setUser, setPassword})(App);

