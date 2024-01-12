import React from 'react'
import "./PrimaryButton.css"
import { NavLink } from 'react-router-dom'
export const PrimaryButton = ({children ,to, onPress}) => {
  return (
    <NavLink  onClick={onPress} to={to} className='btn' >
      {children}
    </NavLink >
  )
}
