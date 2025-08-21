import type { ReactElement } from "react";
import type { Track } from "../types/track";
import { formatDuration } from "../utils/formatDuration";

interface ControlProps {
  track: Track;
}

export const Controls = ({ track }: ControlProps): ReactElement => {
  const { duration } = track;

  return <></>;
};
