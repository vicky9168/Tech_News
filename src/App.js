import React from 'react'
import Pagination from './Pagination'
import Search from "./Search"
import Stories from './Stories'
import './App.css'
// import { useContext } from 'react'
// import { AppContext } from './Context'
// import { useGlobalContext } from './Context'
const App = () => {

  // const data =useContext(AppContext);
  // const data =useGlobalContext();

  return (
    <>
      <Search />
      <Pagination />
      <Stories />
    </>
  )
}

export default App
