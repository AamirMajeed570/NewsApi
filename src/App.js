import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
export default class App extends Component {
  // apiKey = process.env.REACT_APP_NEWS_API_KEY;
  apiKey="37909251924847b5ad3cb9a953e7a10c"
  render () {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          {/* <Route path="/" element={< News key='general' pageSize={3} apiKey={this.apiKey} country="in" category="general"/>} ></Route> */}
          <Route path="/business" element={ <News  key='business'  pageSize={3} apiKey={this.apiKey} country="in" category="business"/>}></Route>
          {/* <Route path="/entertainment" element={<News  key='entertainment'  pageSize={3} apiKey={this.apiKey} country="in" category="entertainment"/>}></Route> */}
          <Route path="/general" element={ <News  key='general' pageSize={3} apiKey={this.apiKey} country="in" category="general"/>}></Route>
          <Route path="/health" element={ <News  key='health' pageSize={3} apiKey={this.apiKey} country="in" category="health"/>}></Route>
          <Route path="/science" element={ <News  key='science' pageSize={3} apiKey={this.apiKey} country="in" category="science"/>}></Route>
          <Route path="/sports" element={ <News  key='sports' pageSize={3} apiKey={this.apiKey} country="in" category="sports"/>}></Route>
          <Route path="/technology" element={ <News  key='technology' pageSize={3} apiKey={this.apiKey} country="in" category="technology"/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
