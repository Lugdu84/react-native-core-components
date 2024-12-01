import { capitalizeFirstLetter } from '@/lib/formatString';
import { Stack, usePathname } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';

export default function TextScreen() {
	const nameOfScreen = usePathname();

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: capitalizeFirstLetter(nameOfScreen) }} />
			<Text style={styles.text}>Ceci est un texte en ligne</Text>
			<Text style={styles.shadow}>Shadow</Text>
			<Text style={styles.decoration}>Decoration</Text>
			<Text
				onPress={() => alert('on press')}
				style={styles.text}>
				Ceci est un texte important
				<Text style={styles.importantText}> en gras et rouge</Text>
			</Text>
		</View>
	);
}

// 1. Les textes uniquement dans un composant <Text>
// 2. Le text est affiché en ligne et non en flexBox (comme la <View />)
// 3. Le style => text, decoration, shadow
// 4. Text imbriqué avec héritage du style
// 5. les intéractions de l'utilisateur
// 6. accessibilité

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		padding: 10,
	},
	text: {
		fontSize: 16,
		fontStyle: 'italic',
		fontWeight: '600',
		color: 'gray',
	},
	shadow: {
		textShadowOffset: { width: 2, height: 2 },
		textShadowRadius: 2,
		textShadowColor: 'gray',
		opacity: 0.6,
	},
	decoration: {
		textDecorationLine: 'underline',
		textDecorationColor: 'gray',
		textDecorationStyle: 'solid',
	},
	importantText: {
		color: 'red',
		fontWeight: 'bold',
	},
});
