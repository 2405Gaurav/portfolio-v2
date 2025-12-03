import type { Metadata } from "next";
import type { CollectionPage, WithContext } from "schema-dts";

import FilteredPosts from "@/pc/filtered-posts";
import JsonLd from "@/pc/json-ld";
import PageHeader from "@/pc/page-header";
import { MY_NAME } from "@/lib/constants";
import { POSTS } from "@/constants/posts";
import { createMetadata } from "@/lib/metadata";
import { getBaseUrl } from "@/utils/get-base-url";

export const metadata: Metadata = createMetadata({
  pathname: "/blog",
  title: "Blog",
  description: "Read my latest articles and tutorials.",
  locale: "en"
});

export default function Page() {
  const title = "Blog";
  const description = "Read my latest articles and tutorials.";
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}/blog`;

  const posts = POSTS;

  const jsonLd: WithContext<CollectionPage> = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": url,
    name: title,
    description,
    url,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "BlogPosting",
        headline: post.title,
        url: `${url}/${post.slug}`,
        datePublished: post.date,
        dateModified: post.modifiedTime,
        position: index + 1
      }))
    },
    isPartOf: {
      "@type": "WebSite",
      name: MY_NAME,
      url: baseUrl
    },
    inLanguage: "en"
  };

  return (
    <>
      <JsonLd json={jsonLd} />
      <PageHeader title={title} description={description} />
      <FilteredPosts posts={posts} />
    </>
  );
}
