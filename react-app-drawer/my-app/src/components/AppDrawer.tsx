import { Link, Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

export type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type Props = {
  menuItems: MenuItem[];
};
export function AppDrawer({ menuItems }: Props) {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="navbar" />
      <div className="flex">
        <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <FaBars
            onClick={showSidebar}
            className="nav-menu-items"
            size="1.5rem"
          />
          <ul className="nav-menu-items">
            <li className="nav-bar-toggle">
              <Link to="#" className="menu-bars"></Link>
            </li>
            {menuItems.map((item, i) => {
              return (
                <li key={i}>
                  <Link to={item.path}>
                    <img
                      src={item.iconUrl}
                      alt={item.name}
                      className="icon-style"
                    />
                    <span className="item-name icon-style">
                      {sidebar && item.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="grow">
          <Outlet />
        </div>
      </div>
    </>
  );
}

/* const [isOpen, setIsOpen] = useState(false);

  export function AppDrawer({ menuItems }: Props) {
  return (
    <div>
      <nav className="px-4 text-white bg-gray-900">
        <ul>
          {menuItems.map((menu) => (
            <li key={menu.name} className="inline-block py-2 px-4">
              <Link to={menu.path} className="text-white">
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
*/
