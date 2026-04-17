import Link from "next/link";

export const HeaderActions = () => {
  return (
    <div>
      <input type="text" placeholder="Pretraga" />
      <Link href="/sign-in">Prijavi se</Link>
    </div>
  );
};
