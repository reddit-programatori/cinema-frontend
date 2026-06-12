export type LinkProp = {
  label: string;
  href: string;
};

export const NAV_LINKS: LinkProp[] = [
  {
    label: "Početna",
    href: "/",
  },
  {
    label: "Uskoro",
    href: "/soon",
  },
  {
    label: "Rezervacija",
    href: "#",
  },
  {
    label: "Žanrovi",
    href: "/genres",
  },
];
