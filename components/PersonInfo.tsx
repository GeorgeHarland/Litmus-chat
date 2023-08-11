import Image from 'next/image';
import DefaultUser from '@/images/DefaultUser.png';
const PersonInfo = () => {
  return (
    <div>
      <Image src={DefaultUser} alt="" className="w-16" />
      <h2>RandomKarma</h2>
      <h3>Status: I like to use React</h3>
    </div>
  );
};

export default PersonInfo;
