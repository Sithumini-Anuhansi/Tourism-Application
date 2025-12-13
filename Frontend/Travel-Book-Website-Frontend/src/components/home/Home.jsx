import React from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import Price from "./price/Price"
import Recent from "./recent/Recent"
import Team from "./team/Team"

<<<<<<< HEAD
import "./home.css"

const Home = () => {
  return (
    <>
    <Hero />

    <form className='flex'>
        <div className='box'>
            <span>Destination</span>
            <input type='text' placeholder='Location' />
        </div>
        <div className='box'>
            <span>Package Type</span>
            <input type='text' placeholder='Type' />
        </div>
        <div className='box'>
            <span>Price Range</span>
            <input type='text' placeholder='Price Range' />
        </div>
        <div className='box'>
            <h4>Search</h4>
        </div>
        <button className='btn1'>
            <i className='fa fa-search'></i>
        </button>
    </form>

=======
const Home = () => {
  return (
    <>
      <Hero />
>>>>>>> a40f62b6b26da60b346839080a58d59df6360986
      <Location />
      <Price />
      <Recent />
      <Featured />
      <Awards />
      <Team />
      
    </>
  )
}

export default Home
