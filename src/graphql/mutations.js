/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWardrobe = /* GraphQL */ `
  mutation CreateWardrobe(
    $input: CreateWardrobeInput!
    $condition: ModelWardrobeConditionInput
  ) {
    createWardrobe(input: $input, condition: $condition) {
      id
      name
      image
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateWardrobe = /* GraphQL */ `
  mutation UpdateWardrobe(
    $input: UpdateWardrobeInput!
    $condition: ModelWardrobeConditionInput
  ) {
    updateWardrobe(input: $input, condition: $condition) {
      id
      name
      image
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteWardrobe = /* GraphQL */ `
  mutation DeleteWardrobe(
    $input: DeleteWardrobeInput!
    $condition: ModelWardrobeConditionInput
  ) {
    deleteWardrobe(input: $input, condition: $condition) {
      id
      name
      image
      createdAt
      updatedAt
      owner
    }
  }
`;
