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
    <nav className="menu js-navList flex justify-content-center">
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
          <div className="mega">
            <CategoriesMegaMenu />
          </div>
        </li>
        {/* End destinations menu items */}

        <li className={router.pathname === "/contact" ? "current" : ""}>
          <Link href="/testimonials">Testimonials</Link>
        </li>

        <li
          className={router.pathname === "/blog/blog-list-v1" ? "current" : ""}
        >
          <Link href="/about">About Us</Link>
        </li>

        <li
          className={router.pathname === "/blog/blog-list-v1" ? "current" : ""}
        >
          <Link href="/blog/blog-list-v1">Blogs</Link>
        </li>
        {/* End blog */}

      </ul>
    </nav>
  );
};

export default MainMenu;
