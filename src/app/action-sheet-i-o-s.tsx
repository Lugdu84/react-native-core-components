import ActionSheetWeb from '@/components/ActionSheetWeb';
import ActionSheet from '@/components/ActionSheet';
import { capitalizeFirstLetter } from '@/lib/formatString';
import { Stack, usePathname } from 'expo-router';
import { useState } from 'react';
import {
	Button,
	StyleSheet,
	View,
	ActionSheetIOS,
	Platform,
	ActionSheetIOSOptions,
} from 'react-native';

export default function ActionSheretIOSScreen() {
	const nameOfScreen = usePathname();

	const [actionSheetIsVisible, setActionSheetIsVisible] = useState(false);

	const actions: ActionSheetIOSOptions = {
		options: ['Modifier', 'Supprimer', 'Bouton désactivé', 'Annuler'],
		title: 'Modifier ou supprimer le contact',
		message: 'Voulez-vous modifier ou supprimer le contact ?',
		cancelButtonIndex: 3,
		destructiveButtonIndex: [1],
		tintColor: 'green',
		cancelButtonTintColor: 'violet',
		disabledButtonIndices: [2],
	};

	const handleActionSelection = (buttonIndex?: number) => {
		setActionSheetIsVisible(false);
		if (buttonIndex === 0) {
			console.log('Modifier le contact');
		} else if (buttonIndex === 1) {
			console.log('Supprimer le contact');
		} else if (buttonIndex === 2) {
			console.log('Bouton désactivé');
		} else {
			console.log('Annuler');
		}
	};

	const showActions = () => {
		if (Platform.OS === 'ios') {
			ActionSheetIOS.showActionSheetWithOptions(actions, (buttonIndex) =>
				handleActionSelection(buttonIndex)
			);
		} else {
			// alert('ActionSheetIOS is only available on iOS');
			setActionSheetIsVisible(true);
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
			<ActionSheet
				visible={actionSheetIsVisible}
				onActionSelection={handleActionSelection}
				actions={actions}
			/>
			{/* <ActionSheetWeb
				visible={actionSheetIsVisible}
				onActionSelection={handleActionSelection}
				actions={actions}
			/> */}
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
