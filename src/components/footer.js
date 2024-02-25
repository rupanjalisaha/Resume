import React from 'react'
import Reveal from 'react-awesome-reveal'
import "./footer.css"
function Footer() {
  return (
    <div>
      <Reveal effect="slide" duration={500} delay={1000} distance="30px" height="50px" easing="easeInOutQuad" animate infinite>
        <h2>You can also send me emails at <b><u>rupanjalisaha2001@gmail.com</u></b></h2>
      </Reveal>
    </div>
  )
}

export default Footer
