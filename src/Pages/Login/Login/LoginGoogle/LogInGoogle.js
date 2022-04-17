import React from "react";

const LogInGoogle = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-info w-50"></div>
        <p className="mt-2 text-primary px-2">or</p>
        <div style={{ height: "1px" }} className="bg-info w-50"></div>
      </div>
      <div className="mb-4">
        <button className="btn btn-primary w-50 d-block mx-auto my-2">
          <img
            className="w-25"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Google_2011_logo.png/640px-Google_2011_logo.png"
            alt=""
          />
          <span className="px-2">Google Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default LogInGoogle;
