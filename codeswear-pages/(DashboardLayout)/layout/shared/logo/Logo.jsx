import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";

const LinkStyled = styled(Link)(() => ({
  height: "40px",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <LinkStyled href="/admin" className="mx-auto text-lg font-bold">
      CODESWEAR ADMIN
    </LinkStyled>
  );
};

export default Logo;
