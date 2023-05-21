import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - KidsHero`;
  }, [title]);
};

export default useTitle;
