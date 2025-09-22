import '../App.css';
import React, { useState } from 'react';

const Logo = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
            <section>
                <img src="../svgImages/logo.svg" alt="Logo" height={70} width={110} />
            </section>
            <section style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'white', padding: '0.3rem', borderRadius: '5px', border: '1px solid', borderColor: '#f2f1f1ff' }}>
                <img src="../svgImages/search.svg" alt="search" height={'20rem'} width={'20rem'} />
                <input type="text" className='search' placeholder="Search for Movies,Events,Play, Sports and Activities" style={{ width: '30rem', height: '2rem', border: 'none', }} />
            </section>
        </div>
    )
}


const SearchBar = ({ isLoggedIn, onLoginToggle }) => {

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <section style={{ display: 'flex', justifyContent: 'space-around', gap: '0.5rem', alignItems: 'center', padding: '0.3rem', cursor: 'pointer' }}>
                <span>Location</span>
                <img src="../svgImages/down-arrow.svg" alt="down-arrow" height={'20rem'} width={'20rem'} />
            </section>
            <section>
                <button style={{ height: '1.8rem', width: '4.5rem', backgroundColor: 'rgb(235, 78, 98)', color: 'white', borderRadius: '5px', borderColor: 'rgba(233, 64, 87, 1)', cursor: 'pointer' }} onClick={onLoginToggle}>{isLoggedIn ? 'Logout' : 'Sign in'}</button>
            </section>
            <section>
                <img src="../svgImages/menu.svg" alt="menu" height={'30rem'} width={'40rem'} style={{ cursor: 'pointer' }} />
            </section>
        </div>
    )
}
const Header2 = () => {
    return (
        <>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between', width:'100%', boxSizing:'border-box', margin:'0', padding:'0',backgroundColor:'#f0f0f0ff',marginBottom:'0.5rem' }}>
            <section style={{ display: 'flex', alignItems: 'center', gap: '2rem', backgroundColor: '#f0f0f0ff', width: '100%', boxSizing: 'border-box', margin: '0',padding:'0.5rem 3rem' }}>
                <section>
                    <span>Movies</span>
                </section>
                <section>
                    <span>Stream</span>
                </section>
                <section>
                    <span>Events</span>
                </section>
                <section>
                    <span>Plays</span>
                </section>
                <section>
                    <span>Sports</span>
                </section>
                <section>
                    <span>Activities</span>
                </section>
            </section>
            <section style={{ display: 'flex', alignItems: 'center', gap: '2rem', backgroundColor: '#f0f0f0ff', width: '100%', boxSizing: 'border-box', margin: '0', padding:'0.5rem 3rem', justifyContent:'flex-end' }}>
                <section>
                    <span>ListYourShow</span>
                </section>
                <section>
                    <span>Corporates</span>
                </section>
                <section>
                    <span>Offers</span>
                </section>
                <section>
                    <span>GiftCards</span>
                </section>
            </section>

        </div>
        </>
    )
}
function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginToggle = () => {
        setIsLoggedIn(prev => !prev);
    };
    return (
        <div>
        <div className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.1rem 3rem', backgroundColor: 'white', width: '100%', boxSizing: 'border-box', margin: '0' }}>
            <Logo />
            <SearchBar isLoggedIn={isLoggedIn} onLoginToggle={handleLoginToggle} />
        </div>
        <div>
            <Header2 />
        </div>
        </div>
    );
}

export default Header;