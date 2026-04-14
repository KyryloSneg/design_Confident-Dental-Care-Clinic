"use client";

import { Button } from "@/components/ui/shadcn/button";
import Link from "next/link";

const BlogSectionHeaderButton = () => {
  return (
    <Button
      // hardcode "lg" variant with "blog-section-row:" prefix because
      // i don't want to show two separate buttons of different sizes conditionally
      className="w-max blog-section-row:mb-3 blog-section-row:h-12 blog-section-row:gap-4 blog-section-row:px-8 blog-section-row:py-2.75 blog-section-row:text-s3-semibold blog-section-row:[&>[data-slot='right-chevron']]:h-4.25 blog-section-row:[&>[data-slot='right-chevron']]:w-4"
      isWithRightChevron={true}
      nativeButton={false}
      render={props => <Link {...props} href="#" />}
    >
      Find more
    </Button>
  );
};

export default BlogSectionHeaderButton;
