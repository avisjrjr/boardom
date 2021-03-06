import * as tokenService from '../services/tokenService'
const BASE_URL = '/api/users/'

export function getAllUsers() {
  return fetch(BASE_URL,
  {headers: { Authorization: "Bearer " + tokenService.getToken()}}, 
  {mode: 'cors'})
  .then(res => res.json())
}

export function getUserProfile() {
  return fetch(`${BASE_URL}userProfile`, 
  {headers: { Authorization: "Bearer " + tokenService.getToken() }},
  {mode: 'cors'})
  .then(res => res.json())
}

export function friend(id) {
  return fetch(
    `${BASE_URL}/friend/${id}`,
    {
      method: 'PATCH',
      headers: { Authorization: "Bearer " + tokenService.getToken() }
    },
    { mode: "cors" }
    ).then((res) => res.json())
}

export function unfriend(id) {
  return fetch(
    `${BASE_URL}/unfriend/${id}`,
    {
      method: 'PATCH',
      headers: { Authorization: "Bearer " + tokenService.getToken() }
    },
    { mode: "cors" }
    ).then((res) => res.json())
}