import Link from "next/link";

type Props = {
  className?: string;
};

export const HeaderActions = ({ className }: Props) => {
  return (
    <>
      <input type="text" placeholder="Pretraga" />
      <div className={className}>
        <Link href="/sign-in">Prijavi se</Link>
      </div>
    </>
  );
};
