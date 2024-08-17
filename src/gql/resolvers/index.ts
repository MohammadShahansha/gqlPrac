import { db } from "../../db.js";

export const resolvers = {
  Query: {
    products: () => db.products,
    product: (parent: any, arg: { productId: string }, context: any) => {
      console.log(arg);
      const result = db.products.find(
        (product) => product.id === arg.productId
      );
      console.log(result);
      return result;
    },

    categories: () => db.categories,
    category: (parent: any, arg: { categoryId: string }, context: any) => {
      return db.categories.find((category) => category.id === arg.categoryId);
    },
  },
  Products: {
    category: (parent, args, context) => {
      const result = db.categories.find(
        (category) => category.id === parent.categoryId
      );
      return result;
    },
  },
  Category: {
    product: (parent, args, context) => {
      return db.products.filter((product) => product.categoryId === parent.id);
    },
  },
};
