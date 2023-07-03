import React from "react";
import UlReuse from "./UlReuse";
import './footer.css';

function Footer() {
  return (
    <div>
    <div className='ulWrapper'>
      <div className='ulLists'>
        <ul>
          <UlReuse lists="FAQ" />
          <UlReuse lists="Investor Relations" />
          <UlReuse lists="Ways to Watch" />
          <UlReuse lists="Coorporate Information" />
          <UlReuse lists="Only on Netflix" />
        </ul>
      </div>
      <div  className='ulLists'>
        <ul>
          <UlReuse lists="Help Center" />
          <UlReuse lists="Jobs" />
          <UlReuse lists="Terms of Use" />
          <UlReuse lists="Contact us" />
        </ul>
      </div>
      <div  className='ulLists'>
        <ul>
          <UlReuse lists="Account" />
          <UlReuse lists="Redeem Gift Cards" />
          <UlReuse lists="Privacy" />
          <UlReuse lists="Speed Test" />
        </ul>
      </div>
      <div  className='ulLists'>
        <ul>
          <UlReuse lists="Media Center" />
          <UlReuse lists="Buy Gift Cads" />
          <UlReuse lists="Cookie Preference" />
          
          <UlReuse lists="Legal Notices" />
        </ul>
      </div>
      
    </div>
    <div className='footDev'>
        <h2>Built By: Abdurahim Amin</h2> 
      </div>
    </div>
  );
}

export default Footer;
