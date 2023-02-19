/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const commentOnEvent = /* GraphQL */ `
  mutation CommentOnEvent(
    $content: String!
    $createdAt: String!
    $eventId: ID!
  ) {
    commentOnEvent(
      content: $content
      createdAt: $createdAt
      eventId: $eventId
    ) {
      commentId
      content
      createdAt
      eventId
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $description: String!
    $name: String!
    $when: String!
    $where: String!
  ) {
    createEvent(
      description: $description
      name: $name
      when: $when
      where: $where
    ) {
      comments {
        nextToken
      }
      description
      id
      name
      when
      where
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent($id: ID!) {
    deleteEvent(id: $id) {
      comments {
        nextToken
      }
      description
      id
      name
      when
      where
    }
  }
`;
