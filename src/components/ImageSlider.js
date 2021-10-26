import React, { useState } from "react";
import "./ImageSlider.css"


import image1 from "../assets/img_2/image1_fighters.jpg";
import image2 from "../assets/img_2/image2_tunnel.webp";
import image3 from "../assets/img_2/image3_space_starry.webp";
import image4 from "../assets/img_2/image4_Skywalker.webp";

import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";

const MyCollection = [
  {
    label: "First Picture",
    imgPath: image1,
  },
  {
    label: "Second Picture",
    imgPath: image2,
  },
  {
    label: "Third Picture",
    imgPath: image3,
  },
  {
    label: "Fourth Picture",
    imgPath: image4,
  },
];

const ImageSlider = () => {
 
  const [index, setIndex] = useState(0);

  const goToNextPicture = () => {
    if (index === 3) {
      console.log("in", index);
      setIndex(-1);
    }
    console.log("out", index);
    setIndex((pre) => pre + 1);
  };
  const goToBackPicture = () => {
    if (index === 0) {
      console.log("in", index);
      setIndex(4);
    }
    setIndex((pre) => pre - 1);
    console.log("out", index);
  };
  return (
    <>
      <div className="slider_container">
        <h5>HERE YOU FIND ALL YOU WISH ABOUT STARWARS</h5>
        <div className="slider_Imgs">
          <img
            src={MyCollection[index].imgPath}
            style={{
              // height: 255,
              // width: "100%",

              alignItems: "center",
              height: "70vh",
              width: "90vw",
              // maxWidth: 400,
              display: "block",
              overflow: "hidden",
            }}
            alt={MyCollection[index].label}
          />
          <div className="slide_button">
            <button onClick={goToBackPicture}>
              <LeftCircleOutlined />
              Back
            </button>
            <button onClick={goToNextPicture}>
              Next <RightCircleOutlined />
            </button>
          </div>
        </div>
      </div>
     
    </>
  );
};
export default ImageSlider;

// <div
//       style={{
//         marginLeft: "auto",
//         marginRight: "auto",
//         width: "90vw",
//       }}
//     >
//       <h5
//         style={{
//           backgroundColor: "#6f6a6a",
//           color: "#da3838",
//           textAlign: "center",
//         }}
//       >
//         HERE YOU FIND ALL YOU WISH ABOUT STARWARS
//       </h5>
//       <div
//         style={{
//           maxWidth: 400,
//           flexGrow: 1,
//         }}
//       >
//         <Paper
//           square
//           elevation={0}
//           style={{
//             // height: 50,
//             display: "flex",
//             paddingLeft: theme.spacing(4),
//             backgroundColor: theme.palette.background.default,
//             alignItems: "center",
//           }}
//         >
//           {/* <Typography style={{ color: "red" }}>
//             {MyCollection[index].label}
//           </Typography> */}
//         </Paper>
//         <img
//           src={MyCollection[index].imgPath}
//           style={{
//             // height: 255,
//             // width: "100%",

//             alignItems: "center",
//             height: "70vh",
//             width: "90vw",
//             // maxWidth: 400,
//             display: "block",
//             overflow: "hidden",
//           }}
//           alt={MyCollection[index].label}
//         />
//         <MobileStepper
//           variant="text"
//           position="static"
//           index={index}
//           steps={CollectionSize}
//           nextButton={
//             <Button
//               size="small"
//               onClick={goToBackPicture}
//               disabled={index === 0}
//             >
//               Back
//                 <KeyboardArrowLeft />

//             </Button>
//           }
//         />
//         <MobileStepper
//           variant="text"
//           position="static"
//           index={index}
//           steps={CollectionSize}
//           nextButton={
//             <Button
//               size="small"
//               onClick={goToNextPicture}
//               disabled={index === CollectionSize - 1}
//             >
//               Next

//                 <KeyboardArrowRight />

//             </Button>
//           }
//         />
//       </div>
//  </div>
