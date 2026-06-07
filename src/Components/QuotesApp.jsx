import React from 'react'
import { useState,useEffect } from 'react';
import './QuotesApp.css';

const QuotesApp = () => {

    const [quote, setQuote] = useState({
        text: "Your quote goes here",
        author: "Author Name"
    });
    const [favorites, setFavorites] = useState(false);
    const [favQuotes, setFavQuotes] = useState([]);
    useEffect(() => {
        fetchNewQuote();
    }, []);

    const toggleFavorite = () => {
        setFavorites(!favorites);
    };

    const fetchNewQuote = async () => {
        const url = await fetch('https://dummyjson.com/quotes/random');
        const data = await url.json();
        setQuote({
            text: data.quote,
            author: data.author
        });
    }

    const addToFavorites = () => {
        const isAlreadyFav = favQuotes.some(favQuote => favQuote.text === quote.text);
        if (!isAlreadyFav) {
            setFavQuotes([...favQuotes, quote]);
        }
    };

    return (
        <div className="container">
            <div className="quotes-app">
                <h1 className="app-heading">Quotes</h1>
                <i className={`bx ${favorites ? 'bxs-heart' : 'bx-heart'} fav-icon`} onClick={toggleFavorite}></i>
                <div className="quote">
                    <i className="bx bxs-quote-alt-left left-quote"></i>
                    <p className="quote-text">{quote.text}</p>
                    <p className="quote-author">- {quote.author}</p>
                    <i className="bx bxs-quote-alt-right right-quote"></i>
                </div>
                <div className="circles">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <div className="circle3"></div>
                    <div className="circle4"></div>
                </div>
                <div className="buttons">
                    <button className="btn btn-new" onClick={fetchNewQuote}>New Quote</button>
                    <button className="btn btn-fav" onClick={addToFavorites}>Add to Favorites</button>
                </div>

                {favorites && <div className="favourites">
                    <button className="btn-close" onClick={toggleFavorite}>
                        <i className="bx bx-x"></i>
                    </button>
                    {favQuotes.map((favQuote, index) => (
                        <div className="fav-quote" key={index}>
                            <div className="fav-quote-delete">
                                <i className="bx bxs-trash" onClick={() =>
                                    setFavQuotes(favQuotes.filter((_, i) => i !== index))}>
                                </i>
                            </div>
                            <p className="fav-quote-text">{favQuote.text}</p>
                            <p className="fav-quote-author">- {favQuote.author}</p>
                        </div>
                    ))}
                </div>}
            </div>
        </div>
    )
}

export default QuotesApp;