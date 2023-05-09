import React, { useState } from 'react';
import { storage } from './firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import './product.style.scss';

function ImageUploader({ onUpload }) {
	const [image, setImage] = useState([]);
	const handleChange = (event) => {
		setImage([...image, ...event.target.files]);
	};
	const uploadImage = (e) => {
		e.preventDefault();
		if (image.length === 0) return;
		const uploadPromises = image.map((file) => {
			const imageName = `${file.name}_${v4()}`;
			const imageRef = ref(storage, `${imageName}/${imageName}`);
			return uploadBytes(imageRef, file).then(() => {
				alert('Image Uploaded');
				return getDownloadURL(imageRef);
			});
		});
		Promise.all(uploadPromises).then((urls) => {
			onUpload(urls);
		});
	};
	return (
		<div className="files">
			<input
				type="file"
				name="picture"
				onChange={handleChange}
				multiple
			/>
			<button onClick={uploadImage} className="upload">
				Upload
			</button>
		</div>
	);
}

export default ImageUploader;
