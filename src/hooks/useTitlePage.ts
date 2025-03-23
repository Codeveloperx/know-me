import { useEffect } from "react";
import { useLocation } from "react-router";

const TITLE = "Portfolio";

const titles: Record<string, string> = {
  "/": "Home",
  "/about": "About me",
  "/projects": "Projects",
};

const useTiltlePage = () => {
  const location = useLocation();

  useEffect(() => {
    const key = location.pathname;
    const title = titles[key as keyof typeof titles] ?? "Not Found";

    document.title = `${TITLE} | ${title}`;
  }, [location.pathname]);
};

export default useTiltlePage;
