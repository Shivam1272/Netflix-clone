import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Nav.css'

function Nav() {
    let navigate = useNavigate();
    const [show,handleShow] = useState(false)
    const [value,setValue] = useState('')
    useEffect(() => {
        window.addEventListener('scroll' ,() => {
            if(window.scrollY > 100){
                handleShow(true)
            }else{
                handleShow(false)
            }
        })
    },[]);

    let handleSubmit = (e) => {
        e.preventDefault();
        navigate('/searchmovie' ,{state:{value}})
    }

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <img  
                className='nav__logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
                alt='Netflix Logo'
            />
            <form className='nav__search' onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="search" 
                    autoComplete='off' 
                    value={value}
                    onChange={(e) => setValue(e.target.value)}/>
                <i id='nav__icon' className="fa fa-search" ></i>
            </form>
        </div>
        )
}

export default Nav