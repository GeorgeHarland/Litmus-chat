import Link from 'next/link';
import Image from 'next/image';
import { BiLogOut } from 'react-icons/bi';
import { AiOutlineHome, AiFillMessage } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import DefaultUser from '../images/DefaultUser.png';
import React, { useContext } from 'react';
import { LoginContext } from '@/context/LoginContext';

type SidebarProps = {
  setDisplayFriends: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplayChat: React.Dispatch<React.SetStateAction<boolean>>;
  setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({
  setDisplayFriends,
  setDisplayChat,
  setShowInfo,
}: SidebarProps) => {
  const iconSize: number = 28; // just to be able to change all at the same time

  const { isLoggedIn } = useContext(LoginContext);

  return (
    isLoggedIn && (
      <div className="border-r">
        <nav className="flex h-screen w-12 flex-col items-center justify-around">
          <Link href="/">
            <AiOutlineHome size={iconSize} />
          </Link>
          <FaUserFriends
            className="cursor-pointer"
            size={iconSize}
            onClick={() => setDisplayFriends((prevState) => !prevState)}
          />
          <AiFillMessage
            className="cursor-pointer"
            size={iconSize}
            onClick={() => setDisplayChat((prevState) => !prevState)}
          />
          <BiLogOut size={iconSize} />
          <Image
            className="h-10 w-10 cursor-pointer rounded-full"
            src={DefaultUser} // Placeolder
            alt="DefaultUserImage"
            onClick={() => setShowInfo((prevState) => !prevState)}
          />
        </nav>
      </div>
    )
  );
};

export default Sidebar;
