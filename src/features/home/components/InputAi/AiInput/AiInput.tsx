"use client";
import { useState } from "react";
import styles from "./AiInput.module.css";
import IconCircleArrow from "@/components/ui/icons/circle-arrow.svg";

export default function AiInput() {
  const [value, setValue] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Send to AI:", value);
  }

  return (
    <form className={styles.main} onSubmit={handleSubmit}>
      <input
        className={styles.inputOne}
        placeholder="Kako se osećaš večeras?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button className={styles.sendBtn} type="submit">
        <IconCircleArrow />
      </button>
    </form>
  );
}
