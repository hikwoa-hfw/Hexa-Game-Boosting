import { createClient, FieldsType } from "contentful";
interface responseEntry {
  sys: { id: string };
  fields: FieldsType;
}

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONTMENT_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

export const getEntries = async () => {
  try {
    const response = await client.getEntries({
      content_type: "services",
    });

    const services = response.items.map((service: responseEntry) => {
      return {
        entryId: service.sys.id,
        title: service.fields.title,
        thumbnail: "https:" + service.fields.thumbnail.fields.file.url,
      };
    });

    return services
  } catch (error) {
    console.log(error);
  }
};

