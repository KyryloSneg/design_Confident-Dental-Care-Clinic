import Link from "next/link";
import FooterSearchInputGroup from "./FooterSearchInputGroup";

const FooterSearch = () => {
  return (
    <div className="flex flex-col gap-7.5">
      <Link href="#" className="w-max">
        <img
          src="/logo.svg"
          alt="Confident"
          draggable="false"
          className="h-9.25 w-35.25 desktop:h-11 desktop:w-40.75"
        />
      </Link>
      <FooterSearchInputGroup />
    </div>
  );
};

export default FooterSearch;
