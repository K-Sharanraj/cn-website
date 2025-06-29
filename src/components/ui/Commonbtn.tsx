import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <StyledWrapper>
      <button className={`relative text-lg uppercase text-decoration-none px-5 py-2 lg:px-10 lg:py-4 bg-gradient-to-br from-[#00A3FF] to-[#13D8FB] w-auto cursor-pointer rounded-full transition-all duration-200 border-none font-inherit font-medium  hover:translate-y-[-3px] hover:shadow-lg active:translate-y-[-1px] active:shadow-md ${className || ''}`}>
        {children}
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div``;

export default Button;
