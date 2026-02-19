import AdminLayout from "./AdminLayout";
import AddProduct from "../store/pages/AddProduct";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="flex justify-center items-start min-h-full w-full">
        <div className="w-full max-w-2xl"> 
          <AddProduct />
        </div>
      </div>
    </AdminLayout>
  );
}