const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,

    image: {
        filename: {
            type: String,
            default: "listingimage"
        },
        url: {
            type: String,
            default: "https://www.bing.com/images/search?view=detailV2&ccid=zHEevepe&id=431E2B5DE5B7025939F41E4AB38A97478688E151&thid=OIP.zHEevepet32E8OA0JzWPhQHaLH&mediaurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1561045439-ce8ec5bc42f8%3Fixlib%3Drb-1.2.1%26q%3D80%26fm%3Djpg%26crop%3Dentropy%26cs%3Dtinysrgb%26w%3D1080%26fit%3Dmax%26ixid%3DeyJhcHBfaWQiOjEyMDd9"
        }
    },

    price: Number,
    location: String,
    country: String,
});

module.exports = mongoose.model("Listing", listingSchema);
