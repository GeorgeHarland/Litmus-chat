import Image from "next/image";
import DefaultUser from "../images/DefaultUser.png";
import { FriendListType } from "@/types/types";

const Friend = ({ FriendName, Status }: FriendListType) => {
  return (
    <div className="my-4">
      <div className="flex">
        <Image src={DefaultUser} alt="" className="mr-1 h-6 w-6 rounded-full" />
        <div>{FriendName}</div>
      </div>
      <div className="max-w-xs overflow-hidden truncate text-xs">
        <span className="overflow-ellipsis">{Status}</span>
      </div>
    </div>
  );
};
export default Friend;
