import { capitalizeFirstLetter } from '@/lib/formatString';
import { Stack, usePathname } from 'expo-router';
import { StyleSheet, View, Button } from 'react-native';

export default function ButtonScreen() {
	const nameOfScreen = usePathname();

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: capitalizeFirstLetter(nameOfScreen) }} />
			<View style={styles.buttons}>
				<View style={styles.buttonContainer}>
					<Button
						title="Validez"
						color={'green'}
						disabled={false}
						accessibilityLabel="Boutton pour validez"
						onPress={() => alert('Validez')}
					/>
				</View>
				<View style={styles.buttonContainer}>
					<Button
						title="Annulez"
						color={'red'}
						disabled={false}
						accessibilityLabel="Boutton pour annulez"
						onPress={() => alert('annulez')}
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		padding: 10,
	},
	buttons: {
		flexDirection: 'row',
		gap: 10,
		// backgroundColor: 'blue',
	},
	buttonContainer: {
		flex: 1,
	},
});
