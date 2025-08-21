import type { ReactElement } from "react";
import type { Track } from "../types/track";
import { formatDuration } from "../utils/formatDuration";

interface ProgressBarProps {
  track: Track;
}

export const ProgressBar = ({ track }: ProgressBarProps): ReactElement => {
  const { duration } = track;

  return (
    <>
      <div className="progress">
        <div className="time current-time">0:00</div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: "0%" }}></div>
        </div>
        <div className="time total-time">{formatDuration(duration)}</div>
      </div>
    </>
  );
};
