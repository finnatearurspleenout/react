import React, { useState, useEffect } from 'react';

const Header = ({ date, isLogin, userAvatar }) => {
    const [showInput, setShowInput] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [submittedTerm, setSubmittedTerm] = useState('');

    useEffect(() => {
        if(submittedTerm.trim() !== '') {
            console.log('Ви шукаєте:', submittedTerm);
        }
    }, [submittedTerm]);

    const handleSearch =(e)=>{
        const text = e.target.value;
        setSearchValue(text);
        // if(text.toLowerCase() === 'stra') {
        //     setSearchValue('Stranger Things');
        // }
    };

    const handleKeyEnter =(e) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            setSubmittedTerm(searchValue);
        }
    };

    const toggleSearchInput = () => {
        if(showInput && searchValue.trim() !== '') {
            setSubmittedTerm(searchValue);
        }
        else {
            setShowInput(!showInput);
        }
    };

    const clearSearch =()=> {
        setSearchValue('');
        setSubmittedTerm('');
    };

    const selectMovie =(title) => {
        setSearchValue(title);
    };

    let profileContent;
    if(isLogin) {
        profileContent = (
            <img 
                src={userAvatar} 
                alt="Profile" 
                className="profile-avatar" 
            />
        );
    }
    else {
        profileContent = (
            <button className="login-button">
                Login
            </button>
        );
    }

    return (
        <div>
            <header>
                <div className="main-container">
                    <div className="logo">
                        <img src="/netflix-logo-png-2562 1.png" alt="logo"/>
                        <p className="header-date">
                            {/* Friday July 8th */}
                            {date}
                        </p>
                    </div>
                    <div className="search">
                        {showInput && (
                            <div className="search-wrapper">
                                <input 
                                    type="text" 
                                    className='search-input'
                                    placeholder="Search.." 
                                    value={searchValue}
                                    onChange={handleSearch}
                                    onKeyDown={handleKeyEnter}
                                />

                                {searchValue.length > 0 && (
                                    <button className="clear-button" onClick={clearSearch}>
                                        x
                                    </button>
                                )}

                                {searchValue.toLowerCase().startsWith('stra') && searchValue !== 'Stranger Things' && (
                                    <div className="search-result">
                                        <div className="result-item" 
                                        onClick={() => selectMovie('Stranger Things')}
                                        onMouseDown={(e) => e.preventDefault()}
                                        >
                                            Stranger Things
                                        </div>
                                    </div>
                                )} 
                            </div>
                        )}
                        <button className="search-icon"
                        // onClick={() => setShowInput(!showInput)}
                        onClick={toggleSearchInput}
                        style={{cursor: 'pointer'}}
                        >
                            <img src="/fe_search.svg" alt="search"/>
                        </button>
                        {/* <img src="/Ellipse 2.png" alt="Ellipse" className="profile-avatar"/> */}
                        {profileContent}
                    </div>
                </div>
            </header>
        </div>
    );
}


export default Header;