import React from 'react'

const ItemsList = ({ list }) => {
  return (
    <ul>
      {list.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  )
}

export default ItemsList
