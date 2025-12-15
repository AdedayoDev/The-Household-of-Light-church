import { Button } from "@/components/ui/button";
import { Themetoggler } from "@/Themetoggler";
import { Link } from "react-router";
import { NavLink } from "react-router";

interface Nav {
  label: string;
  to: string;
}
const Header = () => {
  const NavItems: Nav[] = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about-us" },
    { label: "Sermons", to: "/sermons" },
    { label: "Partner", to: "/partner" },
    { label: "Contact Us", to: "/contact-us" },
  ];
  return (
    <div className="w-full bg-white dark:bg-[#580766] shadow ">
      <header className="w-10/12 mx-auto  flex items-center justify-between text-white">
        <Link to="/">
          <img
            src="/church-logo.svg"
            alt="The Household of Light"
            width={80}
            height={80}
          />
        </Link>
        {/* Large Screen */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-4">
            {NavItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-PRIMARY font-extrabold dark:text-white"
                      : "dark:text-slate-300  text-[#333] font-bold"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-center gap-2">
          <div>
            <Button className="bg-primary rounded-lg text-white">Give</Button>
          </div>
          <Themetoggler />
        </div>
      </header>
    </div>
  );
};

export default Header;
