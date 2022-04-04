import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import App from './components/App';
import './components/App.css';
import Carousel from './routes/Carousel';
import ToDo from './routes/ToDo';
import ToggleButtons from './routes/ToggleButtons';


ReactDOM.render(
  <div className='body-container'>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />}>
      <Route path='' element={<div className='home-body'><h1>Welcome!</h1><p>Please use the navigation menu to see these Accessible Components</p></div>} />
      <Route path='carousel' element={<Carousel />} />
      <Route path='to-do-list' element={<ToDo />} />
      <Route path='toggle-buttons' element={<ToggleButtons />} />
      <Route
      path='*'
      element={
          <p>There's nothing here, go back!</p>
      }
      />
    </Route>
  </Routes>
</BrowserRouter>
    
    </div>, document.querySelector('#root') );
