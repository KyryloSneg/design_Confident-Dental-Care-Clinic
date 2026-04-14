import Link from "next/link";

interface Item {
  text: string;
  href: string;
}

export interface FooterNavigationColumnProps {
  heading: string;
  items: Item[];
}

const FooterNavigationColumn = ({
  heading,
  items,
}: FooterNavigationColumnProps) => {
  return (
    <section className="flex flex-col gap-5">
      <h2 className="font-sans text-b2-medium-normal text-text-primary capitalize">
        {heading}
      </h2>
      <ul className="flex flex-col gap-3 desktop:gap-4">
        {items.map(item => (
          <li key={`${item.href}-${item.text}`}>
            <Link
              href={item.href}
              className="block w-max font-sans text-[0.8125rem] text-text-primary transition-colors hover:text-primary-500 max-desktop:leading-[1.308] max-desktop:font-light max-desktop:tracking-[0.02em] desktop:text-b2-light"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FooterNavigationColumn;
