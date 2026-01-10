import { useState, useEffect } from 'react'
import axios from 'axios'

const Person = ({name}) => {
  return(
  <p>
    {name}
  </p>
  )
}

const App = () => { 
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')

  useEffect(() => {
    console.log('effect');
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fullfiled');
        setPersons(response.data)
      })    
  }, [])

  console.log('render', persons.length, 'notes');  

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName
    }

    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(x => <Person key={x.name} name={x.name}/>)}
      </div>
    </div>
  )
}

export default App