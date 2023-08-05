import { SvgIconComponent } from "@mui/icons-material";

interface Item {
  name: string;
  url: string;
  muiIcon: SvgIconComponent;
}

export const HeaderUrl = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Projects",
    url: "/projects",
  },
  {
    name: "Blogs",
    url: "/blogs",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

