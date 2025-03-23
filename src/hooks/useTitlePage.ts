import { useEffect } from "react";
import { useLocation } from "react-router";

const TITLE = "Portfolio";
const NOT_FOUND= "Not Found";

const titles: Record<string, string> = {
  "/": "Home",
  "/about": "About me",
  "/projects": "Projects",
};

const useTiltlePage = () => {
  const location = useLocation();

  useEffect(() => {
    const key = location.pathname;
    const title = titles[key as keyof typeof titles] ?? NOT_FOUND;

    document.title = `${TITLE} | ${title}`;
  }, [location.pathname]);
};

export default useTiltlePage;
