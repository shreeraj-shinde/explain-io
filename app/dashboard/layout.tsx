import { Container } from "@/components/ui/Container";
import React, { PropsWithChildren } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "./Sidebar";
import { auth } from "@/auth";

const DashboardLayout = async ({ children }: PropsWithChildren) => {
  return (
    <section>
      <Navbar />
      <Container variant={"constrainedPadded"}>
        <div className="grid grid-cols-5">
          <Sidebar />
          {children}
        </div>
      </Container>
    </section>
  );
};

export default DashboardLayout;
