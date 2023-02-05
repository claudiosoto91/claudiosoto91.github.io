import './toggle.css';
import { useContext } from 'react';
import { ThemeContext } from './../../context';

const Toggle = () => {
    const theme = useContext(ThemeContext);

    const handleClick = () => {
        theme.dispatch({type: "TOGGLE"});
    }
  return (
    <div className='t'>
        <p className='t-icon'>☀️</p>
        <p className='t-icon'>🌑</p>
        <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 30}}></div>
    </div>
  )
}

export default Toggle