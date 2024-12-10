import { capitalizeFirstLetter } from '@/lib/formatString';
import { Stack, usePathname } from 'expo-router';
import {
	StyleSheet,
	TextInput,
	View,
	Text,
	Pressable,
	KeyboardAvoidingView,
	Platform,
	Keyboard,
	TouchableWithoutFeedback,
} from 'react-native';

export default function ViewScreen() {
	const nameOfScreen = usePathname();

	return (
		<KeyboardAvoidingView
			style={styles.container}
			keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
			<Stack.Screen options={{ title: capitalizeFirstLetter(nameOfScreen) }} />
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.inner}>
					<Text style={styles.title}>Informations</Text>
					<TextInput style={styles.textInput} />
					<TextInput style={styles.textInput} />
					<TextInput style={styles.textInput} />
					<TextInput style={styles.textInput} />
					<TextInput style={styles.textInput} />
					<View style={styles.buttons}>
						<Pressable style={styles.button}>
							<Text>Validez</Text>
						</Pressable>
						<Pressable style={styles.button}>
							<Text>Annulez</Text>
						</Pressable>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
	},
	inner: {
		flex: 1,
		padding: 10,
		gap: 10,
		justifyContent: 'center',
	},
	textInput: {
		borderWidth: 1,
		borderColor: 'gray',
		borderRadius: 10,
		padding: 10,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	buttons: {
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 10,
		width: '100%',
	},
	button: {
		padding: 10,
		borderRadius: 10,
		backgroundColor: 'lightblue',
		flex: 1,
		alignItems: 'center',
	},
});
