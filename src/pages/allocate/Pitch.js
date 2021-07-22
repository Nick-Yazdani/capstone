import { useHistory, useLocation } from "react-router-dom";
import Breadcrumb from "../../components/shared/Breadcrumb";
import AllocateLayout from "../../components/allocate/AllocateLayout";


const Pitch = () => {
  return (
    <AllocateLayout>
      <div className="pitch">
        <h1 className="pitch__title">Pitch</h1>
        <span className="pitch__caption">
          Create a pitch to appeal yourself to squads.
        </span>
        <div className="pitch__breadcrumb">
          <Breadcrumb history={useHistory()} location={useLocation()} />
        </div>
      </div>
    </AllocateLayout>
  );
};

export default Pitch;
