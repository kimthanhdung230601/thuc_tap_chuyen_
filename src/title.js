import { useLocation } from "react-router-dom";

function Title({ children }) {
  const location = useLocation();
  const name = location.pathname;
  const index = name.lastIndexOf("/");
  const router = name.slice(index + 1);
  let path = router.charAt(0).toUpperCase() + router.slice(1);
  if (path.length === 0) {
    document.title = "Chippi soft";
  } else document.title = path;
  return children;
}

export default Title;
