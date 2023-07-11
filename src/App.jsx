import "./App.css";
import Card from "./components/Card";

import brand1 from "./assets/images/brand_1.jpg";
import brand2 from "./assets/images/brand_2.png";
import brand3 from "./assets/images/brand_3.jpg";
import brand4 from "./assets/images/brand_4.jpg";
import brand8 from "./assets/images/brand_8.jpg";
import brand9 from "./assets/images/brand_9.jpg";
import brand10 from "./assets/images/brand_10.jpg";
import brand11 from "./assets/images/brand_11.jpg";
import brand12 from "./assets/images/brand_12.jpg";
import brand13 from "./assets/images/brand_13.jpg";
import brand14 from "./assets/images/brand_14.jpg";
import brand15 from "./assets/images/brand_15.jpeg";
import brand16 from "./assets/images/brand_16.jpg";
import brand17 from "./assets/images/brand_17.gif";
import brand18 from "./assets/images/brand_18.png";
import brand19 from "./assets/images/brand_19.jpeg";
import brand20 from "./assets/images/brand_20.jpg";
import brand21 from "./assets/images/brand_21.jpg";
import brand22 from "./assets/images/brand_22.jpeg";
import brand23 from "./assets/images/brand_23.jpeg";
import brand24 from "./assets/images/brand_24.jpg";
import brand25 from "./assets/images/brand_25.jpeg";
import brand26 from "./assets/images/brand_26.jpeg";
import brand27 from "./assets/images/brand_27.jpg";
import brand28 from "./assets/images/brand_28.jpeg";

const CARDS = [
  {
    image: brand1,
    text: "Wall",
  },
  {
    image: brand2,
    text: "ทดสอบ",
  },
  {
    image: brand3,
    text: "",
  },
  {
    image: brand4,
    text: "",
  },
  {
    image: brand8,
    text: "",
  },
  {
    image: brand9,
    text: "",
  },
  {
    image: brand10,
    text: "",
  },
  {
    image: brand11,
    text: "",
  },
  {
    image: brand12,
    text: "",
  },
  {
    image: brand13,
    text: "",
  },
  {
    image: brand14,
    text: "",
  },
  {
    image: brand15,
    text: "",
  },
  {
    image: brand16,
    text: "",
  },
  {
    image: brand17,
    text: "",
  },
  {
    image: brand18,
    text: "",
  },
  {
    image: brand19,
    text: "",
  },
  {
    image: brand20,
    text: "",
  },
  {
    image: brand21,
    text: "",
  },
  {
    image: brand22,
    text: "",
  },
  {
    image: brand23,
    text: "",
  },
  {
    image: brand24,
    text: "",
  },
  {
    image: brand25,
    text: "",
  },
  {
    image: brand26,
    text: "",
  },
  {
    image: brand27,
    text: "",
  },
  {
    image: brand28,
    text: "",
  },
];

function App() {
  return (
    <div className="page-container">
      <div className="grid grid-cols-5 gap-3 my-16 mx-auto w-[1600px]">
        {CARDS.map((item, index) => (
          <Card key={index} image={item.image}>
            {item.text}
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
