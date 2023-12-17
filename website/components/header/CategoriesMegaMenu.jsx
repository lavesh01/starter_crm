import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import Image from "next/image";
import Link from "next/link";
import { categorieMegaMenuItems } from "../../data/mainMenuData";
import { isActiveLink } from "../../utils/linkActiveChecker";
import { useRouter } from "next/router";

const CategoriesMegaMenu = () => {
  const router = useRouter();
  const itemList = [
    "Countries",
  ];

  return (
    <Tabs className="tabs -underline-2 js-tabs">
      <TabList className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 pb-30 js-tabs-controls">
        {itemList.map((item, i) => (
          <Tab className="col-auto" key={i}>
            <button className="tabs__button text-light-1 fw-500 js-tabs-button">
              {item}
            </button>
          </Tab>
        ))}
      </TabList>

      <div className="tabs__content js-tabs-content">
        {categorieMegaMenuItems.map((megaMenu) => (
          <TabPanel key={megaMenu.id}>
            {megaMenu?.menuCol?.map((megaCol, i) => (
              <ul className="mega__content" key={i}>
                <li className="mega__grid">
                  {megaCol?.menuItems?.map((item) => (
                    <div className="mega__item" key={item.id}>
                      <div className="text-15 fw-600">{item.title}</div>
                      <div className="y-gap-5 text-15 pt-5">
                        {item?.menuList?.map((list, i) => (
                          <div
                            key={i}
                            className={
                              isActiveLink(list.routePath, router.asPath)
                                ? "current"
                                : ""
                            }
                          >
                            <Link href={list.routePath}>{list.name}</Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </li>

                <li className=" d-flex relative">
                  <Image
                    width={270}
                    height={300}
                    priority={true}
                    src={megaCol?.megaBanner}
                    alt="image"
                    className="rounded-4 js-lazy"
                  />

                  <div className="absolute w-full h-full px-30 py-24">
                    <div className="text-22 fw-500 lh-15 text-white">
                      {megaCol?.title}
                    </div>
                    <Link
                      href={megaCol?.btnRoute}
                      className="button text-uppercase h-50 px-30 -blue-1 text-dark-1 bg-white mt-20 d-inline-flex"
                    >
                      {megaCol?.btnText}
                    </Link>
                  </div>
                </li>
              </ul>
            ))}
          </TabPanel>
        ))}
      </div>
    </Tabs>
  );
};

export default CategoriesMegaMenu;
