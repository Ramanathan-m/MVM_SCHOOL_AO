import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Dashboard, Default } from "../../../utils/Constant";
// import RevenueGrowth from "../ProjectManagement/RevenueGrowth/RevenueGrowth";
// import BoostUpYourSale from "../ProjectManagement/BoostUpYourSale/BoostUpYourSale";
// import TopProduct from "../ProjectManagement/TopProduct/TopProduct";
// import NewUser from "../ProjectManagement/NewUser/NewUser";
// import TeamActivity from "../ProjectManagement/TeamActivity/TeamActivity";
// import UserVisitsByDay from "../ProjectManagement/UserVisitsByDay/UserVisitsByDay";
// import LatestTransaction from "../ProjectManagement/LatestTransaction/LatestTransaction";
// import BestSellingProduct from "../ProjectManagement/BestSellingProduct/BestSellingProduct";
// import TotalProject from "../Ecommerce/TotalProject/TotalProject";
import TotalProjectCard from "../Ecommerce/TotalProject/TotalProjectCard";

const ContainerDefault = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Default} parent={Dashboard} />
      <Container fluid>
        <Row>
          {/* <RevenueGrowth />
          <BoostUpYourSale />
          <TopProduct />
          <NewUser />
          <TeamActivity />
          <UserVisitsByDay />
          <LatestTransaction />
          <BestSellingProduct /> */}
           <TotalProjectCard />
        </Row>
      </Container>
    </>
  );
};

export default ContainerDefault;
