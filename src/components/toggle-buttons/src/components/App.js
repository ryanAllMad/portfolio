import React from 'react';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const App = () => {
    return (
        <div className="wrapper">
        <div className="container">
            <Button fontIcon={<FontAwesomeIcon icon={faBackward} />} label="previous" />
            <Button fontIcon={<FontAwesomeIcon icon={faForward} />} label="next" />
            </div>
        <div className="container two">
            <Button fontIcon={<FontAwesomeIcon icon={faPaperPlane} />} label="send" />
        </div>
        </div>
            );
}

export default App;