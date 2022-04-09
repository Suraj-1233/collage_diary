import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import MainCard from './MainCard';
import './Card.css';
import complain from './image_header/complain_1_0.jpg';
import Resource from './image_header/resouce.jpg';
import chat from './image_header/chat1.jpg';
function Card() {
  return (
    <div className="wrapper">
      <MainCard
        img={complain}
        title="Complain "
        description="If you have any problem then come and report respasitive"
      />

      <MainCard
       img={chat}
        title="Chat app"
        description="If You Free Then Come"
      />

      <MainCard
        img={Resource}
        title=" Resource "
        description="In here we have resoures "
      />
    </div>
  );
}

export default Card;