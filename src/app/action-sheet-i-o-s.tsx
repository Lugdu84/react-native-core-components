import { capitalizeFirstLetter } from '@/lib/formatString';
import { Stack, usePathname } from 'expo-router';
import {
	Button,
	StyleSheet,
	View,
	ActionSheetIOS,
	Platform,
} from 'react-native';

export default function ActionSheretIOSScreen() {
	const nameOfScreen = usePathname();

	const showActions = () => {
		if (Platform.OS === 'ios') {
			ActionSheetIOS.showActionSheetWithOptions(
				{
					options: ['Modifier', 'Supprimer', 'Bouton désactivé', 'Annuler'],
					title: 'Modifier ou supprimer le contact',
					message: 'Voulez-vous modifier ou supprimer le contact ?',
					cancelButtonIndex: 3,
					destructiveButtonIndex: [1],
					tintColor: 'green',
					cancelButtonTintColor: 'violet',
					disabledButtonIndices: [2],
				},
				(buttonIndex) => {
					if (buttonIndex === 0) {
						alert('Modifier le contact');
					} else if (buttonIndex === 1) {
						alert('Supprimer le contact');
					} else if (buttonIndex === 2) {
						alert('Bouton désactivé');
					} else {
						alert('Annuler');
					}
				}
			);
		} else {
			alert('ActionSheetIOS is only available on iOS');
		}
	};

	const showShareActions = () => {
		if (Platform.OS === 'ios') {
			ActionSheetIOS.showShareActionSheetWithOptions(
				{
					url: 'https://reactnativeacademy.fr',
					message: 'React Native Academy',
					subject: 'React Native Academy',
				},
				(error) => {
					alert(`alert : ${error}`);
				},
				(success, method) => {
					if (success) {
						alert(`success : ${success} method : ${method}`);
					} else {
						alert('cancelled');
					}
				}
			);
		} else {
			alert('ActionSheetIOS is only available on iOS');
		}
	};

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: capitalizeFirstLetter(nameOfScreen) }} />
			<Button
				title="Show Actions"
				onPress={showActions}
			/>
			<Button
				title="Share Actions"
				onPress={showShareActions}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		gap: 10,
		padding: 10,
	},
});
