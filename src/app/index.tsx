import { FlatList, StyleSheet, Text, View } from 'react-native';
import CardLink from '@/components/CardLink';

const routes: ItemRoute[] = [
	{ href: '/view', text: 'View' },
	{ href: '/text', text: 'Text' },
	{ href: '/text-input', text: 'TextInput' },
	{ href: '/button', text: 'Button' },
	{ href: '/pressable', text: 'Pressable' },
	{ href: '/image', text: 'Image' },
	{ href: '/image-background', text: 'ImageBackground' },
	{ href: '/switch', text: 'Switch' },
	{ href: '/activity-indicator', text: 'ActivityIndicator' },
	{ href: '/modal', text: 'Modal' },
	{ href: '/alert', text: 'Alert' },
	{ href: '/action-sheet-i-o-s', text: 'ActionSheetIOS' },
	{ href: '/scroll-view', text: 'ScrollView' },
	{ href: '/keyboard-avoiding-view', text: 'KeyboardAvoidingView' },
];

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Les Core Components</Text>
			<FlatList
				showsVerticalScrollIndicator={false}
				data={routes}
				keyExtractor={(item) => item.href}
				contentContainerStyle={{ gap: 10 }}
				renderItem={({ item }) => <CardLink route={item} />}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: 30,
		paddingHorizontal: 20,
		gap: 10,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});
