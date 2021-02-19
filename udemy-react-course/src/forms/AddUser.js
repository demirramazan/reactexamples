import React, { Component } from 'react'
import posed from 'react-pose'
import UserConsumer from '../Context'
import axios from 'axios'


const Animation = posed.div({
    visible: {
        opacity: 1,
        applyAtStart: {
            display: "block"
        }
    },
    hidden: {
        opacity: 0,
        applyAtEnd: {
            display: "none"
        }
    }
})

export default class AddUser extends Component {
    state = {
        visible: true,
        name: "",
        department: "",
        salary: "",
        error: false
    }
    changeVisibility = () => {
        this.setState({
            visible: !this.state.visible
        })
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validateInput = () => {
        const { name, department, salary } = this.state;
        if (name === "" || department === "" || salary === "") {
            return false;
        }
        return true;
    }

    addUser = async (dispatch, e) => {
        e.preventDefault();
        const { name, department, salary } = this.state;
        const user = {
            name: name,
            department: department,
            salary: salary
        }
        if (!this.validateInput()) {
            this.setState({ error: true })
            return;
        }
        const result = await axios.post("http://localhost:3001/users", user);
        dispatch({ type: "ADD_USER", payload: result.data });

        this.props.history.push("/");
    }
    render() {
        const { visible, name, department, salary, error } = this.state;
        return (
            <UserConsumer>
                {
                    value => {
                        const { dispatch } = value;
                        return (
                            <div className="col-md-8 mb-4">
                                <button onClick={this.changeVisibility} className="btn btn-dark btn-block mb-2">{visible ? "Hide Form" : "Show Form"}</button>
                                <Animation pose={visible ? "visible" : "hidden"}>
                                    <div className="card-header">
                                        <h1>Add User</h1>
                                    </div>
                                    <div className="card-body">
                                        {
                                            error ?
                                                <div className="alert alert-danger">
                                                    Lutfen Bilgilerininiz Kontrol Ediniz
                                                </div>
                                                : null
                                        }
                                        <form onSubmit={this.addUser.bind(this, dispatch)}>
                                            <div className="form-group">
                                                <label htmlFor="name">Name: </label>
                                                <input type="text" name="name" id="id" placeholder="Enter Name" className="form-control" value={name} onChange={this.changeInput}></input>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="department">Department: </label>
                                                <input type="text" name="department" id="department" placeholder="Enter Department" className="form-control" value={department} onChange={this.changeInput}></input>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="salary">Salary: </label>
                                                <input type="text" name="salary" id="salary" placeholder="Enter Salary" className="form-control" value={salary} onChange={this.changeInput}></input>
                                            </div>
                                            <button className="btn btn-danger btn-block" type="submit">Add User</button>
                                        </form>
                                    </div>
                                </Animation>
                            </div>
                        )
                    }
                }
            </UserConsumer>)

    }
}
