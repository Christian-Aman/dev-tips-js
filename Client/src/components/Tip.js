import React from 'react'

const Tip = props => {
  const { title, desc, tags, category } = props

  return (
    <div class="tip">
      This is a tip
      <h1>{title}</h1>
      <p>{desc}</p>
      <span>{tags}</span>
      <span>{category}</span>
    </div>
  )
}

export default Tip
