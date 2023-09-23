import React from 'react'
import { Header } from '../Pages/Shared/Header/Header'
import { Outlet } from 'react-router-dom'

export const Main = () => {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
    </div>
  )
}
