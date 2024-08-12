import { FC } from "react";

import "./style.css";

type Link = {
  name: string;
  path: string;
};
type LinkProps = {
  links: Array<Link>;
};

export const Links: FC<LinkProps> = ({ links }) => {
  return (
    <div className="links">
      {links.map((link) => (
        <a className="link" id="text" href={link.path}>
          # {link.name}
        </a>
      ))}
    </div>
  );
};
