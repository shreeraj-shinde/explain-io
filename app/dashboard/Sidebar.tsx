import NavItem from "@/app/Components/NavItem";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Folder,
  GroupIcon,
  PersonStanding,
  SearchIcon,
  Share,
  Star,
  Trash,
} from "lucide-react";
const Sidebar = () => {
  return (
    <aside className="pt-20 h-screen border-r pr-2">
      <div className="flex flex-col py-5">
        <NavGroup1 />
        <NavGroup2 />
      </div>
    </aside>
  );
};

const NavGroup1 = () => {
  const Navlist = [
    {
      name: "Search",
      link: "/dashboard",
      icon: <SearchIcon className="inline" />,
    },
    {
      name: "Recent",
      link: "/dashboard/recent",
      icon: <Clock className="inline" />,
    },
    {
      name: "Shared with Me",
      link: "/dashboard/shared",
      icon: <Share className="inline" />,
    },
    {
      name: "Starred",
      link: "/dashboard/starred",
      icon: <Star className="inline" />,
    },
  ];
  return (
    <div>
      {Navlist.map((navItem, idx) => (
        <NavItem
          key={idx}
          link={navItem.link}
          name={navItem.name}
          icon={navItem.icon}
        />
      ))}
    </div>
  );
};

const NavGroup2 = () => {
  const Navlist = [
    {
      name: "Created by Me",
      link: "/me",
      icon: <PersonStanding className="inline" />,
    },
    {
      name: "By Members",
      link: "/dashboard/members",
      icon: <GroupIcon className="inline" />,
    },
    {
      name: "Create Folder",
      link: "/dashboard/create",
      icon: <Folder className="inline" />,
    },
    {
      name: "Trash",
      link: "/dashboard/trash",
      icon: <Trash className="inline" />,
    },
  ];
  return (
    <div className="flex flex-col pt-8">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl px-3 font-semibold tracking-tight">
          Profile Name
        </h1>
        <Badge>Free</Badge>
      </div>
      {/* Nav Group 2 */}
      {Navlist.map((Navitem, idx) => (
        <NavItem
          name={Navitem.name}
          link={Navitem.link}
          icon={Navitem.icon}
          key={idx}
        />
      ))}
    </div>
  );
};

export default Sidebar;
