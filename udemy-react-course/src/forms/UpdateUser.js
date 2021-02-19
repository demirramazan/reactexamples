import React, { Component } from 'react'
import UserConsumer from '../Context'
import axios from 'axios'

export default class UpdateUser extends Component {
    state = {
        visible: true,
        name: "",
        department: "",
        salary: "",
        error: false
    }

    validateInput = () => {
        const { name, department, salary } = this.state;
        if (name === "" || department === "" || salary === "") {
            return false;
        }
        return true;
    }
    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    async componentDidMount() {
        const { id } = this.props.match.params;
        console.log(id);
        const result = await axios.get(`http://localhost:3001/users/${id}`);
        const { name, department, salary } = result.data;
        this.setState({ name, department, salary });
    }


    updateUser = async (dispatch, e) => {
        e.preventDefault();
        const { name, department, salary } = this.state;
        const { id } = this.props.match.params;
        console.log(id);
        const user = {
            name: name,
            department: department,
            salary: salary
        }

        if (!this.validateInput()) {
            this.setState({ error: true })
            return;
        }
        const result = await axios.put(`http://localhost:3001/users/${id}`, user);

        dispatch({ type: "UPDATE_USER", payload: result.data });

        this.props.history.push("/");
    }
    render() {
        const { name, department, salary, error } = this.state;
        return (
            <UserConsumer>
                {
                    value => {
                        const { dispatch } = value;
                        return (
                            <div className="col-md-8 mb-4">
                                <div className="card-header">
                                    <h1>Update User</h1>
                                </div>
                                <div className="card-body">
                                    {
                                        error ?
                                            <div className="alert alert-danger">
                                                Lutfen Bilgilerininiz Kontrol Ediniz
                                            </div>
                                            : null
                                    }
                                    <form onSubmit={this.updateUser.bind(this, dispatch)}>
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
                                        <button className="btn btn-danger btn-block" type="submit">Update User</button>
                                    </form>
                                </div>
                            </div>
                        )
                    }
                }
            </UserConsumer>)

    }
}
