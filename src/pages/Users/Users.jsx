import React, { Component } from "react"
import { getAllUsers } from "../../services/userService"
import UserCard from '../../components/UserCard/UserCard'


class Users extends Component {
  state = {
    users: [],
  }

  async componentDidMount() {
    const users = await getAllUsers()
    this.setState({ users })
  }

  render() {
    return (
      <>
        <h1>Hello. This is a list of all the users.</h1>
        {this.state.users.map((user) => (
        <p key={user._id}>{user.name}</p>
          
        ))}
      </>
    )
  }
}

export default Users