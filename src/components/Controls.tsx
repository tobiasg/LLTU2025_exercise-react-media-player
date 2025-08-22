import type { ReactElement } from "react";
import type { Track } from "../types/track";

interface ControlProps {
  track: Track;
}

export const Controls = ({ track }: ControlProps): ReactElement => {
  const { duration } = track;

  return (
    <>
      <div className="play-controls">
        <span className="material-symbols-outlined repeat">repeat</span>
        <span className="material-symbols-outlined rewind">fast_rewind</span>
        <span className="material-symbols-outlined play">play_circle</span>
        <span className="material-symbols-outlined forward">fast_forward</span>
        <span className="material-symbols-outlined shuffle">shuffle</span>
      </div>
    </>
  );
};
