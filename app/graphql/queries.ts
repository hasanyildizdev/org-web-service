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