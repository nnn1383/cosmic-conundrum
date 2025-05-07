import React from 'react';
import ReactDOM from 'react-dom/client';
import Question from "./Question";
import './styles.css';

function Page() {
    return (
        <div className="homepage">
            <main>
                <h1 className="adventure-title">Cosmic Conundrum</h1>
            </main>
            <img src="/Users/nnn1383/Desktop/Cosmic Conundrum/cosmic-conundrum/src/images/spaceshipgif.gif"></img>
            <Question />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);