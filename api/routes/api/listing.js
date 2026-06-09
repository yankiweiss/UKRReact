const express = require("express");
const router = express.Router();
const listingController = require("../../controllers/listingController");


router.route('/')


.get(listingController.getAllListing);

router.get("/:id", listingController.getListingById);
router.post("/", listingController.createNewListing);
//router.put("/:id", listingController.editListingById);
//router.delete('/:id', listingController.deleteListingById);
//router.post('/reset-takendates',listingController.resetTakenDatesForListings);
 // ✅ This line enables updates

module.exports = router;