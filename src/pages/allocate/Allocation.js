import { useHistory, useLocation } from "react-router-dom";
import Breadcrumb from "../../components/shared/Breadcrumb";
import AllocateLayout from "../../components/allocate/AllocateLayout";

const Allocation = () => {
  return (
    <AllocateLayout>
      <div className="allocation">
        <h1 className="allocation__title">Allocation Status</h1>
        <div className="allocation__breadcrumb">
          <Breadcrumb history={useHistory()} location={useLocation()} />
        </div>
      </div>
    </AllocateLayout>
  );
};

export default Allocation;