import type { ReactElement } from "react";
import type { Track } from "../types/track";
import { CurrentTrackInfo } from "./CurrentTrackInfo";

interface CurrentTrackProps {
  track: Track;
}

export const CurrentTrack = ({ track }: CurrentTrackProps): ReactElement => {
  return (
    <>
      <section className="current-track">
        <figure className="track-album-cover"></figure>
        <CurrentTrackInfo track={track} />
      </section>
    </>
  );
};
