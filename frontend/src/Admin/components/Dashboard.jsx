import React from "react";
import Achivement from "./Achivement";
import MonthlyOverview from "./MonthlyOverview";
import OrdersTable from "./OrdersTable";
import ProductsTable from "./ProductsTable";
import ProductsTableView from "../view/ProductTableView";
import OrdersTableView from "../view/OrderTableView";

const AdminDashboard = () => {
  return (
    <div className="p-10">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full shadow-lg shadow-gray-600 md:w-1/3">
          <Achivement />
        </div>
       <div className="w-full shadow-lg shadow-gray-600 md:w-2/3">
  <MonthlyOverview />
</div>
      </div>

  <div className="mt-6 flex flex-col md:flex-row items-start gap-6">
  <div className="w-full md:w-1/2 min-w-0 shadow-lg shadow-gray-600 overflow-hidden">
    <OrdersTableView />
  </div>

  <div className="w-full md:w-1/2 min-w-0 shadow-lg shadow-gray-600 overflow-hidden">
    <ProductsTableView />
  </div>
</div>
</div>
  );
};

export default AdminDashboard;