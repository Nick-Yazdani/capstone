import { useHistory, useLocation } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Layout from "../components/Layout";

const Pitch = () => {
  return (
    <Layout>
      <div className="pitch">
        <h1 className="pitch__title">Pitch</h1>
        <span className="pitch__caption">
          Create a pitch to appeal yourself to squads.
        </span>
        <div className="pitch__breadcrumb">
          <Breadcrumb history={useHistory()} location={useLocation()} />
        </div>
      </div>
    </Layout>
  );
};

export default Pitch;
