import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
export default function () {
	const [selectedImage, setSelectedImage] = useState(null);

	let openImagePickerAsync = async () => {
		let pickerResult = await ImagePicker.launchImageLibraryAsync();
		if (pickerResult.cancelled === true) {
			return;
		}
		setSelectedImage({ uri: pickerResult.uri });
	};
	let openImageCameraAsync = async () => {
		await ImagePicker.requestCameraPermissionsAsync();
		let pickerResult = await ImagePicker.launchCameraAsync();
		if (pickerResult.cancelled === true) {
			return;
		}
		setSelectedImage({ uri: pickerResult.uri });
	};
	return { openImagePickerAsync, selectedImage, openImageCameraAsync };
}
