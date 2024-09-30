import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import React from "react";
import NewBoardModal from "../dashboard/NewBoardModal";
import JoinWithCode from "../dashboard/JoinWithCode";

const Navbar = () => {
  return (
    //Navbar container
    <nav className="py-4 border-b shadow-lg w-full top-0 absolute bg-white">
      <Container variant={"breakpointPadded"}>
        {/* Flex Container */}
        <div className="flex align-center justify-between">
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
            Explain.io
          </h1>
          <div className="space-x-2 flex">
            <NewBoardModal />
            <JoinWithCode />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
