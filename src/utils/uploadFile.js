const cloudinary = require("../config/cloudinary.js");

const fileUpload = async (folder, filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder,
      resource_type: "auto",
    });
    return result;
  } catch (error) {
    console.error("Error uploading file to Cloudinary:", error);
    throw error;
  }
};
module.exports = fileUpload;
