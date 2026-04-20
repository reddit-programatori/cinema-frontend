import Link from "next/link";

type Props = {
  className?: string;
};

export const HeaderActions = ({ className }: Props) => {
  return (
    <>
      <input type="search" placeholder="Pretraga" />
      {/* // TODO: SignIn component */}
      <div className={className}>
        <Link href="/sign-in">Prijavi se</Link>
      </div>
    </>
  );
};
