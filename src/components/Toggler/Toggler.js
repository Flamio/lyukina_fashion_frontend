import { useState } from "react";
import "./Toggler.css";

export const Toggler = (props) => {
  const [index, setIndex] = useState(1);

  const onDecClick = (event) => {
    if (index === 1) return;
    props.onChange(index-1)    
    setIndex(index - 1);
    
  };

  const onIncClick = (event) => {
    if (props.data && index === props.data.length) return;

    props.onChange(index+1)
    setIndex(index + 1);
  };

  return (
    <div className="quantity row">
      <div className="col-4">
        <p
          id="text"
          style={{ textAlign: props.textAlign ? props.textAlign : "center" }}
        >
          {props.text}
        </p>
      </div>
      <div className="pro-qty col-8">
        <span className="dec qtybtn" onClick={onDecClick}>
          -
        </span>
        <input
          type="text"
          value={`${props.numeric ? index : props.data[index - 1]}`}
        />
        <span className="inc qtybtn" onClick={onIncClick}>
          +
        </span>
      </div>
    </div>
  );
};
