import { useHistory, useLocation } from "react-router-dom";
import Breadcrumb from "../../components/shared/Breadcrumb";
import AllocateLayout from "../../components/allocate/AllocateLayout";


const Squads = () => {
  return (
    <AllocateLayout>
      <div className="squads">
        <h1 className="squads__title">Squads</h1>
        <span className="squads__caption">
          Review showcases and squad details that interest you or match your
          skill.
        </span>
        <div className="squads__breadcrumb">
          <Breadcrumb history={useHistory()} location={useLocation()} />
        </div>
      </div>
    </AllocateLayout>
  );
};

export default Squads;
