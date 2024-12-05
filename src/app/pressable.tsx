import { capitalizeFirstLetter } from '@/lib/formatString';
import { Ionicons } from '@expo/vector-icons';
import { Stack, usePathname } from 'expo-router';
import { StyleSheet, View, Text, Pressable } from 'react-native';

export default function PressableScreen() {
	const nameOfScreen = usePathname();

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: capitalizeFirstLetter(nameOfScreen) }} />
			<Pressable
				style={styles.button}
				onPressIn={() => console.log('on press in')}
				onPressOut={() => console.log('on press out')}
				onPress={() => console.log('on press')}
				// hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
				hitSlop={10}
				// delayLongPress={1000}
				// pressRetentionOffset={{ top: 10, right: 10, bottom: 10, left: 10 }}
				pressRetentionOffset={10}
				onLongPress={() => console.log('on long press')}>
				<Ionicons
					name="checkmark-circle-outline"
					size={32}
					color="white"
				/>
				<Text style={styles.textButton}>Validez</Text>
			</Pressable>
		</View>
	);
}

// 1. children
// 2. onPress => onPressIn, onPressOut, onPress
// 3. onLongPress => onPressIn, (delayLongPress (default 500ms)) onLongPress, onPressOut
// 4. hitSlop
// 5. pressRetentionOffset
// 6. accessiblity (plus d'option que Button)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		padding: 10,
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		paddingVertical: 12,
		borderRadius: 10,
		backgroundColor: 'green',
		gap: 10,
	},
	textButton: {
		fontSize: 16,
		fontWeight: 'bold',
		color: 'white',
	},
});
