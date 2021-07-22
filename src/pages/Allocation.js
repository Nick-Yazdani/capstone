import { useHistory, useLocation } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Layout from "../components/Layout";

const Allocation = () => {
  return (
    <Layout>
      <div className="allocation">
        <h1 className="allocation__title">Allocation Status</h1>
        <div className="allocation__breadcrumb">
          <Breadcrumb history={useHistory()} location={useLocation()} />
        </div>
      </div>
    </Layout>
  );
};

export default Allocation;