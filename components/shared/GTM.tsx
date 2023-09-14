import { useEffect } from "react";

const GTMLayout = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtm.js?id=GTM-NJV6HW4K`;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return null; // This component doesn't render anything
};

export default GTMLayout;
