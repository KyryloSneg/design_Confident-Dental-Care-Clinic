import BlogSectionHeaderButton from "./BlogSectionHeaderButton";

const BlogSectionHeader = () => {
  return (
    <header className="flex flex-col gap-12.5 tablet:flex-row tablet:items-end tablet:justify-between">
      <div className="flex w-full max-w-76.25 flex-col gap-6.25 tablet:gap-7.5 blog-section-row:max-w-126.5 blog-section-row:py-2">
        <p className="font-jakarta text-s4-bold text-accent-orange-500 uppercase tablet:text-s3-bold">
          Our blog
        </p>
        <h2 className="font-source-serif text-[2.3125rem] leading-[1.245] font-semibold tracking-[0.02em] text-primary-500 capitalize max-blog-section-row:max-w-55 blog-section-row:text-h5-semibold">
          Our latest blog & news
        </h2>
      </div>
      <BlogSectionHeaderButton />
    </header>
  );
};

export default BlogSectionHeader;
