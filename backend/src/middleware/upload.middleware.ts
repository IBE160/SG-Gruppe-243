import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (_, file, callback) => {
    callback(null, Date.now() + "-" + file.originalname);
  }
});

export const upload = multer({ storage });
