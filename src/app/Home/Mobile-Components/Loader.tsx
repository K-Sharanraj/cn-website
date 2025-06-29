import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="loader">
          
          <div className="words">
            <span className="word font-extrabold  text-2xl text-sky-500 ">Expertise</span>
            <span className="word font-extrabold  text-2xl text-green-500">Courses</span>
            <span className="word font-extrabold  text-2xl text-orange-600">Webinars</span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    
  }
  .loader {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 25px;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    height: 35px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-radius: 8px;
  }

  .words {
    overflow: hidden;
    position: relative;
  }
  .words::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      var(--bg-color) 10%,
      transparent 30%,
      transparent 70%,
      var(--bg-color) 90%
    );
    z-index: 20;
  }

  .word {
    display: block;
    height: 100%;
    padding-left: 6px;
   
    animation: spin_4991 5s infinite;
  }

  @keyframes spin_4991 {
      0% {
        transform: translateY(0%);
    }
    33% {
        transform: translateY(-100%);
    }
    66% {
        transform: translateY(-200%);
    }
    100% {
        transform: translateY(0%);
    }
  }`;

export default Loader;
