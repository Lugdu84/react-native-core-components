import { capitalizeFirstLetter } from '@/lib/formatString';
import { Stack, usePathname } from 'expo-router';
import { StyleSheet, View, Image } from 'react-native';

const imageFromNetwork =
	'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Chewbacca_%26_Jawa.jpg/440px-Chewbacca_%26_Jawa.jpg';

export default function ImageScreen() {
	const nameOfScreen = usePathname();

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: capitalizeFirstLetter(nameOfScreen) }} />
			<Image
				source={require('assets/dame-robe-rouge.jpg')}
				style={styles.image}
			/>
			<Image
				// style={styles.image}
				source={{
					uri: imageFromNetwork,
					width: 300,
					height: 200,
				}}
				// width={300}
				// height={200}
			/>
		</View>
	);
}

// 1. Introduction
// 2 - Image from local
// 3 - Image from network (3 ways to set width and heigh:t)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		gap: 10,
	},
	image: {
		width: 300,
		height: 200,
	},
});
