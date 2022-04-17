import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="text-center mt-5">
      <p>
        <small className="text-dark fw-bolder">
          copyright @ {year} Raian Learning Home{" "}
        </small>
      </p>
    </footer>
  );
};

export default Footer;
