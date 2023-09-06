import React from 'react'

const Header = () => {
  const year = (new Date).getFullYear();
  return (
    <footer>
        <p>Copyright &copy; {year}</p>
    </footer>
  )
}

export default Header
