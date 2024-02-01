import React from 'react'
import { useParams } from 'react-router-dom'

const DetailPage = () => {

  const { id } = useParams()
  console.log(id);

  return (
    <div>DetailPage</div>

  )
}

export default DetailPage