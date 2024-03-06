import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from './Nav'
import '../componentsStyles/header.css'

export default function Header () {

  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const fetchData = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(searchTerm)}`
      )
      const data = await response.json()

      return data;
    } catch (error) {
      console.error('Error fetching drink details:', error)
      throw error
    }
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    if (searchTerm.trim() !== '') {
      try {
        const data = await fetchData(searchTerm)

        if (data.drinks && data.drinks.length > 0) {
          const drinkId = data.drinks[0].idDrink
          const currentPath = location.pathname
          
          const basePath = currentPath.includes('alcoholdrinklist') ? '/alcoholdrinklist' : 
                           currentPath.includes('nonalcoholdrinklist') ? '/nonalcoholdrinklist' :
                           currentPath.includes('alcoholdrinklist/:id') ? '/alcoholdrinklist/:id' : 
                           currentPath.includes('nonalcoholdrinklist/:id') ? '/nonalcoholdrinklist/:id' :
                           '/drinklist'

          navigate(`${basePath}/${drinkId}`)
        } else {
          console.log('No drink found')
        }
      } catch (error) {
        console.error('Error handling search:', error)
      }
    }
  }

  return(
    <div className='header'>
      <Nav />
      <form onSubmit={handleSearch}>
        <label className='search' htmlFor='search'> Search </label>
        <input
          type='text'
          id='search-bar'
          placeholder='Search for drink here!'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}