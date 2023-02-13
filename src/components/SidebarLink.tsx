"use client";
import Link from "next/link";
import { Settings, User, Grid, Calendar } from "react-feather";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Icons being SSR components, we need to import them dynamically on client side
const icons = { Settings, User, Grid, Calendar };

type SidebarLinkProps = {
    link:{
      link: string;
      icon: 'Settings' | 'User' | 'Grid' | 'Calendar';
    }
}

const SidebarLink = ({ link }: SidebarLinkProps) => {
  const pathname = usePathname();
  let isActive = false;

  if (pathname === link?.link) {
    isActive = true;
  }

  // Icons being SSR components, we need to import them dynamically on client side
  const Icon = icons[link?.icon]; // assign the icon dynamically, eg: <Settings/> as <Icon/>

  return (
    <Link href={link?.link} className="w-full flex justify-center items-center">
      <Icon
        size={40}
        className={clsx(
          "stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out",
          isActive && "stroke-violet-600"
        )}
      />
    </Link>
  );
};

export default SidebarLink;