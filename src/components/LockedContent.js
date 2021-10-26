import React, { useEffect } from "react";
import styled from "styled-components";
import "./Home.css";

function LockedContent({ setShowIntro }) {
  useEffect(() => {
    const eliminateIntro = () => {
      setShowIntro(false);
    };
    eliminateIntro();
  }, [setShowIntro]);

  return (
    <div className="stars">
      <div className="twinkling">
        <div className="clouds">
          <div className="content_div">
            <Title>This content is locked only members can browse it</Title>
            <ParaphHome>
              Please sign up to have full access in our webpage
            </ParaphHome>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LockedContent;

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
