import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        // answering question
        <div className='theory'>
            <h1>Difference between Props and State of react.</h1>
            <h2>Difference between props and state:</h2>

           <h4>Through props the Data is passed from one component to another. But through State the Data is passed within the component only.</h4>
           <h4>Props is Immutable (cannot be modified). But State is Mutable ( can be modified).</h4>

<h4>Props can be used with state and functional components.	State can be used only with the state components/class component .</h4>
<h4>Props are read-only.	State is both read and write.</h4>
<h5>Points Discussed:</h5>
<li>Props are used to pass data from one component to another.</li>
<li>The state is a local data storage that is local to the component only and cannot be passed to other components.</li>
<li>The this.setState property is used to update the state values in the component.</li>
        </div>
    );
};

export default Footer;