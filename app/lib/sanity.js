import { createClient } from "next-sanity";

export const client = createClient({
    apiVersion: '2023-05-03',
    dataset: 'production',
    projectId: 'ro9s85qe',
    useCdn: false,
});