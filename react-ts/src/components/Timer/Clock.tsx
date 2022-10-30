import { FC } from "react";

interface ClockProps {
  onTimerStart: boolean;
}

export const Clock: FC<ClockProps> = ({ onTimerStart = false }) => {
  return (
    <div className="clock-container">
      <span className="clock">0</span>
      <span className="clock">0</span>
      <span>:</span>
      <span className="clock">0</span>
      <span className="clock">0</span>
    </div>
  );
};
