import React from 'react';
import memedata from './memedata';

export default function Meme() {

    function getMeme() {
        const memeArray = memedata.data.memes
        const randomnumber =Math.floor(Math.random()* memeArray.length)
        const url = memeArray[randomnumber].url
        console.log(url)
    }
    return(
        <div>
            <main>
                <form className='form'>
                    <input 
                        type="text"
                        placeholder="Top text"
                        className="form--input"
                    />
                    <input 
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                    />
                    <button 
                        className="form--button"
                        onClick={getMeme}
                    >
                        new image
                    </button>
                </form>
            </main>
        </div>
    )
};
