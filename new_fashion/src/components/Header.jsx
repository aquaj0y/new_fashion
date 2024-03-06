import Nav from './Nav'
import '../componentsStyles/header.css'

export default function Header () {
  return(
    <div className='header'>
      <Nav />
      <form>
        <label className='search' htmlFor='search'> Search </label>
        <input type='text' id='search-bar' placeholder='Search for drink here!'/>
      </form>
    </div>
  )
}