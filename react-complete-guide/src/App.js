import React, { Component } from 'react';
import classesCSS from  './App.css';
import Person from './Person/Person'


class App extends Component {
  state = {
    person: [
      { id: '3a3sd3a1', name: 'Robson 2', age: 31 },
      { id: 'asasd332', name: 'Robson 3', age: 32 }
    ],
    showPerson: false
  }

  deletePersonHandler = (id) => {
    //const _person = this.state.person.slice()
    const _person = [...this.state.person]
    _person.splice(id, 1)
    this.setState({ person: _person })
  }

  nameChangedHandler = (event, id) => {
    const _personIndex = this.state.person.findIndex(p => {
      return p.id === id
    })

    const _person = { ...this.state.person[_personIndex] }

    _person.name = event.target.value

    const persons = [...this.state.person]
    persons[_personIndex] = _person

    this.setState({ person: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson
    this.setState({ showPerson: !doesShow })
  }
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }


    let persons = null

    if (this.state.showPerson) {
      persons = (
        <div>S
          {
            this.state.person.map(p => {
              return <Person
                click={() => this.deletePersonHandler(p.id)}
                name={p.name}
                age={p.age}
                key={p.id}
                changed={(event) => this.nameChangedHandler(event, p.id)} />
            })
          }
        </div>
      )
      style.backgroundColor = 'red'

    }

    let classes = [classesCSS.red, classesCSS.bold].join(' ')

    if (this.state.person.length <= 1) {
      classes = null
    }

    return (

      <div className={classesCSS.App}>
        <h1 className={classes}>Hi, I'm a react App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>

    );
  }
}

  export default App;
