// lib/multer.ts
import multer from "multer";
import path from "path";

// Настраиваем, куда сохранять файлы и как именовать
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "public/uploads/");
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
		cb(null, uniqueSuffix + path.extname(file.originalname));
	},
});

// Ограничение на размер файла (например, 5MB)
const limits = {
	fileSize: 5 * 1024 * 1024, // 5MB
};

// Фильтрация файлов (например, только изображения)
function fileFilter(req: any, file: any, cb: any) {
	if (file.mimetype.startsWith("image/")) {
		cb(null, true);
	} else {
		cb(new Error("File is not an image"), false);
	}
}

const upload = multer({ storage, limits, fileFilter });

export default upload;
