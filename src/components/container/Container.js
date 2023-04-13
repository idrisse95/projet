import React from 'react'
import Nav from '../nav/Nav'
 

export default function Container(props) {
  return (
    <div>
      <Nav/>
      {props.children}

    </div>
  )
}
