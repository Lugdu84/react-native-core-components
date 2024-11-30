import { capitalizeFirstLetter } from '@/lib/formatString';
import { Stack, usePathname } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function ViewScreen() {
	const nameOfScreen = usePathname();

	return (
		<View style={styles.container}>
			<Stack.Screen
				options={{
					title: capitalizeFirstLetter(nameOfScreen),
				}}
			/>
			<View style={[styles.smallBox, { backgroundColor: 'violet' }]} />
			<View style={[styles.bigBox, { backgroundColor: 'blue' }]} />
			<View style={[styles.smallBox, { backgroundColor: 'green' }]} />
			<View style={[styles.smallBox, { backgroundColor: 'purple' }]} />
			<View style={[styles.bigBox, { backgroundColor: 'orange', flex: 0 }]} />
		</View>
	);
}

// 1. flex: 1 - 2, etc
// 2. flexDirection
// 3. justifyContent
// 4. alignItems
// 5. gap
// 6. margin
// 7. padding

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// flexDirection: 'row',
		backgroundColor: 'red',
		justifyContent: 'space-around',
		alignItems: 'center',
		gap: 10,
		// margin: 10,
		padding: 10,
	},
	smallBox: {
		// flex: 1,
		height: 50,
		width: 50,
		borderRadius: 10,
	},

	bigBox: {
		// flex: 2,
		height: 100,
		width: 100,
		borderRadius: 20,
	},
});
