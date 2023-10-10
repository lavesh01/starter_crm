import {
  blogItems,
  dashboardItems,
  homeItems,
  pageItems,
} from "../../data/mainMenuData";
import {
  isActiveLink,
  isActiveParent,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";

import CategoriesMegaMenu from "./CategoriesMegaMenu";
import Link from "next/link";
import { useRouter } from "next/router";

const MainMenu = ({ style = "" }) => {
  const router = useRouter();

  return (
    <nav className="menu js-navList flex justify-content-end">
      <ul className={`menu__nav ${style} -is-active`}>
        <li
          className={router.pathname === "/" ? "current" : ""}
        >
          <Link href="/">Home</Link>
        </li>
        {/* End home page menu */}

        <li className="menu-item-has-children -has-mega-menu">
          <a href="#">
            <span className="mr-10">Destinations</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <div className="mega w-auto">
            <CategoriesMegaMenu />
          </div>
        </li>
        {/* End categories menu items */}

        <li
          className={router.pathname === "/blog/blog-list-v1" ? "current" : ""}
        >
          <Link href="/about-us">About Us</Link>
        </li>

        <li
          className={router.pathname === "/blog/blog-list-v1" ? "current" : ""}
        >
          <Link href="/blog/blog-list-v1">Blogs</Link>
        </li>
        {/* End blogIems */}

        <li className={router.pathname === "/contact" ? "current" : ""}>
          <Link href="/testimonials">Testimonials</Link>
        </li>

      </ul>
    </nav>
  );
};

export default MainMenu;