import { gql } from '@apollo/client/core'

export const GET_CHANGELONGS = gql`
    query GetChangelogs {
        changelogs {
            id
            type
            title
            description
            image
            badge
            date
            to
        }
    }
`

export const GET_BLOG_POSTS = gql`
    query GetBlogPosts {
        blogs {
            id
            author {
                id
                name
                email
                avatar
            }
            status
            is_featured
            category
            title
            slug
            summary
            content
            image
            image_alt
            published_at
        }
    }
`

export const GET_BLOG_POST_BY_SLUG = gql`
    query GetBlogPostBySlug($slug: String!) {
        blogBySlug(slug: $slug) {
            id
            author {
                id
                name
                email
                avatar
            }
            status
            is_featured
            category
            title
            slug
            summary
            content
            image
            image_alt
            published_at
        }
    }
`

export const GET_BLOG_CATEGORIES = gql`
    query GetBlogCategories {
        blogCategories
    }
`

export const GET_BLOGS_BY_CATEGORY = gql`
    query GetBlogsByCategory($category: String!) {
        blogsByCategory(category: $category) {
            id
            author {
                id
                name
                email
                avatar
            }
            status
            is_featured
            category
            title
            slug
            summary
            content
            image
            image_alt
            published_at
        }
    }
`