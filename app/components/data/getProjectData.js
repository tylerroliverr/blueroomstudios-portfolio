import { client } from "@/app/lib/sanity";

async function getData() {
    const query =
        `*[_type == "project"] | order(position asc) {
        projectName,
        technologies,
        projectDescription,
        "currentSlug": projectSlug.current,
        development,
        visitSite,
        images[] {
          "imagePath": asset -> url
        }
    }`;

    const data = await client.fetch(query);
    return data;
};

export default async function getProjectData() {
    const data = await getData();

    const transformedData = data.map(project => ({
        projectName: project.projectName,
        technologies: project.technologies,
        projectDescription: project.projectDescription,
        currentSlug: project.currentSlug,
        development: project.development,
        visitSite: project.visitSite,
        images: project.images.map(image => ({
            imagePath: image.imagePath
        }))
    }))

    return transformedData;
}