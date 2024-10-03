"use client";
import { useState } from "react";

export default function page() {
	const [file, setFile] = useState<File | null>(null);
	const [image, setImage] = useState<string | null>(null);
	const [message, setMessage] = useState("");

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			setFile(event.target.files[0]);
			setImage(URL.createObjectURL(event.target.files[0]));
		}
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();

		if (!file) {
			setMessage("Please select a file.");
			return;
		}

		const formData = new FormData();
		formData.append("image", file);

		try {
			const response = await fetch("/api/menu/uploads", {
				method: "POST",
				body: formData,
			});

			// Проверяем на успешность и корректно обрабатываем ответ
			if (!response.ok) {
				const errorData = await response.json();
				setMessage(errorData.message || "Image upload failed");
				return;
			}

			const data = await response.json();
			setMessage(data.message);

			

		} catch (error) {
			setMessage("Something went wrong: " + error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="file" accept="image/*" onChange={handleFileChange} />
			<button type="submit">Upload Image</button>
			{/* {message && <p>{message}</p>} */}
			{image && <img src={image} className="w-[200px] h-[200px]" />}
		</form>
	);
}
