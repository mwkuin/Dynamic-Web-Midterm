import React from 'react';

function Header() {
    return (
        <header className="Header">
            <h2>Let’s help you find the perfect plant! Pick a plant category:</h2>
            <div className="CategoryOptions">
                <a href="/?category=Shrubs" className="button">Shrubs</a>
                <a href="/?category=Container Plants" className="button">Container Plants</a>
                <a href="/?category=Perennials" className="button">Perennials</a>
                <a href="/?category=Succulents" className="button">Succulents</a>
            </div>
        </header>
    );
}

export default Header
