"use client";
import React from "react";
import { toast } from "sonner";

const Toast = ({
  message,
  type,
}: {
  message: string;
  type?: "error" | "success" | "warning";
}) => {
  return (
    <>
      {type === "error" && toast.error(message)}
      {type === "success" && toast.success(message)}
      {type === "warning" && toast.warning(message)}
    </>
  );
};

export default Toast;
