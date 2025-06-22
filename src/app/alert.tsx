import { capitalizeFirstLetter } from '@/lib/formatString';
import { Stack, usePathname } from 'expo-router';
import { StyleSheet, View, Alert, Button, Platform } from 'react-native';

export default function AlertScreen() {
	const nameOfScreen = usePathname();

	const createAlert = () => {
		// limité à 3 boutons sur Android
		Alert.alert(
			'Ceci est une alerte',
			"message de l'alerte",
			[
				{
					text: 'Annuler',
					// iOS uniquement
					style: 'destructive',
					onPress: () => console.log("Annulation de l'alerte"),
				},
				{
					text: 'OK',
					onPress: () => console.log('Alerte confirmée'),
				},
				{
					text: 'Autre action',
					onPress: () => console.log('Autre action effectuée'),
				},
				// Ce quatrième bouton n'est pas visible sur Android
				{
					text: 'Bouton non visible sur Android',

					onPress: () => console.log('Un autre bouton'),
				},
			],
			{
				// android uniquement
				cancelable: true,
				onDismiss: () => console.log('Alerte fermée'),
				// iOS uniquement
				// userInterfaceStyle: 'dark',
			}
		);
	};

	const createPrompt = () => {
		Alert.prompt(
			'Entrez votre nom',
			'Veuillez entrer votre nom complet',
			// Fonction callback
			(text) => {
				console.log(`Nom entré : ${text}`);
			}
			// Tableau de boutons pour le prompt
			// [
			// 	{
			// 		text: 'Annuler',
			// 		style: 'cancel',
			// 	},
			// 	{
			// 		text: 'Confirmer',
			// 		onPress: (text) => console.log(`Nom entré : ${text}`),
			// 	},
			// ],
			// 'secure-text' // 'plain-text' | 'secure-text' | 'login-password'
		);
	};

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: capitalizeFirstLetter(nameOfScreen) }} />
			<Button
				title="Afficher une alerte"
				onPress={createAlert}
			/>
			{Platform.OS === 'ios' && (
				<Button
					title="Afficher un prompt"
					onPress={createPrompt}
				/>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		gap: 10,
	},
});
