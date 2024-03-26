import {
  IconBoxMultiple,
  IconCircleDot,
  IconHome,
  IconInfoCircle,
  IconLayout,
  IconLayoutGrid,
  IconPhoto,
  IconPoint,
  IconStar,
  IconTable,
  IconUser,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconHome,
    href: "/admin",
  },
  {
    id: uniqueId(),
    title: "Add Product",
    icon: IconCircleDot,
    href: "/admin/add",
  },
  {
    id: uniqueId(),
    title: "View Products",
    icon: IconTable,
    href: "/admin/allproducts",
  },
  {
    id: uniqueId(),
    title: "Image Uploader",
    icon: IconPhoto,
    href: "/admin/imageuploader",
  },
  // {
  //   id: uniqueId(),
  //   title: "Ratings",
  //   icon: IconStar,
  //   href: "/ui-components/ratings",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Images",
  //   icon: IconPhoto,
  //   href: "/ui-components/images",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Pagination",
  //   icon: IconUser,
  //   href: "/ui-components/pagination",
  // },
  {
    id: uniqueId(),
    title: "Orders",
    icon: IconLayoutGrid,
    href: "/admin/allorders",
  },
];

export default Menuitems;
