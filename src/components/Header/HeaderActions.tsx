import { Link } from "../Link/Link";

export const HeaderActions = () => {
  return (
    <>
      <input type="search" placeholder="Pretraga" />
      {/* // TODO: SignIn component */}
      <Link variant="ghost" href="/sign-in">
        Prijavi se
      </Link>
    </>
  );
};
