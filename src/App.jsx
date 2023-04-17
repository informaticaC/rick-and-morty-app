import { useEffect, useRef, useState } from 'react'

import './App.css'
import useFetch from './hooks/useFetch'
import getRandomLocation from './utils/getRandomLocation'
import MainContent from './components/MainContent'

function App() {
  const [inputValue, setInputValue] = useState(getRandomLocation())
  // const url = `https://rickandmortyapi.com/api/location/${getRandomLocation()}`
  let url = `https://rickandmortyapi.com/api/location/${inputValue}`
  let [location, hasError] = useFetch(url)

  const inputLocation = useRef()
  function handleLocationSubmit(e) {
    e.preventDefault()
    if(inputLocation.current.value){
      setInputValue(inputLocation.current.value)
      inputLocation.current.value = ''
    }
    
  }
  
  // console.log(location)
  return (
    <div className="app" >
      <header className='header__img'>
        <img src="public\img\bannerRaM3.png" alt="" />
      </header>
      <h1 className='app__title'>Rick and Morty</h1>
      <form className='app__form' action='' onSubmit={handleLocationSubmit} >
        <input className='app__input' type="number" ref={inputLocation} placeholder='Put a number between 1 and 126'/>
        <button className='app__btn'>Search</button>
      </form>
      {
        hasError?
        <h2 className='app__error'>❌ Hey you must provide an id from 1 to 126!</h2>
        :<MainContent location={location}/>
      }
      
    </div>
  )
}

export default App
