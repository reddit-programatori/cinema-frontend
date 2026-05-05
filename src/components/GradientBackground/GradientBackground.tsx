import React from "react";
import styles from "./GradientBackground.module.css";

export const GradientBackground = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={`${styles.wrapper}${className ? ` ${className}` : ""}`}>{children}</section>
  );
};
