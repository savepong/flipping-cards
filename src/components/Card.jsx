import { useEffect, useState } from "react";

function Card(props) {
  const [isFlipped, setIsFlipped] = useState(props.flip);

  const image = props.image;

  const flip = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => { flip() }, [props.flip]);

  return (
    <div
      onClick={flip}
      className={
        "card-container cursor-pointer mx-3" + (isFlipped ? " flipped" : "")
      }
    >
      <Front image={image} />
      <Back onClick={flip}>
        <div className="flex items-center justify-center h-full w-full text-4xl text-center">
          {props.children}
        </div>
      </Back>
    </div>
  );
}

function Front(props) {
  return (
    <div className="front overflow-hidden">
      <img src={props.image} className="object-contain h-full w-full" />
    </div>
  );
}

function Back(props) {
  return <div className="back">{props.children}</div>;
}

export default Card;
