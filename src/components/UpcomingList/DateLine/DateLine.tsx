import c from "../Upcoming.module.css";

type DataLineProp = {
  data: string;
  num: number;
};

export default function DateLine({ data, num }: DataLineProp) {
  return (
    <div className={c.dateLine}>
      <p className={c.date}>{data}</p>
      <hr className={c.line} />
      <p className={c.count}>{num} filma</p>
    </div>
  );
}
