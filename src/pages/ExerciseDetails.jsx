import React from 'react'
import { useParams } from 'react-router-dom'


const ExerciseDetails = () => {
    const {id} = useParams()
  return (
    <div>
      <h1>Exercise Details Page {id}</h1>
    </div>
  )
}

export default ExerciseDetails
