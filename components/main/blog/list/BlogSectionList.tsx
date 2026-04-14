import { OptionalField } from "@/utils/ts-util-types";
import BlogSectionListItem, {
  type BlogSectionListItemProps,
  type ImageData,
} from "./BlogSectionListItem";
import { cn } from "@/utils/shadcn";

type ImageDataSizeRelatedFields = "width" | "height" | "aspectRatioClassName";
type ImageDataWithOmittedSizeRelatedFields = OptionalField<
  ImageData,
  ImageDataSizeRelatedFields
>;

type BlogSectionListItemPropsWithOmittedFullImageData = Omit<
  BlogSectionListItemProps,
  "image"
> & { image: ImageDataWithOmittedSizeRelatedFields };

const itemsData: BlogSectionListItemPropsWithOmittedFullImageData[] = [
  {
    date: "2024-12-15",
    heading:
      "Highlight: benefits of routine dental check-ups in children under 12 years old",
    href: "#",
    image: {
      src: "/brave-little-boy-visiting-dentist.png",
      filtersClassName:
        "contrast-[1.05] brightness-[1.12] saturate-[1] tablet:brightness-[1.08]",
      imagePositionClassName: "object-[-5%_50%]",
    },
  },
  {
    date: "2024-12-15",
    heading:
      "Highlight: benefits of routine dental check-ups in children under 12 years old",
    href: "#",
    image: {
      src: "/dentist-doctor-with-digital-tablet.png",
      filtersClassName:
        "brightness-[0.75] saturate-[1.2] tablet:brightness-[1.1] tablet:saturate-[1]",
      imagePositionClassName: "object-[60%_50%]",
    },
    gradientOpacityClassName:
      "opacity-36 tablet:opacity-34 blog-section-row:opacity-36",
  },
  {
    date: "2024-12-15",
    heading:
      "Highlight: benefits of routine dental check-ups in children under 12 years old",
    href: "#",
    image: {
      src: "/little-boy-at-the-dentist.png",
      filtersClassName:
        "brightness-[0.75] saturate-[1.2] tablet:brightness-[0.95]",
      imagePositionClassName: "object-[76.5%_50%]",
    },
    gradientOpacityClassName:
      "opacity-36 tablet:opacity-42 blog-section-row:opacity-40",
  },
];

type ImageSizeRelatedData = Pick<ImageData, ImageDataSizeRelatedFields>;

const bigItemAspectRatioClassName: ImageSizeRelatedData = {
  width: 416,
  height: 409,
  aspectRatioClassName:
    "aspect-416/409 tablet:aspect-625/571 blog-section-row:aspect-592/571",
};

const smallItemAspectRatioClassName: ImageSizeRelatedData = {
  width: 416,
  height: 235,
  aspectRatioClassName:
    "aspect-416/235 tablet:aspect-625/278 blog-section-row:aspect-593/278",
};

const indexToGridAreaLetter: Record<string, string> = {
  "0": "a",
  "1": "b",
  "2": "c",
};

const BlogSectionList = () => {
  return (
    <ul
      className="grid w-full gap-7.5 max-blog-section-row:grid-cols-1 max-blog-section-row:grid-rows-[2.05fr_1fr_1fr] max-blog-section-row:[grid-template-areas:none]! max-tablet:grid-rows-[1.74fr_1fr_1fr] max-mobile:grid-rows-[auto] blog-section-row:gap-(--desktop-gap)"
      style={{
        gridTemplateAreas: `
    "a b"
    "a c"
    `,
      }}
    >
      {itemsData.map((item, i) => {
        const isBigItem = !i;
        const imageSizeRelatedDataImageSizeRelatedData = isBigItem
          ? bigItemAspectRatioClassName
          : smallItemAspectRatioClassName;

        return (
          <li
            key={`${item.heading}-${i}`}
            className={cn(
              "blog-section-row:[grid-area:var(--grid-area)]",
              imageSizeRelatedDataImageSizeRelatedData.aspectRatioClassName,
            )}
            style={
              {
                "--grid-area": indexToGridAreaLetter[i.toString()],
              } as React.CSSProperties
            }
          >
            <BlogSectionListItem
              {...item}
              image={{
                ...item.image,
                ...imageSizeRelatedDataImageSizeRelatedData,
              }}
              isBigItem={isBigItem}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default BlogSectionList;
