"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const NavItem = ({ icon, link, name }: NavItemProps) => {
  const pathName = usePathname();

  return (
    <Link href={link}>
      <div
        className={`px-3 mb-1 py-2 hover:bg-secondary space-x-2 rounded-lg ${
          pathName === link ? "bg-secondary" : ""
        }`}
      >
        {icon}
        <span className="text-base font-medium tracking-wide">{name}</span>
      </div>
    </Link>
  );
};

interface NavItemProps {
  icon: ReactNode;
  name: string;
  link: string;
}

export default NavItem;
