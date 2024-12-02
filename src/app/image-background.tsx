import { capitalizeFirstLetter } from '@/lib/formatString';
import { Stack, usePathname } from 'expo-router';
import {
	StyleSheet,
	View,
	ImageBackground,
	Text,
	StatusBar,
} from 'react-native';

const logoReact = 'https://legacy.reactjs.org/logo-og.png';

export default function ImageBackgroundScreen() {
	const nameOfScreen = usePathname();

	return (
		<View style={styles.container}>
			<StatusBar hidden />
			<Stack.Screen
				options={{
					title: capitalizeFirstLetter(nameOfScreen),
					headerShown: false,
				}}
			/>
			<ImageBackground
				source={{ uri: logoReact }}
				style={styles.background}>
				<Text style={styles.text}>
					React Native c'est mieux que Flutter. N'est-ce pas ?
				</Text>
			</ImageBackground>
		</View>
	);
}

// 1 - Même api que Image
// 2 - Image de fond (car, a un children)
// 3 - Cacher le header d'Expo Router
// 4 - Cacher la statusBar

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
	},
	background: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		opacity: 0.7,
	},
	text: {
		color: 'white',
		fontSize: 36,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});
