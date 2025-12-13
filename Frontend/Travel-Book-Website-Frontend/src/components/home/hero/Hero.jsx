import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
<<<<<<< HEAD
          <Heading title='Let your travel dreams come true' subtitle='Find best packages and destinations that suits your needs' />
=======
          <Heading title='Let your travel dreams come true' subtitle='Find best packages and destinations suits your needs' />

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
>>>>>>> a40f62b6b26da60b346839080a58d59df6360986
        </div>
      </section>
    </>
  )
}

export default Hero
