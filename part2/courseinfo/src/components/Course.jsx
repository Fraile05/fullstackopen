const Course = ({courses}) => {
  console.log('These are props in Course', courses)

  return(
    <div>
      {courses.map(x =>
        <div key={x.id}>
          <Header nameCourse={x.name}/>
          <Content partsCourse={x.parts}/>
          <Total key={x.id} partsCourse={x.parts}/>
        </div>
      )}
    </div>
  )
}

const Header = ({nameCourse}) => {
  return(
    <div>
      <h1>{nameCourse}</h1>
    </div>
  )
}

const Content = ({partsCourse}) => {
  return(
    <div>
      {partsCourse.map(x => <Part key={x.id} partName={x.name} exercisePart={x.exercises}/>)}
    </div>
  )
}  

const Part = ({partName,exercisePart}) => {
  return(
    <div>
      <p>{partName} {exercisePart}</p>
    </div>
  )
}

const Total = ({partsCourse}) => {
  const totalExercises = partsCourse.reduce((suma, exercise) => {
    return suma + exercise.exercises
  }, 0)
  
  return(
    <div>
      <p>Number of exercises {totalExercises}</p>
    </div>
  )
}

export default Course