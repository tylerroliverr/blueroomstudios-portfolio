export const projectdata = {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            title: "Position",
            name: "position",
            type: "number"
        },
        {
            title: "Project Slug",
            name: "projectSlug",
            type: "slug"
        },
        {
            title: "Project Name",
            name: "projectName",
            type: "string"
        },
        {
            title: "Project Description",
            name: "projectDescription",
            type: "text"
        },
        {
            title: "Images",
            name: "images",
            type: "array",
            of: [
                {
                    title: "Image",
                    name: "image",
                    type: "image"
                }
            ]
        },
        {
            title: "Development",
            name: "development",
            type: "string"
        },
        {
            title: "Technologies",
            name: "technologies",
            type: "string"
        },
        {
            title: "SiteURL",
            name: "siteURL",
            type: "string"
        }
    ]
}