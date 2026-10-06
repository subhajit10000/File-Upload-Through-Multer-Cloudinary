const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadDir = path.join(__dirname, "../upload");

// Create upload folder if it doesn't exist
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },

    filename: (req, file, cb) => {
        const extension = path.extname(file.originalname);

        const filename = `${Date.now()}-${Math.round(
            Math.random() * 1e9
        )}${extension}`;

        cb(null, filename);
    },
});

const upload = multer({
    storage: storage,

    limits: {
        fileSize: 10 * 1024 * 1024,
    },
});

module.exports = upload;