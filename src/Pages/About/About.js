import React from "react";
import Image from "../../images/personal/sakil.jpeg";

const About = () => {
  return (
    <div className="container mt-4 bg-info p-4">
      <div className="row">
        <div className="col-lg-6 col-sm-12 ">
          <h3>
            <span>Name:</span> <small className="h4">MD. Abu Raian Sakil</small>
          </h3>
          <p>
            Mygoal:{" "}
            <small>
              My goal is to be a good programmer. I was admitted to this course
              with this goal in mind. I was going well with the goal until React
              came. However, I fell a little behind in the test and react fight.
              But I try and always think about what I learned every day, what I
              learned about programming. The course is not long. The rest of the
              time my target is to see where the gaps are and work hard to reach
              my goal. But I can't always keep up with my target. But I want to
              say with strong will that I want to do something in life without
              learning programming.
            </small>{" "}
          </p>
        </div>
        <div className="col-lg-6 col-sm-12 text-center">
          <img className="w-50 rounded mt-2" src={Image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
