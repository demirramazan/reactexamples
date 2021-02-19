import React from 'react'
import User from './User'
import UserConsumer from './../Context'

function UserList(props) {
    //  const { users, deleteUser } = props;
    return (
        <UserConsumer>
            {
                value => {
                    const { users } = value;
                    return (
                        <div>
                            {
                                users.map((user) => {
                                    return (
                                        <User
                                            key={user.id}
                                            id={user.id}
                                            name={user.name}
                                            department={user.department}
                                            salary={user.salary}
                                        //deleteUser={deleteUser}
                                        />
                                    )
                                })
                            }
                        </div>

                    )
                }
            }
        </UserConsumer>
    );
}
export default UserList;
