const Header = (props) => {
  console.log(props)

  return(
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  const [n1, n2, n3] = props.course.parts

  return(
    <div>
      <Part partName = {n1.name} exercisePart = {n1.exercises}/>
      <Part partName = {n2.name} exercisePart = {n2.exercises}/>
      <Part partName = {n3.name} exercisePart = {n3.exercises}/>
    </div>
  )
}  

const Part = (props) => {
  console.log(props)

  return(
    <div>
      <p>{props.partName} {props.exercisePart}</p>
    </div>
  )
}

const Total = (props) => {
    console.log(props)
    const [n1, n2, n3] = props.course.parts

  return(
    <div>
      <p>Number of exercises {n1.exercises + n2.exercises + n3.exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course}/>
      <Content course = {course}/>
      <Total course = {course}/>
    </div>
  )
}

export default App