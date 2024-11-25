export const capitalizeFirstLetter = (string: string) => {
	return string
		.slice(1)
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join('');
};
