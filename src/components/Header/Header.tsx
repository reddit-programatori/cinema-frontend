import Link from "next/link";
import { Nav } from "../Nav/Nav";
import Image from "next/image";
import { HeaderActions } from "./HeaderActions";

export const Header = () => {
  return (
    <header className="flex justify-around items-center py-2.5">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={91} height={91} />
      </Link>
      <Nav />
      {/* // TODO - Added div, just to simulate design. HeaderActions should be done in next ticket */}
      <HeaderActions />
    </header>
  );
};
