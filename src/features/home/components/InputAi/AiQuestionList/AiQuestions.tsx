import styles from "./AiQuestions.module.css";

type AiQuestionsProp = {
  list: string[];
};

/* also can be reused for other short lists */
export default function AiQuestions({ list }: AiQuestionsProp) {
  return (
    <div className={styles.main}>
      {list.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
}
