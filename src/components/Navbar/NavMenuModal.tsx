import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { closeNav, openNav } from "../../store/slices/NavToggleSlice";
import { RootState } from "../../store/store";

const links = {
  navLinks: [
    { title: "Shop", href: "/shop" },
    { title: "Login", href: "/auth" },
    { title: "Signup", href: "/auth" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ],
  socialLinks: [
    { title: "Facebook", href: "https://www.facebook.com" },
    { title: "Instagram", href: "https://www.instagram.com" },
    { title: "Tiktok", href: "https://www.tiktok.com" },
    { title: "shop@gmail.com", href: "mailto:shop@gmail.com" },
  ],
  legalLinks: [
    { title: "Terms and Conditions", href: "https://www.facebook.com" },
    { title: "Shipping Policy", href: "https://www.instagram.com" },
    { title: "Return Policy", href: "https://www.tiktok.com" },
    { title: "Privacy Policy", href: "mailto:shop@gmail.com" },
  ],
};

const animation_variants = {
  menuVars: {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
  containerVars: {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delay: 0.2,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  },
  linkVars: {
    initial: {
      y: "30vh",
      transition: {
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
      },
    },
  },
};

export const NavMenuModal = () => {
  const state = useSelector((state: RootState) => state.toggleNav.isOpen);

  useEffect(() => {
    if (state) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [state]);

  return (
    <AnimatePresence>
      {state && (
        <motion.div
          variants={animation_variants.menuVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed left-0 top-0 z-[900] flex h-screen w-full origin-top flex-col items-center justify-center space-y-8 bg-black/70 pb-16 text-white drop-shadow-2xl backdrop-blur-lg  backdrop-filter sm:pb-20 md:pb-32 lg:bg-black/90 lg:pb-40"
        >
          <motion.div
            variants={animation_variants.containerVars}
            initial="initial"
            animate="open"
            exit="initial"
            className="sleek relative flex h-full w-full flex-col items-end justify-center px-8 md:flex-row-reverse md:justify-start"
          >
            {/* <Brand className="fixed left-1/2 top-3 -mr-4 -translate-x-1/2 py-4 text-lg tracking-[1rem] text-white lg:text-2xl" /> */}

            <div className="hidden"></div>

            <div className="flex w-full flex-col items-end space-y-2 overflow-y-auto text-right uppercase xl:space-y-4">
              {links.navLinks.map(({ title, href }) => (
                <MenuItem key={title} title={title} href={href} />
              ))}
            </div>

            <div className="hidden w-full items-center justify-between space-x-4 md:flex">
              <div className="space-y-6">
                <div className="lg:text-text-lg text-sm uppercase text-gray-400">
                  CONNECT WITH US
                </div>
                <div className="flex flex-col space-y-1 text-sm 2xl:text-base">
                  {links.socialLinks.map(({ title, href }) => (
                    <NavLink
                      key={title}
                      to={href}
                      className="sleek hover:text-yellobg-slate-500"
                    >
                      {title}
                    </NavLink>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="lg:text-text-lg text-sm uppercase text-gray-400">
                  LEGAL LINKS
                </div>
                <div className="flex flex-col space-y-1 text-sm 2xl:text-base">
                  {links.legalLinks.map(({ title, href }) => (
                    <NavLink
                      key={title}
                      to={href}
                      className="sleek hover:text-yellobg-slate-500"
                    >
                      {title}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const MenuItem = ({
  title,
  href,
}: {
  title: string | React.ReactNode;
  href?: string;
}) => {
  const state = useSelector((state: RootState) => state.toggleNav.isOpen);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    if (state) {
      dispatch(closeNav());
    } else {
      dispatch(openNav());
    }
  };

  return (
    <div className="overflow-hidden">
      <motion.div variants={animation_variants.linkVars}>
        {href ? (
          <NavLink
            to={href}
            onClick={toggleMenu}
            className="text-center text-4xl font-black before:absolute before:bottom-0 before:right-0 before:h-[3px] before:w-0 before:bg-slate-500 before:duration-200 before:ease-out before:content-[''] before:transition-width hover:text-slate-500 hover:before:left-auto hover:before:right-0 hover:before:w-3/5 xs:text-5xl xl:text-6xl 3xl:text-7xl transition-all duration-200"
          >
            {title}
          </NavLink>
        ) : (
          title
        )}
      </motion.div>
    </div>
  );
};
