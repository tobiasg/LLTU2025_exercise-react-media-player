import type { ReactElement } from "react";
interface HeaderProps {}

export const Header = ({}: HeaderProps): ReactElement => {
  return (
    <>
      <header className="header">Playlist - Favorites</header>
    </>
  );
};
