import Image from "next/image";
import DefaultUser from "../images/DefaultUser.png";
import { FriendListType } from "@/types/types";

const Friend = ({ FriendName, Status }: FriendListType) => {
  return (
    <div className="my-4">
      <div className="flex">
        <Image src={DefaultUser} alt="" className="w-6 h-6 mr-1 rounded-full" />
        <div>{FriendName}</div>
      </div>
      <div className="text-xs max-w-xs overflow-hidden truncate">
        <span className="overflow-ellipsis">{Status}</span>
      </div>
    </div>
  );
};
export default Friend;
