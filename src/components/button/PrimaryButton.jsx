import React from 'react'
import "./PrimaryButton.css"
import { Link, NavLink } from 'react-router-dom'
export const PrimaryButton = ({children ,to, onPress}) => {
  return (
    <Link preventScrollReset={false}   onClick={onPress} to={to} className='btn' >
      {children}
    </Link >
  )
}
