import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 614 390" height={330} width={310}>
        <g id="Frame">
          <g id="box-figma">
            <g id="cursor">
              <path strokeWidth={2} stroke="white" fill="#2563EB" d="M453.383 343L448 317L471 331L459.745 333.5L453.383 343Z" id="Vector 273" />
              <path fill="#2563EB" d="M587 343H469.932V376H587V343Z" id="Rectangle 786" />
            </g>
          </g>
        </g>
      </svg>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  #cursor,
  #box,
  #text {
    cursor: pointer;
  }
.titlesvg{
background:#000;
    }
 
  #cursor {
    overflow: visible;
    transform: translate3d(300px, 0, 0) scale(1);
    transform-origin: center center;
    transform-box: fill-box;
    animation: cursor 5s ease infinite alternate;
  }
  @keyframes cursor {
    0% {
      opacity: 0;
      transform: translate3d(300px, 0, 0) scale(1);
    }
    30% {
      opacity: 1;
      transform: translate3d(0, 0, 0) scale(1);
    }
    60% {
      opacity: 1;
      transform: translate3d(-200px, -200px, 0) scale(1);
    }

    /* clique */
    65% {
      opacity: 1;
      transform: translate3d(-200px, -200px, 0) scale(0.95);
    }
    70% {
      opacity: 1;
      transform: translate3d(-200px, -200px, 0) scale(1);
    }

    100% {
      opacity: 1;
      transform: translate3d(-300px, -50px, 0) scale(1);
    }
  }

  #box {
    opacity: 0;
    animation: box 5s ease infinite alternate;
  }
  @keyframes box {
    0%,
    60% {
      opacity: 0;
    }
    65%,
    100% {
      opacity: 1;
    }
  }
  #text {
  }`;

export default Card;
