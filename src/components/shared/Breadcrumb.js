import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ location }) => {
  const [breadcrumb, setBreadcrumb] = useState("");

  useEffect(() => {
    setBreadcrumb(locationSplit(location));
  }, [location]);

  const locationSplit = (location) => {
    let pathArray = location.pathname.split("/");
    pathArray[0] = "Home";
    return pathArray;
  };
  return (
    <div className="breadcrumb">
      {breadcrumb
        ? breadcrumb.map((crumb, idx) => {
            if (idx !== breadcrumb.length - 1) {
              return <span className="breadcrumb__item" key={crumb}><Link to={crumb !== "Home" ? `/${crumb}` : "/"}>{crumb}</Link> / </span>;
            }
            else {
                return <span className="breadcrumb__item" key={crumb}><Link to={`/${crumb}`}>{crumb}</Link></span>;
            }
          })
        : null}
    </div>
  );
};

export default Breadcrumb;
