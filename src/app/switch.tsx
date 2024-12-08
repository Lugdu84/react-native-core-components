import { capitalizeFirstLetter } from '@/lib/formatString';
import { Stack, usePathname } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Switch, View, Text } from 'react-native';

export default function SwitchScreen() {
	const nameOfScreen = usePathname();

	const [isEnabled, setIsEnabled] = useState(false);

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: capitalizeFirstLetter(nameOfScreen) }} />
			<Switch
				value={isEnabled}
				onValueChange={setIsEnabled}
				trackColor={{ false: 'yellow', true: 'lightgreen' }}
				thumbColor={isEnabled ? 'green' : 'red'}
				ios_backgroundColor="yellow"
			/>
			<Text>Valeur du switch : {isEnabled ? 'Vrai' : 'Faux'}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		padding: 20,
	},
});
