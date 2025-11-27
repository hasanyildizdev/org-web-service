export interface OurganizeContactInterface {
    name: string;
    domain: string;
    url: string;
    phone: string;
    phone_: string;
    email: string;
    address: string;
    slogan: string;
    social_media_links: {
        name: string;
        url: string;
        icon: string;
    }[];
};

export interface Changelog {
    title: string;
    description: string;
    image: string;
    badge: string;
    date: string;
    to: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
}

export interface BlogPost {
    id: string;
    author?: User;
    status: string;
    is_featured: boolean;
    category: string;
    title: string;
    slug: string;
    summary: string;
    content: string;
    image: string;
    image_alt: string;
    published_at: string;
}