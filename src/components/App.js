import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { 
  Link, 
  Outlet
} from 'react-router-dom';
import Footer from './Footer';

export default function App() {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen]         = useState(<FontAwesomeIcon icon={faBars} />);

  const onMenuClick = () => {
    if(expanded === false) {
    setExpanded(true);
    setOpen(<FontAwesomeIcon icon={faXmarkCircle} />);
    } else {
      setExpanded(false);
      setOpen(<FontAwesomeIcon icon={faBars} />);
    }
  }
  return (
    <div className='content-container'>
    <header>
      <a href="#main" className='visually-hidden'>Skip to content</a>
    <a onClick={onMenuClick} id="home-link" href="/" title="to home"><h1>Site Title</h1>
   <img id="logo" src="newico.png" alt="pyramid AMD logo icon" height="80" /></a> 
      <nav
      id="navigation"
      style={{
          paddingBottom: '1rem'
      }}
      >
        <button onClick={onMenuClick} aria-expanded={expanded} aria-controls="menu-list">{open}<span className='visually-hidden'>Open Menu</span></button>
        <ul id="menu-list"> 
        <li>
          <Link onClick={onMenuClick} to='/'>Home</Link>
          </li>
          <li>
          <Link onClick={onMenuClick} to='/carousel'>Carousel</Link>
          </li>
          <li>
          <Link onClick={onMenuClick} to='/to-do-list'>To Do List</Link>
          </li>
          <li>
          <Link onClick={onMenuClick} to='/toggle-buttons'>Toggle Buttons</Link>
          </li>
          </ul>
      </nav>
      </header>
      <main id="main">
        <Outlet />
      </main>
      <Footer logo="newico.png" />
      </div>
  );

}
