import "tachyons";
import React from "react";
import Navbar from "./components/Navbar";
import Java from "./course_certificates/Java.jpg";
import HTML from "./course_certificates/HTML.png";
import CSS from "./course_certificates/CSS.png";
import JavaScript from "./course_certificates/JavaScript.png";
import Java2 from "./course_certificates/Java2.jpg";
import Sidebar from "./components/Sidebar";
import devimg from "./dev_img.gif";
import certificate from "./course_certificates/python_certificate.jpg";
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 1000,
})
function App() {
  const certificateList1 = [
    {
      id: 1,
      src: Java,
      alt: "java_1",
    },
    {
      id: 2,
      src: Java2,
      alt: "Java_2",
    },
  ];
  const certificateList2 = [
    {
      id: 1,
      src: HTML,
      alt: "HTML",
    },
    {
      id: 2,
      src: CSS,
      alt: "CSS",
    },
    {
      id: 3,
      src: JavaScript,
      alt: "JavaScript",
    },
  ];
  const delay1 = 2000;
  const delay2 = 2000;
  
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex1) =>
          prevIndex1 === certificateList1.length - 1 ? 0 : prevIndex1 + 1
        ),
      delay1
    );
    return () => {};
  }, [index]);
  const [index2, setIndex2] = React.useState(0);
  React.useEffect(() => {
    setTimeout(
      () =>
        setIndex2((prevIndex2) =>
          prevIndex2 === certificateList2.length - 1 ? 0 : prevIndex2 + 1
        ),
      delay2
    );
    return () => {};
  }, [index2]);  
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="body">
        <div id="profile_section">
        <Sidebar></Sidebar>
        <h2 id="profile"> 
        <img src = {devimg} alt="Loading..." style={{Left:"10px", width:"500px", height:"400px"}} data-aos="slide-down"></img>
        <p style={{color:"white"}}>
        Hi, My name is Rupanjali Saha and I'm a 4th year Engineering student
          of KIIT University. I'm a web developer more specifically full-stack
          web developer. I have skills in C++, Java, Python, HTML5, CSS3, MERN
          Stack, MySQL, IoT, Circuit Design, Postman API testing and Data
          analysis. I have strong problem solving and analytical skills along
          with in-depth knowledge in Data Structures and Algorithms, and
          Networking system. I also have hand-on experience in working with real
          time projects in Java, Web development and Data analysis.
          <br></br>
            To seek and maintain full-time position that offers professional challenges utilizing interpersonal skills,
excellent time management and problem-solving skills.
Focused and organized candidate committed to complete assignments in the best effective way.
Enthusiastic individual eager to learn new technical skills and upskill oneself in a professional
environment.Detail-oriented team player having worked on multiple project assignments as a part of internships
and volunteered projects.
</p>
        </h2>
        </div>
        <div id="Java" data-aos="slide-up">
          <ul>
            <li><h1>Java Development Experience</h1></li>
            <li>
              <p>Core Java:</p>
              <progress id="file" value="70" max="100"></progress>
            </li>
            <li>
              <p>Java Swing:</p>
              <progress id="file" value="50" max="100"></progress>
            </li>
            <li>
              <p>Java packages:</p>
              <progress id="file" value="50" max="100"></progress>
            </li>
            <li>
              <h2 className="Java">
                I also developed an inventory management system during this
                <br></br>training cum internship period. You can find that in my github
                profile.
              </h2>
            </li>
          </ul>
          <div>
          <h2>Certificates</h2>
          <div
          className="slideshow"
          style={{
            margin: "0 auto",
            overflow: "hidden",
            maxWidth: "500px",
            maxHeight: "500px",
            marginTop: "5px",
          }}
        >
          <div
            className="slideshowSlider"
            style={{
              whiteSpace: "nowrap",
              transform: `translate3d(${-index * 100}%, 0, 0)`,
              transition: "fade-out 3000ms",
            }}
          >
            {certificateList1.map((image1) => (
              <img id="image1"
                div
                className="slide focus-ring"
                key={image1.id}
                src={image1.src}
                alt={image1.alt}
                style={{
                  width: "100%",
                  height: "500px",
                  borderRadius: "40px",
                  display: "inline-block",
                  boxShadow: "5px 5px 5px 5px #f84261",
                }}
                //onClick={focus(image)}
              />
            ))}
          </div>
        </div>
        </div>
        </div>
        <div id="webDev" data-aos = "slide-up">
          <div id="container">
        <h2>Certificates</h2>
          <div
          className="slideshow"
          style={{
            margin: "0 auto",
            overflow: "hidden",
            maxWidth: "650px",
            maxHeight: "500px",
            marginTop: "5px",
          }}
        >
          <div
            className="slideshowSlider"
            style={{
              whiteSpace: "nowrap",
              transform: `translate3d(${-index2 * 100}%, 0, 0)`,
              transition: "fade-out 3000ms",
            }}
          >
            {certificateList2.map((image2) => (
              <img
                div
                className="slide focus-ring"
                key={image2.id}
                src={image2.src}
                alt={image2.alt}
                style={{
                  width: "100%",
                  height: "500px",
                  borderRadius: "40px",
                  display: "inline-block",
                  boxShadow: "5px 5px 5px 5px #f84261",
                }}
                //onClick={focus(image)}
              />
            ))}
          </div>
        </div>
        </div>
          <ul>
            <li><h1>Web Development Experience</h1></li>
            <li>
              <p>HTML5:</p>
              <progress id="file" value="80" max="100"></progress>
            </li>
            <li>
              <p>CSS3:</p>
              <progress id="file" value="80" max="100"></progress>
            </li>
            <li>
              <p>JavaScript:</p>
              <progress id="file" value="70" max="100"></progress>
            </li>
            <li>
              <p>MERN Stack:</p>
              <progress id="file" value="60" max="100"></progress>
            </li>
                <li><h2>I have developed several projects on MERN Stack during this course and gained experience.</h2></li>
          </ul>
        </div>
        <div id="Analysis" data-aos="slide-up">
        <ul>
            <li><h1>Experience as Data Analyst</h1></li>
            <li><h2>I have completed a training cum internship in Python and ML. There I have learned all the basics of python, data structures in python [List, Set, Tuple and Dictionary]. after that I learned numpy, pandas, matplotlib and seaborn for data visualization and data analysis. I have developed several projects in data analysis including book recommender system and time-series analysis.</h2></li>
            <li>
              <p>Python basics:</p>
              <progress id="file" value="60" max="100"></progress>
            </li>
            <li>
              <p>Numpy (To process data in array format):</p>
              <progress id="file" value="50" max="100"></progress>
            </li>
            <li>
              <p>Pandas (To read files ):</p>
              <progress id="file" value="50" max="100"></progress>
            </li>
            <li>
              <p>matplotlib (A graph plotting library of python):</p>
              <progress id="file" value="50" max="100"></progress>
            </li>
            <li>
              <p>Seaborn (A user graphics library of python):</p>
              <progress id="file" value="60" max="100"></progress>
            </li>
            <li>
              <h2 className="Analysis">
                You can find the projects in my github profile.
              </h2>
            </li>
          </ul>
          <div id="an">
            <img src={certificate} alt="" style={{width:"400px", height:"500px"}}></img>
          </div>
        </div>
        </div>
      </div>
  );
}
export default App;
