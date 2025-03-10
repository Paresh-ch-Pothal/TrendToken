const express = require("express")
const Product = require("../models/product")
const router = express.Router()

// for posting a product
router.post("/postitem", async (req, res) => {
    try {
        const { name, tag, imgLink, buyLink, description } = req.body
        if (!name || !tag || !imgLink || !buyLink) {
            return res.status(400).json({ success: false, message: "Please Fill up all the required fields" })
        }
        const formattedTags = tag.map((t) => t.trim().toLowerCase());
        const product = await Product.create({
            name, tag: formattedTags,
            imgLink, buyLink, description
        })
        return res.status(200).json({ success: true, product })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: "Some internal issue is present" })
    }
})

// fetching all the unique tag names
router.get("/getTags", async (req, res) => {
    try {
        const tags = await Product.distinct("tag")
        if (!tags) {
            return res.status(400).json({ success: false, message: "No tags found" })
        }
        return res.status(200).json({ success: true, tags })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: "Some internal issue is present" })
    }
})

//for fetching the item according to the tag in the way of searching
// router.get("/getItemFromTag", async (req, res) => {
//     try {
//         const { tag } = req.query
//         if (!tag) {
//             return res.status(400).json({ success: false, message: "please Provide a Tag" })
//         }
//         const products = await Product.find();
//         const tagProduct = products.map((product) => {
//             if (product.tag.includes(tag)) {
//                 return product
//             }
//         })
//         if (!tagProduct) {
//             return res.status(400).json({ success: false, message: "No products found with this tag" })
//         }
//         return res.status(200).json({ success: true, tagProduct })
//     } catch (error) {
//         console.log(error)
//         return res.status(500).json({ success: false, message: "Some internal issue is present" })
//     }
// })


// fetching the item when the user search something in the search bar
router.get("/searchItem", async (req, res) => {
    try {
        const { search } = req.query
        if (!search) {
            return res.status(400).json({ success: false, message: "Please provide a search query" })
        }
        const products = await Product.find();
        const searchedproduct = products.map((product) => {
            if (product.name.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase())) {
                return product
            }
        })
        if (!searchedproduct) {
            return res.status(400).json({ success: false, message: "No products found with this search query" })
        }
        return res.status(200).json({ success: true, searchedproduct })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: "Some internal issue is present" })
    }
})



//inside the tag the user want to search
router.get("/getItemFromTag", async (req, res) => {
    try {
        const { tag, search } = req.query; // Extract tag and search term from query params

        if (!tag) {
            return res.status(400).json({ success: false, message: "Tag is required" });
        }

        // Base query: Products must have at least one matching tag
        let query = { tag: { $in: [tag] } }; // Use `$in` for array matching

        // If a search term is provided, add filtering by name or description
        if (search) {
            query.$and = [
                { tag: { $in: [tag] } }, // Ensure the tag is present
                {
                    $or: [
                        { name: { $regex: search, $options: "i" } }, // Case-insensitive search in name
                        { description: { $regex: search, $options: "i" } } // Case-insensitive search in description
                    ]
                }
            ];
        }

        // Fetch products from database
        const products = await Product.find(query);

        return res.status(200).json({ success: true, products });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});


// fetching the products recent basis
router.get("/fetchProduct",async(req,res)=>{
    try {
        const product=await Product.find().sort({createdAt: -1})
        if(!product){
            return res.status(400).json({success: false,message: "No Product is Present"})
        }
        return res.status(200).json({success: true,product})
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
})


router.get("/getWholeProduct/:id",async(req,res)=>{
    try {
        const id=req.params.id
        const product=await Product.findById(id);
        if(!product){
            return res.status(400).json({success: false,message: "No Product is Present"})
        }
        return res.status(200).json({success: true,product})

    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
})




module.exports = router