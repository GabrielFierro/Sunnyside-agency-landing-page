import React from 'react'

export default function Text({ text }) {
  return (
    <div>
      <h3>{text.title}</h3>
      <p>{text.paragraph}</p>
      <span>{text.span}</span>
    </div>
  )
}
