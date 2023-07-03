import Link from "next/link";
import Image from "next/image";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineHome, AiFillMessage } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import DefaultUser from "../images/DefaultUser.png";

type SidebarProps = {
  displayFriends: boolean;
  setDisplayFriends: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({displayFriends, setDisplayFriends}: SidebarProps) => {
  const iconSize: number = 28; // just to be able to change all at the same time

  const friendsOnClick = () => {
    setDisplayFriends(previousState => !previousState)
  }

  return (
    <div className="border-r border-white">
      <nav className="flex flex-col h-screen justify-around w-12 items-center">
        <Link href="/">
          <AiOutlineHome size={iconSize} />
        </Link>
        <FaUserFriends size={iconSize} onClick={friendsOnClick}/>
        <AiFillMessage size={iconSize} />
        <BiLogOut size={iconSize} />
        <Image
          className="h-10 w-10 rounded-full"
          src={DefaultUser} // Placeolder
          alt="DefaultUserImage"
        />
      </nav>
    </div>
  );
};

export default Sidebar;
