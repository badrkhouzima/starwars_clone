import React from "react";
import "./Members.css";
import styled from "styled-components";

const Members=()=> {
  return (
    <div className="stars">
      <div className="twinkling">
        <div className="clouds">
          <div className="content_div">
            <Title>
              Welcome to Star Wars members' space
            </Title>

            <ParaphHome>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium nihil maxime rem omnis eveniet, eos nobis temporibus similique eum molestias facere. Repellendus totam temporibus, odit inventore in voluptatem sequi sed.
            </ParaphHome>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Members;

const Title = styled.h1`
  color: #fff;
  text-align: center;
`;

const ParaphHome = styled.p`
  color: white;

  font-family: "Lato", sans-serif, Arial, Helvetica, sans-serif;
  font-size: 23px;
  font-weight: 300;
  padding: 3px 150px;
`;


