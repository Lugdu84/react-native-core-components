import { capitalizeFirstLetter } from '@/lib/formatString';
import { Entypo } from '@expo/vector-icons';
import { Stack, usePathname } from 'expo-router';
import { useRef } from 'react';
import {
	NativeScrollEvent,
	NativeSyntheticEvent,
	Pressable,
	ScrollView,
	StyleSheet,
	View,
} from 'react-native';

export default function ScrollViewScreen() {
	const nameOfScreen = usePathname();

	const scrollViewRef = useRef<ScrollView>(null);
	const scrollViewHorizontalRef = useRef<ScrollView>(null);
	const viewYRef = useRef<number>(0);

	const showMesure = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
		console.log('contentSize', event.nativeEvent.contentSize);
		console.log('layoutMeasurement', event.nativeEvent.layoutMeasurement);
	};

	const navigateToTop = () => {
		scrollViewRef.current?.scrollTo({ y: 0, animated: true });
	};

	const navigateToBottom = () => {
		scrollViewRef.current?.scrollToEnd({ animated: true });
	};

	const navigateToY = () => {
		scrollViewRef.current?.scrollTo({ y: viewYRef.current, animated: true });
	};
	const navigateToX = () => {
		scrollViewHorizontalRef.current?.scrollTo({ x: 500, animated: true });
	};

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: capitalizeFirstLetter(nameOfScreen) }} />
			<ScrollView
				onLayout={(event) => console.log('layout', event.nativeEvent)}
				ref={scrollViewRef}
				// onScroll={showMesure}
				style={styles.scrollView}
				contentContainerStyle={styles.contentScrollView}>
				<View style={styles.buttons}>
					<Pressable
						style={styles.button}
						onPress={navigateToBottom}>
						<Entypo
							name="align-bottom"
							size={26}
						/>
					</Pressable>
					<Pressable
						style={styles.button}
						onPress={navigateToY}>
						<Entypo
							name="align-vertical-middle"
							size={26}
						/>
					</Pressable>
				</View>

				<View style={styles.box} />
				<View style={styles.round} />
				<View style={styles.box} />
				<View style={styles.round} />
				<View style={styles.box} />
				<View
					onLayout={(event) => (viewYRef.current = event.nativeEvent.layout.y)}
					style={styles.round}
				/>
				<View style={styles.box} />
				<View style={styles.round} />
				<View style={styles.box} />
				<View style={styles.round} />
				<View style={styles.box} />
				<View style={styles.round} />
				<View style={styles.box} />
				<View style={styles.round} />
				<View style={styles.box} />
				<Pressable
					style={styles.button}
					onPress={navigateToTop}>
					<Entypo
						name="align-top"
						size={26}
					/>
				</Pressable>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					ref={scrollViewHorizontalRef}
					style={styles.scrollView}
					contentContainerStyle={styles.contentScrollView}>
					<View style={styles.box} />
					<View style={styles.round} />
					<View style={styles.box} />
					<View style={styles.round} />
					<View style={styles.box} />
					<View style={styles.round} />
					<View style={styles.box} />
				</ScrollView>
			</ScrollView>
		</View>
	);
}

// 1. Pourquoi une ScrollView ?
// 2. flex: 1 dans la vue parente (jamais dans la scrollView)
// 2. Les styles : style vs contentContainerStyle
// 3. ScrollView horizontal dans une ScrollView vertical
// 4. Cacher la barre de défilement
// 5. utiliser useRef pour scroller dans la ScrollView
// 5. Quand utiliser ScrollView et FlatList

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		padding: 20,
	},
	box: {
		width: 100,
		height: 100,
		backgroundColor: 'red',
	},
	round: {
		width: 100,
		height: 100,
		borderRadius: 50,
		backgroundColor: 'blue',
	},
	scrollView: {
		backgroundColor: 'yellow',
		padding: 10,
	},
	contentScrollView: {
		gap: 10,
		padding: 10,
		backgroundColor: 'lightgrey',
	},
	buttons: {
		flexDirection: 'row',
		gap: 10,
	},
	button: {
		backgroundColor: 'lightblue',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		width: 50,
		height: 50,
		borderRadius: 50,
	},
});
