import React from "react";
import BodyImg from "../assets/img_2/bringhomethebounty.webp";
import styled from "styled-components";

const HomeBody = () => {
  return (
    <Div>
      <Img src={BodyImg} alt="" />
    </Div>
  );
};
export default HomeBody;

const Div = styled.div`
 
`;
const Img = styled.img`
  width: 100vw;
`;
