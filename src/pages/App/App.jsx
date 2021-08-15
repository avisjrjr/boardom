import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import About from '../About/About'
import AddActivity from '../AddActivity/AddActivity'
//import Calendar from '../Calendar/Calendar'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import Group from '../Group/Group'
import Landing from '../Landing/Landing'
import Login from '../Login/Login'
import ProfileDetails from '../ProfileDetails/ProfileDetails'
import ProfileList from '../ProfileList/ProfileList'
import Signup from '../Signup/Signup'
import * as authService from '../../services/authService'
import Users from '../Users/Users'
import './App.css'


class App extends Component {
	state = {
		user: authService.getUser(),
		events: [
			{title: 'event 1', date: '2021-8-21'},
		]
	}

	renderEventContent = () => {
		return (
		  <>
			<b>event</b>
			<i>{this.state.title}</i>
		  </>
		)
	  }

	handleLogout = () => {
		authService.logout()
		this.setState({ user: null })
		this.props.history.push('/')
	}

	handleSignupOrLogin = () => {
		this.setState({ user: authService.getUser() })
	}

	render() {
		const { user } = this.state
		return (
			<>
				<NavBar user={user} handleLogout={this.handleLogout} />
				
				<Route exact path='/'>
          <Landing user={user} />
        </Route>
				
				<Route exact path='/signup'>
          <Signup history={this.props.history} handleSignupOrLogin={this.handleSignupOrLogin}/>
        </Route>
				
				<Route exact path='/login'>
          <Login handleSignupOrLogin={this.handleSignupOrLogin} history={this.props.history}/>
        </Route>
				
				<Route 
					exact path="/users"
					render={()=> 
						user ? <Users /> : <Redirect to='/login'/>
				}/>
				
				<Route exact path='/addActivity'>
          <AddActivity handleSignupOrLogin={this.handleSignupOrLogin} history={this.props.history}/>
        </Route>
				
		<Route exact path='/about'>
          <About handleSignupOrLogin={this.handleSignupOrLogin} history={this.props.history}/>
        </Route>

		<Route exact path='/calendar'>
          <FullCalendar 
		  	handleSignupOrLogin={this.handleSignupOrLogin} 
			history={this.props.history}
			plugins={[ dayGridPlugin ]}
			initialViews="dayGridMonth"
			
			//events={this.state.events}
			events={[
				{ title: 'event 1', date: '2019-04-01' },
				{ title: 'event 2', date: '2019-04-02' }
			  ]}
			  eventContent={this.renderEventContent}
		  />
        </Route>

		<Route exact path='/group'>
          <Group handleSignupOrLogin={this.handleSignupOrLogin} history={this.props.history}/>
        </Route>

		<Route exact path='/profileDetails'>
          <ProfileDetails handleSignupOrLogin={this.handleSignupOrLogin} history={this.props.history}/>
        </Route>

		<Route exact path='/profileList'>
          <ProfileList handleSignupOrLogin={this.handleSignupOrLogin} history={this.props.history}/>
        </Route>


			</>
		)
	}
}

// function renderEventContent(eventInfo) {
// 	return (
// 	  <>
// 		<b>{eventInfo.timeText}</b>
// 		<i>{eventInfo.event.title}</i>
// 	  </>
// 	)
//   }

export default App
