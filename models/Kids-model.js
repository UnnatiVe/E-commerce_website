import mongoose from "mongoose";

const KidsSchema = new mongoose.Schema(
  {
    ClothName: {
      type: String,
      required: [true, "Item Name Must be specified"],
    },
    images: [String],
    rating: {
      type: Number,
    },
    reviews: [String],
    brand: {
      type: String,
      required: [true, "Brand description is required"],
    },
    description: {
      type: String,
      required: [true, "A Description is required for a Cloth/Item"],
    },
    price: {
      type: Number,
      required: [true, "Price must be mentioned"],
    },
    category: {
      type: String,
      default: "Kid",
    },
    itemsleft: {
      type: Number,
      required: [true, "Number of items left must be mentioned"],
    },
    subCategory: {
      type: [String],
      required: [
        true,
        "Please mention the sub category i.e, is it a t-shirt/pant,etc",
      ],
    },
    tags: [String],
    size: [String],
  },
  { timestamps: true }
);

const KidsModel = new mongoose.model("Kid", KidsSchema);

export { KidsModel };
