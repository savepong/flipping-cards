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
import { useState } from "react";

const CARDS = [
  {
    image: brand1,
    text: "หาร 2 (ทศนิยมปัดลง)",
  },
  {
    image: brand2,
    text: "คูณ 2",
  },
  {
    image: brand3,
    text: "คูณ 2",
  },
  {
    image: brand4,
    text: "บวก 7",
  },
  {
    image: brand8,
    text: "บวก 7",
  },
  {
    image: brand9,
    text: "บวก 7",
  },
  {
    image: brand10,
    text: "ลบ 7",
  },
  {
    image: brand11,
    text: "ลบ 7",
  },
  {
    image: brand12,
    text: "ลบ 7",
  },
  {
    image: brand13,
    text: "บวก 5",
  },
  {
    image: brand14,
    text: "บวก 5",
  },
  {
    image: brand15,
    text: "บวก 5",
  },
  {
    image: brand16,
    text: "ลบ 5",
  },
  {
    image: brand17,
    text: "ลบ 5",
  },
  {
    image: brand18,
    text: "ลบ 5",
  },
  {
    image: brand19,
    text: "หากมีสมาชิกในทีมแต่งตัวตามตีมงาน รับคะแนน +10 หากไม่มี -10",
  },
  {
    image: brand20,
    text: "ตู้เต่าบินอยู่ชั้นไหน ตอบได้ +10 ตอบผิด -10",
  },
  {
    image: brand21,
    text: "จงบอกชื่อตึกที่เราทำงานอยู่ตอนนี้ ตอบได้ +10 ตอบผิด -10",
  },
  {
    image: brand22,
    text: "บวก 2 ให้กับสมาชิกในทีมที่มีสติ๊กเกอร์เข้างาน",
  },
  {
    image: brand23,
    text: "แบ่งคะแนนไปให้ทีมทางด้านขวามือ",
  },
  {
    image: brand24,
    text: "แบ่งคะแนนไปให้ทีมทางด้านซ้ายมือ",
  },
  {
    image: brand25,
    text: "สลับคะแนนกับทีมใดก็ได้",
  },
  {
    image: brand26,
    text: "สลับคะแนนกับทีมที่ได้คะแนนน้อยที่สุด",
  },
  {
    image: brand27,
    text: "แบ่งคะแนนจากทีมอื่นๆ ทีมละ 3 คะแนน มาให้ทีมตัวเอง",
  },
  {
    image: brand28,
    text: "หาร 2 (ทศนิยมปัดลง)",
  },
];

function App() {
  const [isFlipAll, setIsFlipAll] = useState(true);
  const [cards, setCards] = useState(CARDS);

  const shuffledCards = cards => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }
    
    setCards([...cards]);
  }

  return (
    <div className="page-container">
      <div className="grid grid-cols-5 gap-3 my-16 mx-auto w-[1600px]">
        {cards.map((item, index) => (
          <Card key={index} image={item.image} flip={isFlipAll}>
            {item.text}
          </Card>
        ))}
        <button className="text-white fixed top-64 right-4" onClick={() => setIsFlipAll(!isFlipAll)}>Flip All</button>
        <button className="text-white fixed top-72 right-4" onClick={() => shuffledCards(cards)}>Shuffle</button>
      </div>
    </div>
  );
}

export default App;
