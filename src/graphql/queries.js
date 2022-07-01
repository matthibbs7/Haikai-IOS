/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWardrobe = /* GraphQL */ `
  query GetWardrobe($id: ID!) {
    getWardrobe(id: $id) {
      id
      name
      image
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listWardrobes = /* GraphQL */ `
  query ListWardrobes(
    $filter: ModelWardrobeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWardrobes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
