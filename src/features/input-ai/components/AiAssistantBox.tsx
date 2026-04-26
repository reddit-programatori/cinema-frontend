import { TextHeader } from "@/components/TextHeader/TextHeader";
import styles from "./AiAssistantBox.module.css";
import AiQuestions from "./AiQuestionList/AiQuestions";
import AiInput from "./AiInput/AiInput";

/* static values for premade questions */
const staticQuestions = [
  "Prepoci film",
  "Popularno ove nedelje",
  "Kratak film",
  "film za celu porodicu",
];

export default function AiAssistantBox() {
  return (
    <div className={styles.main}>
      <TextHeader
        eyebrow="Ai preporuka"
        title="Ne znaš šta da gledaš?"
        subtitle="Isprobaj naš AI model."
        align="center"
      />
      <AiQuestions list={staticQuestions} />
      <AiInput />
    </div>
  );
}
