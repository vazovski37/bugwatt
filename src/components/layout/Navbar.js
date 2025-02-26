import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { Button } from "../ui/button";
import BugWATTLogo from "../../assets/bugwatt-logo.jpeg";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/">
        <img src={BugWATTLogo} alt="BugWATT Logo" className="w-36" />
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <Link to="/product" className="nav-link">
          Product
        </Link>
        <Link to="/about" className="nav-link">
          About Us
        </Link>

      {/* Theme Toggle Button */}
      <Button onClick={toggleTheme} className="p-2 rounded-md btn-primary">
        {theme === "dark" ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </Button>
      </div>
    </nav>
  );
}
