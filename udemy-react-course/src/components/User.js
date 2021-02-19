import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from './../Context'
import axios from 'axios'
import { Link } from 'react-router-dom'

class User extends Component {
    /*  static defaultProps = {
          name: PropTypes.string.isRequired,
          department: PropTypes.string.isRequired,
          salary: PropTypes.number.isRequired
      }*/
    state = {
        isVisible: false
    }
    //constructor(props) {
    //  super(props);
    //  this.state = {
    //       isVisible: false
    //    }
    //  }

    isVisibility = () => {
        return this.setState({ isVisible: !this.state.isVisible });
    }
    deleteUser = async (dispatch, e) => {
        //  this.props.deleteUser(this.props.id);
        const { id } = this.props;
        //  deleteUser(id);
        await axios.delete(`http://localhost:3001/users/${id}`);
        dispatch({ type: "DELETE_USER", payload: id });
    }
    render() {
        //destructing
        const { id, name, department, salary } = this.props;
        const isVisible = this.state.isVisible;

        return (
            <UserConsumer>
                {
                    value => {
                        const { dispatch } = value;
                        return (
                            <div className="col-md-8 mb-4">
                                <div className="card" style={isVisible ? { backgroundColor: "red", color: "white" } : null}>
                                    <div className="card-header d-flex justify-content-between" onClick={this.isVisibility}>
                                        <h4 className="d-inline">{name} </h4>
                                        <i className="fas fa-trash"
                                            onClick={this.deleteUser.bind(this, dispatch)}
                                            style={{ cursor: "pointer" }}></i>
                                    </div>

                                    {
                                        isVisible ?
                                            <div className="card-body"
                                            //style={{ visibility: isVisible ? "visible" : "hidden" }}
                                            >
                                                <p className="card-text">Departman:  {department}</p>
                                                <p className="card-text">Maaş:  {salary}</p>
                                                <Link to={`edit/${id}`} className="btn btn-dark btn-block">Update User</Link>
                                            </div>
                                            : null
                                    }

                                </div>
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )

    }
}
User.defaultProps = {
    name: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired
}

export default User;