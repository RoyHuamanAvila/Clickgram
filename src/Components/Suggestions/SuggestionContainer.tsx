import React, { useEffect, useState } from 'react'
import Suggestions from './SuggestionsView'
import { User } from '../../interfaces'
import axios from 'axios';
import { useAppSelector } from '../../hooks';

const SuggestionContainer = () => {
  const [users, setUsers] = useState<User[]>([]);
  const token = useAppSelector(state => state.application.token);

  const getUsers = async () => {
    const response = await axios.get(`http://localhost:3000/user`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const data = await response.data;
    setUsers(data);
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <Suggestions users={users} />
  )
}

export default SuggestionContainer
