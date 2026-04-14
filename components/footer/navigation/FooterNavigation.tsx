import FooterNavigationColumn, {
  type FooterNavigationColumnProps,
} from "./FooterNavigationColumn";

const itemsData: FooterNavigationColumnProps[] = [
  {
    heading: "About",
    items: [
      {
        text: "Home",
        href: "#",
      },
      {
        text: "About Us",
        href: "#",
      },
      {
        text: "Services",
        href: "#",
      },
      {
        text: "Pages",
        href: "#",
      },
      {
        text: "Contact",
        href: "#",
      },
    ],
  },
  {
    heading: "Pages",
    items: [
      {
        text: "Services",
        href: "#",
      },
      {
        text: "Dentist",
        href: "#",
      },
      {
        text: "Pricing",
        href: "#",
      },
      {
        text: "Contact",
        href: "#",
      },
      {
        text: "404 Page",
        href: "#",
      },
    ],
  },
  {
    heading: "Support",
    items: [
      {
        text: "Contact Us",
        href: "#",
      },
      {
        text: "Booking online",
        href: "#",
      },
      {
        text: "Social Media",
        href: "#",
      },
    ],
  },
  {
    heading: "Contact us",
    items: [
      {
        text: "Social media",
        href: "#",
      },
      {
        text: "WhatsApp",
        href: "#",
      },
      {
        text: "Email",
        href: "#",
      },
    ],
  },
];

const FooterNavigation = () => {
  return (
    <nav className="w-full tablet:mx-auto tablet:max-w-187.5">
      <ul className="grid grid-cols-2 justify-between gap-x-6 gap-y-8 mobile:grid-cols-[auto_auto_auto_auto]">
        {itemsData.map(item => (
          <li key={item.heading}>
            <FooterNavigationColumn {...item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNavigation;
