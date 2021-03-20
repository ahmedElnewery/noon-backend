const mongoose = require("mongoose");

const subcategorySchema = mongoose.Schema(
    {cateid: {
        type: Number,
        required: true
      },
        name: {
            type: String,
            required: true
          }
          ,
          options:{
              type:Array,
              required:true
          }
    }
)
const SubCategory = mongoose.model("SubCategory", subcategorySchema);
module.exports = SubCategory;