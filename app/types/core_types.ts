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