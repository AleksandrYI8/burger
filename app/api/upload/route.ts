import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Указываем директорию для сохранения файлов
const uploadDir = path.join(process.cwd(), "public/images");

// Убедись, что директория для загрузки существует
async function ensureUploadDirExists() {
	try {
		await fs.access(uploadDir);
	} catch {
		await fs.mkdir(uploadDir, { recursive: true });
	}
}

export async function POST(req: Request) {
	try {
		await ensureUploadDirExists();

		// Получаем данные из запроса
		const formData = await req.formData();
		const file = formData.get("image") as File;

		if (!file) {
			return NextResponse.json(
				{ success: false, message: "No file uploaded" },
				{ status: 400 }
			);
		}

		// Формируем путь для сохранения файла
		const fileName = file.name.split(" ").join("");
		const filePath = path.join(uploadDir, fileName);

		// Сохраняем файл на диск
		const buffer = await file.arrayBuffer();
		await fs.writeFile(filePath, Buffer.from(buffer));

		// Возвращаем относительный путь для доступа к файлу через браузер
		const pathName = `/images/${fileName}`;

		return NextResponse.json({
			success: true,
			message: "Image uploaded successfully",
			data: pathName,
		});
	} catch (error: any) {
		return NextResponse.json(
			{ success: false, message: error.message },
			{ status: 500 }
		);
	}
}
