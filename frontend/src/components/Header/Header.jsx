import React from 'react'
import NavBar from './NavBar/NavBar'
import './Header.module.scss'
import Banner from './Banner/Banner'
import Cart from '../Cart/Cart'
export default function Header() {
  return (
    <>
      <NavBar />
      <Cart />
    </>
  )
}
