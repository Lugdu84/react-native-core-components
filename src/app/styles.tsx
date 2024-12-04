import { capitalizeFirstLetter } from '@/lib/formatString';
import { Stack, usePathname } from 'expo-router';
import { StyleSheet, View, Text, ViewStyle } from 'react-native';

export default function StylesScreen() {
	const nameOfScreen = usePathname();

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: capitalizeFirstLetter(nameOfScreen) }} />
			{/* <View style={monStyle} />
			<View style={mesStyles.view1} />
			<View style={mesStyles.view2} /> */}
			<View style={{ backgroundColor: 'purple', height: 80, width: 50 }} />
			<Text style={{ textAlign: 'center', fontSize: 26 }}>
				Nouvelle propriété pour définir des shadow sur iOS et android
			</Text>
			<View style={[styles.view3, styles.newShadowApi]} />
			<View
				style={[styles.view3, { borderRadius: 80 }, { backgroundColor: 'red' }]}
			/>
			<Text style={{ textAlign: 'center' }}>Style de texte</Text>
		</View>
	);
}

// 0. Props Style pour chaque composant

// 1. objet style (avec et sans satisfies)
const monStyle = {
	backgroundColor: 'red',
	height: 100,
	width: 100,
	borderRadius: 50,
} satisfies ViewStyle;

// 2. objet avec plusieurs objets styles
const mesStyles = {
	view1: {
		backgroundColor: 'green',
		height: 100,
		width: 100,
		borderRadius: 50,
	},
	view2: {
		backgroundColor: 'blue',
		height: 100,
		width: 100,
		borderRadius: 50,
	},
};

// 3. Style inline

// 4. StyleSheet.create

// .5 Tableau de styles (style condidionnel)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		alignItems: 'center',
		paddingTop: 50,
		// justifyContent: 'center',
	},
	view3: {
		backgroundColor: 'orange',
		height: 80,
		width: 200,
		margin: 10,
		borderRadius: 10,
	},
	shadow: {
		// ancienne api
		// pour toutes les plateformes
		shadowColor: 'black',
		// pour ios et le web
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 4,
		// pour android
		elevation: 10,
	},
	newShadowApi: {
		// nouvelle api, à partir de React Native 0.76
		boxShadow: ' 2 2 3 4 rgba(0,0,0,0.3)',
	},
});
