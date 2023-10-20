import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';

import ContactInfo from "./ContactInfo";
import Image from "next/image";
import Link from "next/link";
import Social from "../common/social/Social";
import { useRouter } from "next/router";

const MobileMenu = () => {
  const router = useRouter();

  const handleMenuItemClick = (routePath) => {
    router.push(routePath);
  };

  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light">
        <Link href="/">
          <Image src="/img/general/FINAL EURASIA GLOBAL LOGO.png" alt="logo icon" />
        </Link>
        {/* End logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="icon icon-close"></i>
        </div>
        {/* icon close */}
      </div>
      {/* End pro-header */}
      <Sidebar>
        <Menu
          menuItemStyles={{
            button: {
              // the active class will be added automatically by react router
              // so we can use it to style the active menu item
              [`&.active`]: {
                backgroundColor: '#13395e',
                color: '#b6c8d9',
              },
            },
          }}
        >
          <MenuItem component={<Link href="/about" />}> About Us </MenuItem>
          <MenuItem component={<Link href="/testimonials" />}> Testimonials </MenuItem>
          <MenuItem component={<Link href="/blog/blog-list" />}> Blogs </MenuItem>
        </Menu>
      </Sidebar>

      
      <div className="mobile-footer px-20 py-5 border-top-light"></div>

      <div className="pro-footer">
        <ContactInfo />
        <div className="mt-10">
          <h5 className="text-16 fw-500 mb-10">Follow us on social media</h5>
          <div className="d-flex x-gap-20 items-center">
            <Social />
          </div>
        </div>
      </div>
      {/* End pro-footer */}
    </>
  );
};

export default MobileMenu;
