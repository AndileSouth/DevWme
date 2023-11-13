import React from 'react';
import './styles/dev.css';

export const DEV = () => {

    const note = () => {
        const btn = document.getElementById('note');
        const display = window.getComputedStyle(btn).getPropertyValue('display');

        if (display === 'flex') {
            btn.style.display = 'none';
        }
    }

  return (
    <div className='DEV'>

        <div className="nav-tools row">
            <div className="user-profile"></div>
            <h2>DevWme</h2>
            <div className="more-tools">More Tools</div>
        </div>

        <div className="main-components row">

            <div className="users col">

                <div className="event-screen row">
                    activity screen
                </div>

                <div className="additonal-users">
                    <div className="member">member</div>
                    <div className="member">member</div>
                    <div className="member">member</div>
                    <div className="member">member</div>
                    <div className="member">member</div>
                    <div className="member">member</div>
                    <div className="member">member</div>
                    <div className="member">member</div>
                </div>

            </div>

            <div className="side-app">

                <div className="Chat-app">
                    <div className="chat">
                        chat section
                    </div>
                </div>

                <div className="meeting-controls row">
                    <div className="end col">End</div>
                </div>

            </div>
        </div>

    <div id='note' className="note">
        <p>For best user experiance ensure that screen width is min:800px and height</p>
        <button onClick={note}>OK</button>
    </div>

    </div>
  )
}
