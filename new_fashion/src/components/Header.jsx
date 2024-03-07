import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Nav from './Nav'
import '../componentsStyles/header.css'

export default function Header () {

  const [searchTerm, setSearchTerm] = useState([])
  const navigate = useNavigate()
  const initialState = {
    searchBar: 'Search for drink here!'
  }

  const [formState, setFormState] = useState(initialState)

  const fetchData = async (searchTerm) => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(searchTerm)}`
      )
      const data = await response.json()
      return data
  
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    if (searchTerm.trim() !== '') {

        const data = await fetchData(searchTerm)

        if (data.drinks && data.drinks.length > 0) {
          const drinkId = data.drinks[0].idDrink
          const currentPath = location.pathname
          
          const basePath = currentPath.includes('alcoholdrinklist') ? '/alcoholdrinklist' : 
                           currentPath.includes('nonalcoholdrinklist') ? '/nonalcoholdrinklist' :
                           currentPath.includes('alcoholdrinklist/:id') ? '/alcoholdrinklist/:id' : 
                           currentPath.includes('nonalcoholdrinklist/:id') ? '/nonalcoholdrinklist/:id' :
                           currentPath.includes('drinklist/:id') ? '/drinklist/:id' :
                           currentPath.includes('drinklist') ? '/drinklist' :
                           '/drinklist'

          navigate(`${basePath}/${drinkId}`)

          setFormState('')
          window.location.reload()
        } else {
          console.log('No drink found')
        }
    }
  }
  

  return(
    <div className='header'>
      <Link to="/"><img className="home-button" src="https://cdn-icons-png.freepik.com/512/9094/9094099.png?ga=GA1.1.1072506134.1706482678&"/></Link>
      <Nav />
      <form onSubmit={handleSearch}>
        <input
          type='text'
          id='searchBar'
          placeholder='Search for drink here!'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className='search' type='submit'><img className='search-button' src='https://cdn-icons-png.flaticon.com/512/2907/2907439.png'/></button>
      </form>
    </div>
  )
}