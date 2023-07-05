import Link from "next/link";
import Image from "next/image";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineHome, AiFillMessage } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import DefaultUser from "../images/DefaultUser.png";
import { useContext } from "react";
import { LoginContext } from "@/context/LoginContext";

type SidebarProps = {
  displayFriends: boolean;
  setDisplayFriends: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ displayFriends, setDisplayFriends }: SidebarProps) => {
  const iconSize: number = 28; // just to be able to change all at the same time

  const { isLoggedIn } = useContext(LoginContext);

  const friendsOnClick = () => {
    setDisplayFriends((previousState) => !previousState);
  };

  return (
    isLoggedIn && (
      <div className="border-r border-white">
        <nav className="flex h-screen w-12 flex-col items-center justify-around">
          <Link href="/">
            <AiOutlineHome size={iconSize} />
          </Link>
          <FaUserFriends
            className="cursor-pointer"
            size={iconSize}
            onClick={friendsOnClick}
          />
          <AiFillMessage size={iconSize} />
          <BiLogOut size={iconSize} />
          <Image
            className="h-10 w-10 rounded-full"
            src={DefaultUser} // Placeolder
            alt="DefaultUserImage"
          />
        </nav>
      </div>
    )
  );
};

export default Sidebar;
