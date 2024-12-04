import { capitalizeFirstLetter } from '@/lib/formatString';
import { Stack, usePathname } from 'expo-router';
import { useState } from 'react';
import {
	NativeSyntheticEvent,
	StyleSheet,
	TextInputSubmitEditingEventData,
	View,
	Text,
	TextInput,
} from 'react-native';

export default function TextInputScreen() {
	const nameOfScreen = usePathname();
	const [text, setText] = useState('');

	const handleSubmit = (
		event: NativeSyntheticEvent<TextInputSubmitEditingEventData>
	) => {
		alert(`text :  ${event.nativeEvent.text}`);
	};

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: capitalizeFirstLetter(nameOfScreen) }} />
			<TextInput
				style={styles.input}
				placeholder="Tape quelque chose"
				// placeholderTextColor="gray"
				// secureTextEntry={true}
				// keyboardType="numeric"
				value={text}
				// onChangeText={(text) => setText(text)}
				onChangeText={setText}
				autoFocus
			/>
			{text && <Text>La valeur du TextInput contrôlé est {text}</Text>}
			<TextInput
				style={styles.input}
				onSubmitEditing={handleSubmit}
				clearButtonMode="always"
			/>
			<TextInput
				style={styles.input}
				multiline
			/>
			<TextInput
				style={styles.input}
				autoCapitalize="sentences"
			/>
			<TextInput
				style={styles.input}
				autoCorrect={false}
			/>
		</View>
	);
}

// 0. Montrer le clavier avec le simulateur
// 1. style
// 2. placeholder (avec placeholderTextColor)
// 3. secureTextEntry
// 4. keyboardType (différence entre iOS et Android)
// 5. utilisation du TextInput (controlled 'formatage, validation' vs uncontrolled)
// 6. onChangeText et value (avec un state)
// 7. onSubmitEditing (avec un event, attention au type du keyboard)
// 8. autoFocus
// 9. clearButtonMode (only iOS)
// 10. multiline
// 11. autoCapitalize (none, sentences, words, characters)
// 12. autoCorrect

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		gap: 20,
		padding: 10,
	},
	input: {
		height: 40,
		padding: 5,
		borderWidth: 0.5,
		borderRadius: 5,
	},
});
