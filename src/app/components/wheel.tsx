import CupOfTea from "./cup_of_tea";

import "../styles/components/wheel.css";

interface WheelProps {
  items: string[];
  isSpinning: boolean;
  isSpinningAnimation: boolean;
  choosedItem: string | null;
}

export default function Wheel(props: WheelProps) {
  return (
    <div className="container w-full mt-11 flex items-center">
      <div className={`result ${props.isSpinning ? "resultEffect" : ""}`}>
        <h2 className="title">{props.choosedItem}</h2>
      </div>
      <div className={props.isSpinningAnimation ? "shake" : ''}>
        <CupOfTea />
      </div>
    </div>
  )
}