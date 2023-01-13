import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url"

export const client = sanityClient({
    // Find your project ID and dataset in `sanity.json` in your studio project
    // useCdn == true gives fast, cheap responses using a globally distributed cache.
    // Set this to false if your application require the freshest possible
    // data always (potentially slightly slower and a bit more expensive).
    projectId: "eyrzl2vi",
    dataset: "production",
    useCdn: true,
    // token: process.env.SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);