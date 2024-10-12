// src/App.js
import React, { useState } from 'react';
import { query } from './api';
import './App.css';

function App() {
    const [prompt, setPrompt] = useState('');
    const [imageSrc, setImageSrc] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const image = await query({ "inputs": prompt });
            setImageSrc(image);
        } catch (error) {
            console.error('Error fetching image:', error);
        }

        setLoading(false);
    };

    return (
        <div className="App">
            <h1>Generate Image from Prompt</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter a prompt"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    required
                />
                <button className='button-85' type="submit">Generate Image</button>
            </form>
            {loading && <p>Loading...</p>}
            {imageSrc && <img src={imageSrc} alt="Generated result" />}
        </div>
    );
}

export default App;
