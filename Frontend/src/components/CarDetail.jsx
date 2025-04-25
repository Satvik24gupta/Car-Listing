import React from 'react'
import {useParams} from 'react-router-dom'

const CarDetail = (props) => {
    const {id} = useParams()
  return (
    <div>CarDetail: {id}</div>
  )
}

export default CarDetail