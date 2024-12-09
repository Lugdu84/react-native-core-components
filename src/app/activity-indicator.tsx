import { capitalizeFirstLetter } from '@/lib/formatString';
import { Stack, usePathname } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, View, ActivityIndicator } from 'react-native';

export default function ActivityIndicatorScreen() {
	const nameOfScreen = usePathname();

	const [isLoading, setIsLoading] = useState(false);

	const toggleLoading = () => {
		setIsLoading(!isLoading);
	};

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: capitalizeFirstLetter(nameOfScreen) }} />
			<ActivityIndicator
				animating={isLoading}
				// hidesWhenStopped={false}
				color="#FF5733"
				size="large"
			/>

			<Button
				title={isLoading ? 'Stop loading ...' : 'Start loading ...'}
				onPress={toggleLoading}
			/>
		</View>
	);
}

// 1. animating
// 2. hideWhenStopped
// 3. color
// 4. size

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		padding: 20,
		gap: 20,
	},
});
