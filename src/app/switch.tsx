import { capitalizeFirstLetter } from '@/lib/formatString';
import { Stack, usePathname } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View, Switch, Text } from 'react-native';

export default function SwitchScreen() {
	const nameOfScreen = usePathname();

	const [isEnabled, setIsEnabled] = useState(false);

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: capitalizeFirstLetter(nameOfScreen) }} />
			<Switch
				value={isEnabled}
				onValueChange={setIsEnabled}
				trackColor={{ false: 'red', true: 'blue' }}
				ios_backgroundColor="red"
				thumbColor={isEnabled ? 'green' : 'lightgrey'}
				onChange={(event) => console.log(event.nativeEvent.value)}
			/>

			<Text>Valeur du switch : {isEnabled ? 'Vrai' : 'Faux'}</Text>
		</View>
	);
}

// 1. composant contrôlé => value et onValueChange
// 2. utiliser le hook useState pour gérer l'état du switch
// 3. trackColor : couleur de la barre de fond
// 4. ios_backgroundColor : couleur de fond sur iOS
// 5. thumbColor : couleur du bouton

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		padding: 20,
	},
});
