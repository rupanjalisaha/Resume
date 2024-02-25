import React from 'react';
import "tachyons";
import {Link} from "react-router-dom";
import '././Navbar.css';
const profileList=[
  {
    id:1,
    text:"Java Developer",
  },
  {
    id:2,
    text:"Web Developer",
  },
  {
    id:3,
    text:"Content Writer",
  },
  {
    id:4,
    text:"Data Analyst",
  }
];  
function Navbar() {
  const delay3=3000;
const [index3, setIndex3] = React.useState(0);
  React.useEffect(() => {
    setTimeout(
      () =>
        setIndex3((prevIndex3) =>
          prevIndex3 === profileList.length - 1 ? 0 : prevIndex3 + 1
        ),
      delay3
    );
    return () => {};
  }, [index3]);

  return ( 
    <div className='Navbar'>
      <div>
          <div data-aos="slide-right"
          className="slideshow"
          style={{
            overflow: "hidden",
            maxWidth: "450px",
            maxHeight: "80px",
            marginTop: "5px",
            marginLeft:"40px",
          }}
        >
          <div
            className="slideshowSlider"
            style={{
              whiteSpace: "nowrap",
              transform: `translate3d(${-index3 * 100}%, 0, 0)`,
              transition: "fade 3000ms",
            }}
          >
            {profileList.map((element1) => (
                <div id='Navbar-header' style={{textShadow:"2px 2px 3px #f84261", fontFamily:"monospace",
                display:"inline-block", width:"100%"}}>{element1.text}</div>
            ))}
          </div>
        </div>
        </div>
        <ul className='navbar-menu' data-aos="slide-left">
            <li className='courseName'><Link to="/">Profile</Link></li>
            <li className='courseName'><Link to="/Writing">Writing</Link></li>
            <li className='courseName'><Link to="/Art">Art</Link></li>
            <li className='courseName'><Link to="/Contact">Contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar;
