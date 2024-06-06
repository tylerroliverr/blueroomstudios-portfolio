import { client } from "@/app/lib/sanity";

async function getData() {
    const query =
        `*[_type == "project"] | order(position asc) {
        projectName,
        technologies,
        projectDescription,
        "currentSlug": projectSlug.current,
        development,
        images[] {
          "imagePath": asset -> url
        }
    }`;

    const data = await client.fetch(query);
    return data;
};

export default async function getProjectData() {
    const data = await getData();
    return data;
}