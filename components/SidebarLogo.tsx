import { useRouter } from "next/router";
import { FC } from "react";
import { BsTwitter } from "react-icons/bs";

interface SidebarLogoProps {}

const SidebarLogo: FC<SidebarLogoProps> = ({}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-blue-300 cursor-pointer transition"
    >
      <BsTwitter color="white" size={28} />
    </div>
  );
};

export default SidebarLogo;
