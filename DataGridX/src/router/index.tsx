import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardRouter from "../modules/dashboard/routes/DashboardRouter";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<DashboardRouter />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
