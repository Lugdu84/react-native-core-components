import { capitalizeFirstLetter } from '@/lib/formatString';
import { Stack, usePathname } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function StylesScreen() {
	const nameOfScreen = usePathname();

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: capitalizeFirstLetter(nameOfScreen) }} />
			<View />
			<View />
			<View />
			<View />
		</View>
	);
}

// 1. objet style (avec et sans satisfies)

// 2. objet avec plusieurs objets styles

// 3. Style inline

// 4. StyleSheet.create

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
	},
});
