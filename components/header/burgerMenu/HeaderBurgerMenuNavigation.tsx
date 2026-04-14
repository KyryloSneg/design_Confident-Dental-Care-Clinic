import CustomScrollbar from "@/components/ui/custom/custom-scrollbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/shadcn/accordion";
import HeaderBurgerMenuAccordionContentLink from "./HeaderBurgerMenuAccordionContentLink";
import HeaderBurgerMenuAccordionLink from "./HeaderBurgerMenuAccordionLink";

interface SubNavigationItem {
  text: string;
  href: string;
}

type NavigationItem =
  | {
      text: string;
      href?: never;
      value: string;
      items: SubNavigationItem[];
    }
  | {
      text: string;
      href: string;
      value?: never;
      items?: never;
    };

const navigationItems: NavigationItem[] = [
  {
    text: "Home",
    value: "Home",
    items: [
      { text: "Homepage 1", href: "#" },
      { text: "Homepage 2", href: "#" },
    ],
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
    value: "Pages",
    items: [
      { text: "Page 1", href: "#" },
      { text: "Page 2", href: "#" },
    ],
  },
  {
    text: "Blog",
    value: "Blog",
    items: [
      { text: "Blog page 1", href: "#" },
      { text: "Blog page 2", href: "#" },
    ],
  },
  {
    text: "Contact",
    href: "#",
  },
];

const HeaderBurgerMenuNavigation = () => {
  return (
    <CustomScrollbar>
      <nav>
        <Accordion multiple>
          {navigationItems.map(item =>
            item.items ? (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger>{item.text}</AccordionTrigger>
                <AccordionContent>
                  <ul className="flex flex-col">
                    {item.items.map(item => (
                      <li key={`${item.text}-${item.href}`}>
                        <HeaderBurgerMenuAccordionContentLink href={item.href}>
                          {item.text}
                        </HeaderBurgerMenuAccordionContentLink>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ) : (
              <HeaderBurgerMenuAccordionLink
                key={`${item.text}-${item.href}`}
                href={item.href}
              >
                {item.text}
              </HeaderBurgerMenuAccordionLink>
            ),
          )}
        </Accordion>
      </nav>
    </CustomScrollbar>
  );
};

export default HeaderBurgerMenuNavigation;
