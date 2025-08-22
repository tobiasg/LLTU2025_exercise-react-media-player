import type { ReactElement } from "react";
import type { Playlist } from "../types/playlist";

interface HeaderProps {
  playlist: Playlist;
}

export const Header = ({ playlist }: HeaderProps): ReactElement => {
  return (
    <>
      <div className="header">Playlist - {playlist.name}</div>
    </>
  );
};
