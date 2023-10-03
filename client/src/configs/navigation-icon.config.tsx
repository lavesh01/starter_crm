import {
    HiDocumentText,
    HiOutlineColorSwatch,
    HiOutlineDesktopComputer,
    HiOutlineHome,
    HiOutlineTemplate,
    HiOutlineViewGridAdd,
} from 'react-icons/hi'

export type NavigationIcons = Record<string, JSX.Element>

const navigationIcon: NavigationIcons = {
    home: <HiOutlineHome />,
    blog: <HiDocumentText />,
    singleMenu: <HiOutlineViewGridAdd />,
    collapseMenu: <HiOutlineTemplate />,
    groupSingleMenu: <HiOutlineDesktopComputer />,
    groupCollapseMenu: <HiOutlineColorSwatch />,
}

export default navigationIcon
