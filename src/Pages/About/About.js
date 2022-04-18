import React from "react";
import Image from "../../images/personal/sakil.jpeg";

const About = () => {
  return (
    <div className="container mt-4 bg-info p-4">
      <div className="row">
        <div className="col-lg-6 ">
          <h3>
            <span>Name:</span> <small className="h4">MD. Abu Raian Sakil</small>
          </h3>
          <p className="h5">
            Mygoal:{" "}
            <small>
              আমার লক্ষ্য একজন ভালোমানের প্রোগ্রামার হওয়া। এই লক্ষ্য নিয়ে এই
              কোর্সে ভর্তি হয় আমি। রিয়েক্ট আসার আগ পর্যন্ত লক্ষ্য নিয়ে ভালো
              এগিয়ে যাচ্ছিলাম। তবে পরীক্ষা আর রিয়েক্ট মারামারিতে একটু পিছিয়ে
              পড়েছি। তবে আমি চেষ্টা করি এবং সবসময় চিন্তুা করি যে, প্রতি দিন নতুন
              কি শিখলাম কি জানলাম প্রোগ্রামিং বিষয়ে। কোর্সটা বেশিদিন নাই বাকি
              সময়তে আমার টার্গেট হলো কোথায় কি গ্যাপ আছে সেগুলো দেখা এবং আমার
              লক্ষে পৌছাতে পারি সেজন্য প্রচুর পরিশ্রম করা। তবে সবসময় নিজের ফুল
              টার্গেট নিয়ে সমানে চলতে পারি না। তবে প্রবল ইচ্ছাশক্তি দিয়ে বলতে
              চাই প্রোগ্রামিং ছাড়তে নয় শিখেই লাইভে কিছু করতে চাই।
            </small>{" "}
          </p>
        </div>
        <div className="col-lg-6 text-center">
          <img className="w-50 rounded mt-2" src={Image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
