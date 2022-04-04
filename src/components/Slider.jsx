import React from 'react'
import { Carousel } from 'react-carousel-minimal'

function Slider() {
  const data = [
    {
      image: "https://cdn.tgdd.vn/2022/03/banner/Aseri-830-300-830x300-1.png",
      caption: ``
    },
    {
      image: "https://cdn.tgdd.vn/2022/04/banner/830-300-830x300.png",
      caption: ""
    },
    {
      image: "https://cdn.tgdd.vn/2022/03/banner/reno7-830-300-830x300-3.png",
      caption: ""
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="Slider">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px",
        }}>
          <Carousel
            data={data}
            time={2000}
            width="1520px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            style={{
              textAlign: "center",
              maxWidth: "1520px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;