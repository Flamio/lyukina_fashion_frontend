import { useState } from "react";
import "./Toggler.css";

export const Toggler = (props) => {
  const [index, setIndex] = useState(props.initValue ? props.initValue : 1);

  const onDecClick = (event) => {
    if (index === 1) { 
      props.onMinValueChange && props.onMinValueChange()
      return;
    }
    props.onChange(index - 1);
    setIndex(index - 1);
  };

  const onIncClick = (event) => {
    if (props.data && index === props.data.length) return;

    props.onChange(index + 1);
    setIndex(index + 1);
  };

  return (
    <div className="quantity row">
      {props.text && (
          <div
          className="col-4"
            id="text"
            style={{ textAlign: props.textAlign ? props.textAlign : "center" }}
          >
            {props.text}
          </div>
      )}

      <div className={`pro-qty col-${props.text ? '8' : '12'} row`}>
        <div className="dec qtybtn" onClick={onDecClick}>
          -
        </div>
        <input
          type="text"
          value={`${props.numeric ? index : props.data[index - 1]}`}
        />
        <div className="inc qtybtn" onClick={onIncClick}>
          +
        </div>
      </div>
    </div>
  );
};
