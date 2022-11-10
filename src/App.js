import { BrowserRouter,  Route, Switch}  from 'react-router-dom'
import Cart from './Components/Cart'
import Home from './Components/Home'
import Header from './Components/Header'
import LoginForm from './Components/LoginForm'
import Products from './Components/Products'
import NotFound from './Components/NotFound'


import React from 'react'

const App = () => {
  return (    
    <BrowserRouter>
    <Header/>
    <Home/>
      <Switch>
        <Route exact path="/login" Component={LoginForm}/>
        <Route exact path="/"  Component={Home}/>
        <Route exact path="/cart" Component={Cart}/>
        <Route exact path="/header" Component={Header}/>
        <Route exact path="/products" Component={Products}/>
        <Route Component={NotFound}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
