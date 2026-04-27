import styles from "./Line.module.css";

type LineProps = {
  mt?: boolean; // margin top
  mb?: boolean; // margin bottom
};

export default function Line({ mt, mb }: LineProps) {
  const className = styles.main + (mt ? " " + styles.mt : "") + (mb ? " " + styles.mb : "");

  return <hr className={className} />;
}
