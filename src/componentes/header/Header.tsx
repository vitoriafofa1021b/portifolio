import './Header.css'
function Header(){
  return(
    <header>
      <div className="logo"> </div>
      <nav className='navbar'>
        <ul>
          <li className='navbar1'>
            <a href='#'>Home</a>
          </li>
          <li className='navbar2'>
            <a href='#'>Blog</a>
          </li>
          <li className='navbar3'>
            <a href='#'>Sobre</a>
          </li>
          <li className='navbar4'>
            <a href='#'>Contato</a>
          </li>
        </ul>
      
      </nav>
    </header>
  )
}

export default Header