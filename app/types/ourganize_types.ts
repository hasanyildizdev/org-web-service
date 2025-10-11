export interface ProjectInterface {
    id?: number;
    name: string;
    description: string;
    tech: string[];
    members: number;
    progress: number;
    image?: string;
};

export interface OurganizeContactInterface {
    phone: string;
    phone_: string;
    email: string;
    address: string;
};

export interface ReleaseChange {
    type: 'feature' | 'improvement' | 'fix' | string;
    title: string;
    description: string;
}

export interface Release {
    version: string;
    date: string;
    title: string;
    description: string;
    badge?: string;
    badgeColor?: string;
    changes?: ReleaseChange[];
}

export interface ctaInterface {
    language: boolean
    title: string
    description: string
    button: string
    url: string
}

export interface blogInterface {
    id: string
    title: string
    slug: string
    summary: string
    content: string
    category: string
    image: string
    image_text: string
    is_published: boolean
    published_at: string
  }