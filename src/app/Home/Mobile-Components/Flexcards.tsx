import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <p className='bg-orange-500 '><span>Tech trio</span></p>
        <p  className='bg-red-500   '><span>UI/UX</span></p>
        <p  className='bg-blue-400  '><span>Full Stack</span></p>
        <p  className='bg-green-500 '><span>Bizpro</span></p>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    height: 254px;
    border-radius: 4px;
    //background: #02A9FF;
    display: flex;
    gap: 5px;
    padding: .4em;
    place-self: center;
  }

  .card p {
    height: 100%;
    flex: 1;
    overflow: hidden;
    cursor: pointer;
    border-radius: 8px;
    transition: all .5s;
    // background: #12D4FB;
   // border: 1px solid #ff5a91;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card p:hover {
    flex: 4;
  }

  .card p span {
    min-width: 14em;
    padding: .5em;
    text-align: center;
    font-weight: bold;
    font-size: 1.2em;
    transform: rotate(-90deg);
    transition: all .5s;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: .1em;
  }

  .card p:hover span {
    transform: rotate(0);
  }`;

export default Card;
