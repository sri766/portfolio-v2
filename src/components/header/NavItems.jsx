import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Navbar = ({ isToggled ,mode}) => {
  const navigate = useNavigate();

  const items = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/blog",
      name: "Blog",
    },
    {
      path: "/skills",
      name: "Skills",
    },
    {
      path: "/projects",
      name: "Projects",
    },
    {
      path: "/contact",
      name: "Contact"
    }

  ];
  const navList = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const navItem = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    }
  };

  return (
    <>
      <motion.ul
        className={`navList ${mode === "light"? "light-mode" : ""}`}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={navList}
      >
        {items.map(item => (
          <motion.li className={`navList ${mode === "light"? "light-mode" : ""}`} variants={navItem} key={item}>
            <p onClick={()=>navigate(`${item.path}`)}>{item.name}</p>
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
};

export default Navbar;
