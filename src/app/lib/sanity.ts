import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
export const client = createClient({
  projectId: "4wehslr",
  dataset: "production",
  apiVersion: "2023-04-12",
  useCdn: true,
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
