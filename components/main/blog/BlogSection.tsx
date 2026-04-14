import BlogSectionHeader from "./header/BlogSectionHeader";
import BlogSectionList from "./list/BlogSectionList";

const BlogSection = () => {
  return (
    <section
      className="mx-auto mb-30 flex w-full max-w-[calc(var(--blog-max-w)+var(--spacing-x-grid)*2)] flex-col gap-17.5 px-x-grid blog-section-row:max-w-[calc(var(--blog-max-w)*2+var(--spacing-x-grid)*2+var(--desktop-gap))] blog-section-row:gap-20"
      style={{ "--desktop-gap": "0.9375rem" } as React.CSSProperties}
    >
      <BlogSectionHeader />
      <BlogSectionList />
    </section>
  );
};

export default BlogSection;
