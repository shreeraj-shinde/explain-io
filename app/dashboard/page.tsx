import { Input } from "@/components/ui/input";
import React from "react";
const DashboardPage = () => {
  return (
    <section className="col-span-4 pt-24 pl-6">
      <h1 className="text-2xl tracking-normal">Search</h1>
      {/* canvas Grid with the filter */}
      <div className="mt-2">
        <Input placeholder="Search for Canvas Here..." />
      </div>
    </section>
  );
};

export default DashboardPage;
