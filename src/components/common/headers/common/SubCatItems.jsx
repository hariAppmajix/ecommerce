import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const SubCatItems = ({ id }) => {
  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`/temp/subcategories.php?cat_id=${id}`)
      .then((res) => setState(res.data));
  }, []);

  return (
    <div>
      {state.map((res, i) => (
        <li key={i}>
          <Link to="#">{res.sub_category_name}</Link>
        </li>
      ))}
    </div>
  );
};

export default SubCatItems;
