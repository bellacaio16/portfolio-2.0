import React from "react";
// import headshot from './headshot-formal-blur.jpg'

const paragraphStyles =
  "w-8/12 md:min-w-xl text-xl  font-medium text-center mx-auto  md:text-2xl";

const headingStyles = "text-5xl font-extrabold py-4 mb-16";

function About(props) {
  return (
    <div
      className={` w-fit mx-auto   overflow-y-auto ${props.background} pt-32 `}
      id="about"
    >
      {/* <img className="scale-[10%]  " src={headshot}></img> */}
      <div className=" flex flex-col   items-center ">
        <h1 className={`${headingStyles} + ${props.titleColor}`}>About</h1>

        <p className={`${paragraphStyles} + ${props.paragraphStyle}`}>
          As a Full Stack Developer ,my experience spans across collaborative projects and individual contributions. With a focus on MERN & DSA, I've developed a strong foundation in both front-end and back-end technologies.
<br/>
Presently pursuing my BTech at LNCT, I am dedicated to expanding my expertise in Computer Science. My academic journey enhances my practical skills, and I am committed to contributing meaningfully to the tech community while I eagerly anticipate my graduation in June 2025.
        </p>
      </div>
    </div>
  );
}

export default About;
