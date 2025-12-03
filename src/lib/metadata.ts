import type { Metadata } from "next";
import { deepmerge } from "@fastify/deepmerge";

import {
  MY_NAME,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_TYPE,
  OG_IMAGE_WIDTH,
} from "./constants";

type Options = {
  root?: boolean;
  pathname?: string;
  title: string;
  description: string;
  locale?: string; // optional now
} & Partial<Metadata>;

export const createMetadata = (options: Options): Metadata => {
  const {
    root = false,
    pathname = "/",
    title,
    description,
    locale = "en",
    ...rest
  } = options;

  const resolvedTitle = root ? title : `${title} | ${MY_NAME}`;
  const currentUrl = `/${pathname.replace(/^\//, "")}`;
  const ogImageUrl = `/og/image.webp`;

  return deepmerge()(
    {
      title: resolvedTitle,
      description,
      creator: MY_NAME,

      openGraph: {
        title: resolvedTitle,
        description,
        url: currentUrl,
        siteName: MY_NAME,
        type: "website",
        locale,
        images: [
          {
            url: ogImageUrl,
            width: OG_IMAGE_WIDTH,
            height: OG_IMAGE_HEIGHT,
            type: OG_IMAGE_TYPE,
          },
        ],
      },

      twitter: {
        card: "summary_large_image",
      },

      icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
      },
    },
    rest,
  );
};
