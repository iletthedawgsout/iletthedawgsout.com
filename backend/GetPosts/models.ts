export interface Post {
    id: string;
    title: string;
    publish_date: string;
    visible: boolean;
    imageAltText: string;
    relativeImagePath: string;
    relativeMarkdownPath: string;
    upvotes: number;
}
