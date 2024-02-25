/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "../components/Navbar";
//import Zoom from 'react-medium-image-zoom';
//import 'react-medium-image-zoom/dist/styles.css';
import poem1 from "../Poems/poem1.png";
import poem2 from "../Poems/poem2.png";
import poem3 from "../Poems/poem3.png";
import poem4 from "../Poems/poem4.png";
import poem5 from "../Poems/poem5.png";
import poem6 from "../Poems/poem6.png";
import Sidebar from "../components/Sidebar";
import Footer from "../components/footer";
//import Poem2 from "../Poems/Poem2.pdf";
//import Poem3 from "../Poems/Poem3.pdf";
import certificate1 from "../Writing Certificates with samples/certificate1.jpeg";
import certificate2 from "../Writing Certificates with samples/certificate2.jpg";
import certificate3 from "../Writing Certificates with samples/certificate3.jpeg";
import certificate4 from "../Writing Certificates with samples/certificate4.jpeg";
import certificate5 from "../Writing Certificates with samples/certificate5.jpg";
import certificate6 from "../Writing Certificates with samples/certificate6.png";
import { Document, Page } from "react-pdf";
const certificateList = [
  {
    id: 1,
    src: certificate1,
    alt: "certificate_1",
  },
  {
    id: 2,
    src: certificate2,
    alt: "certificate_2",
  },
  {
    id: 3,
    src: certificate3,
    alt: "certificate_3",
  },
  {
    id: 4,
    src: certificate4,
    alt: "certificate_4",
  },
  {
    id: 5,
    src: certificate5,
    alt: "certificate_5",
  },
  {
    id: 6,
    src: certificate6,
    alt: "certificate_6",
  },
];
const PoemList = [
  {
    id: 1,
    src: poem1,
    alt: "Poem1",
  },
  {
    id: 2,
    src: poem2,
    alt: "Poem2",
  },
  {
    id: 3,
    src: poem3,
    alt: "Poem3",
  },
  {
    id: 4,
    src: poem4,
    alt: "Poem4",
  },
  {
    id: 5,
    src: poem5,
    alt: "Poem5",
  },
  {
    id: 6,
    src: poem6,
    alt: "Poem6",
  },
];
const handleClick1=()=>{
  const ele = document.getElementById("image1");
  const isFullScreen = ele.isFullScreen;
  if(!isFullScreen){
    ele.requestFullscreen();
  }
  else if(isFullScreen){
    ele.exitFullscreen();
  }
}
const handleClick2=()=>{
  const ele = document.getElementById("image2");
  const isFullScreen = ele.isFullScreen;
  if(!isFullScreen){
    ele.requestFullscreen();
  }
  else{
    ele.exitFullscreen();
  }
}
const handleClick3=()=>{
  const ele = document.getElementById("image3");
  const isFullScreen = ele.isFullScreen;
  if(!isFullScreen){
    ele.requestFullscreen();
  }
  else{
    ele.exitFullscreen();
  }
}
const handleClick4=()=>{
  const ele = document.getElementById("image4");
  const isFullScreen = ele.isFullScreen;
  if(!isFullScreen){
    ele.requestFullscreen();
  }
  else{
    ele.exitFullscreen();
  }
}
const handleClick5=()=>{
  const ele = document.getElementById("image5");
  const isFullScreen = ele.isFullScreen;
  if(!isFullScreen){
    ele.requestFullscreen();
  }
  else{
    ele.exitFullscreen();
  }
}
const handleClick6=()=>{
  const ele = document.getElementById("image6");
  const isFullScreen = ele.isFullScreen;
  if(!isFullScreen){
    ele.requestFullscreen();
  }
  else{
    ele.exitFullscreen();
  }
}
function Writing() {
  const [numPages, setNumPages] = useState(null);
  const [PageNumber, setPageNumber] = useState(1);

  function onDocumentSuccess(numPages) {
    setNumPages(numPages);
  }
  const delay = 3000;
  const [index1, setIndex1] = React.useState(0);
  React.useEffect(() => {
    setTimeout(
      () =>
        setIndex1((prevIndex) =>
          prevIndex === certificateList.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {};
  }, [index1]);
  /*const ele = document.getElementById("image");
  document
  .getElementById("image")
  .addEventListener("click", (event) => {
    if (document.fullscreenElement) {
      // exitFullscreen is only available on the Document object.
      document.exitFullscreen();
    } else {
      ele.requestFullscreen();
    }
  });*/
 return (
    <div>
      <Navbar></Navbar>
    <div>
      <h1 style={{color:"white", backgroundColor:"#040439", fontFamily:"sans-serif", fontSize:"16px", padding:"10px", lineHeightStep:"5"}}>Hi, I am a creative content writer having more than 2 years of experience in this field. I have written more than 50 poems and short stories. Some of them have been published in several magazines and albums. I was also rewarded with certificate of co-author for one of my short stories "The Deceiver". I was also an active member of several societies where I had completed several writing projects actively along with marketing of those contents. I have also participated in several open-mic events and cultural fests. I was also lucky to work in an organization named "The Observation Technologies Inc." as content writing lead where I supervised the execution of several projects. Here you can see my certificates.</h1>
    <div style={{ backgroundColor: "#040439"}}>
    <Sidebar></Sidebar>
        <h1 data-aos="slide-down"
          style={{
            color: "white",
            marginTop: "10px",
            textShadow: " 2px 3px 4px #f84261",
            fontFamily: "Montserrat",
            fontSize: "32px",
            textDecoration: "overline",
          }}
        >
          My Certificates
        </h1>
        <div data-aos="slide-up"
          className="slideshow"
          style={{
            margin: "0 auto",
            overflow: "hidden",
            maxWidth: "50%",
            maxHeight: "900px",
            marginLeft:"25%"
          }}
        >
          <div
            className="slideshowSlider"
            style={{
              whiteSpace: "nowrap",
              transform: `translate3d(${-index1 * 100}%, 0, 0)`,
              transition: "fade-out 1000ms",
            }}
          >
            {certificateList.map((image) => (
              <img
                div
                className="slide focus-ring"
                key={image.id}
                src={image.src}
                alt={image.alt}
                style={{
                  width: "100%",
                  height: "700px",
                  borderRadius: "40px",
                  display: "inline-block",
                  boxShadow: "5px 5px 5px 5px gold",
                }}
                />
            ))}
          </div>
        </div>
        <img src={poem1} id="image1" data-aos="slide-up" alt="Poem1" onClick={handleClick1} style={{
                  width: "400px",
                  height: "500px",
                  borderRadius: "40px",
                  margin:"20px",
                  padding:"5px",
                  marginLeft:"50px",
                  display: "inline-block",
                  boxShadow: "2px 2px 2px 2px gold",
                }}></img>
                <img src={poem2} id="image2" data-aos="slide-up" alt="Poem2" onClick={handleClick2} style={{
                  width: "400px",
                  height: "500px",
                  borderRadius: "40px",
                  margin:"20px",
                  padding:"5px",
                  marginLeft:"50px",
                  display: "inline-block",
                  boxShadow: "2px 2px 2px 2px gold",
                }}></img>
                <img src={poem3} id="image3" alt="Poem3" data-aos="slide-up" onClick={handleClick3} style={{
                  width: "400px",
                  height: "500px",
                  borderRadius: "40px",
                  margin:"20px",
                  padding:"5px",
                  marginLeft:"50px",
                  display: "inline-block",
                  boxShadow: "2px 2px 2px 2px gold",
                }}></img>
                <img src={poem4} id="image4" alt="Poem4" data-aos="slide-up" onClick={handleClick4} style={{
                  width: "400px",
                  height: "500px",
                  borderRadius: "40px",
                  margin:"20px",
                  padding:"5px",
                  marginLeft:"50px",
                  display: "inline-block",
                  boxShadow: "2px 2px 2px 2px gold",
                }}></img>
                <img src={poem5} id="image5" alt="Poem5" data-aos="slide-up" onClick={handleClick5} style={{
                  width: "400px",
                  height: "500px",
                  borderRadius: "40px",
                  margin:"20px",
                  padding:"5px",
                  marginLeft:"50px",
                  display: "inline-block",
                  boxShadow: "2px 2px 2px 2px gold",
                }}></img>
                <img src={poem6} id="image6" alt="Poem6" data-aos="slide-up" onClick={handleClick6} style={{
                  width: "400px",
                  height: "500px",
                  borderRadius: "40px",
                  margin:"20px",
                  padding:"5px",
                  marginLeft:"50px",
                  display: "inline-block",
                  boxShadow: "2px 2px 2px 2px gold",
                }}></img>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Writing;
