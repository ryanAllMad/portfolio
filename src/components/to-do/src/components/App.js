import React, {useState, useRef} from 'react';
import AddItem from "./AddItem";


const App = () => {
    const [heading, setHeading] = useState('');
    const [headingFeedback, setHeadingFeedback] = useState('');
    const [display, setDisplay] = useState('');
    const [tabindex, setTabIndex] = useState('0');

    const headingRef = useRef();
    const titleFormRef = useRef();

    const onHeadingChange = () => {
        setHeading(headingRef.current.value);
        //turned the list heading string into a syntactiacally friendly ID and aria-lableled-by in App element
    }


//TODO add Edit icon and button and bring back Input to edit the title already filled out

const onHeadingSubmit = (e) => {
    e.preventDefault();
    titleFormRef.current.remove();//remove input from dom
    setHeadingFeedback(`New heading set to: ${headingRef.current.value}`); //non visual feedback when list item added 
    setDisplay('visible'); //show heading
    setTabIndex('-1');
    document.querySelector(`#add-to-do`).focus();
}
    
return (
    <div className='wrapper'>
    <section aria-labelledby={heading.replaceAll(' ', '-').toLowerCase()}>
    <h1 tabIndex={tabindex} className={`${display} to-do-title`} id={heading.replaceAll(' ', '-').toLowerCase()}> {heading}</h1>
    <form ref={titleFormRef} onSubmit={onHeadingSubmit}>
    <label htmlFor="add-list-heading" className="visually-hidden">Enter Heading</label>
    <input id="heading-input" type="text" placeholder="Enter Heading" ref={headingRef} value={heading} onChange={onHeadingChange} /><span className='place-cursor'> |</span>
    </form>
    <div role="status" aria-live="polite" className="visually-hidden">{headingFeedback}</div>
    
    
    <div className="empty-state">
        <p>Either you've done everything already or there are still thingsto add to your list</p>
    </div>
    <AddItem />
</section>
</div>
);
}

export default App;
