export const typeDefs = `#graphql
  type Products {
    id: ID!
    name: String
    image: String
    description: String
    price: Float
    quantity: Int
    onStock: Boolean
    category: Category

  }

  type Category {
    id: ID!
    name: String
    product: [Products]
  }
  type Query {
    products: [Products]
    product(productId: ID!): Products

    categories: [Category]
    category(categoryId: ID!): Category
  }
`;
