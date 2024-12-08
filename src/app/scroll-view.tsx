import { capitalizeFirstLetter } from '@/lib/formatString';
import { Entypo } from '@expo/vector-icons';
import { Stack, usePathname } from 'expo-router';
import { useCallback, useRef, useState } from 'react';
import {
	NativeScrollEvent,
	NativeSyntheticEvent,
	Pressable,
	RefreshControl,
	ScrollView,
	StyleSheet,
	View,
} from 'react-native';

export default function ScrollViewScreen() {
	const nameOfScreen = usePathname();

	const [refreshing, setRefreshing] = useState(false);

	const scrollViewRef = useRef<ScrollView>(null);
	const scrollViewHorizontalRef = useRef<ScrollView>(null);
	const viewYRef = useRef<number>(0);
	const viewXRef = useRef<number>(0);

	const showMesure = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
		console.log('contentSize', event.nativeEvent.contentSize);
		console.log('layoutMeasurement', event.nativeEvent.layoutMeasurement);
	};

	const navigateToTop = () => {
		scrollViewRef.current?.scrollTo({ y: 0 });
	};

	const navigateToBottom = () => {
		scrollViewRef.current?.scrollToEnd({ animated: true });
	};

	const navigateToY = () => {
		scrollViewRef.current?.scrollTo({ y: viewYRef.current });
	};

	// Corrigé du TP pour la navigation horizontale
	const navigateToRight = () => {
		scrollViewHorizontalRef.current?.scrollToEnd({ animated: true });
	};

	const navigateToLeft = () => {
		scrollViewHorizontalRef.current?.scrollTo({ x: 0 });
	};
	const navigateToX = () => {
		scrollViewHorizontalRef.current?.scrollTo({ x: viewXRef.current });
	};

	const onRefresh = useCallback(() => {
		setRefreshing(true);
		setTimeout(() => {
			setRefreshing(false);
		}, 2000);
	}, []);

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: capitalizeFirstLetter(nameOfScreen) }} />
			<ScrollView
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
					/>
				}
				showsVerticalScrollIndicator={false}
				// horizontal
				// onScroll={showMesure}
				ref={scrollViewRef}
				style={styles.scrollView}
				contentContainerStyle={styles.contentScrollView}>
				<View style={styles.buttons}>
					<Pressable
						style={styles.button}
						onPress={navigateToBottom}>
						<Entypo
							name="arrow-long-down"
							size={24}
							color="black"
						/>
					</Pressable>
					<Pressable
						style={styles.button}
						onPress={navigateToX}>
						<Entypo
							name="arrow-down"
							size={24}
							color="black"
						/>
					</Pressable>
				</View>
				<View style={styles.box} />
				<View style={styles.round} />
				<View style={styles.box} />
				<View style={styles.round} />
				<View style={styles.box} />
				<View style={styles.round} />
				<View style={styles.box} />
				<View style={styles.round} />
				<View style={styles.box} />
				<View style={styles.round} />
				<View style={styles.box} />
				<View style={styles.round} />
				<View style={styles.box} />
				<View style={styles.round} />
				<View style={styles.box} />
				<View style={styles.round} />
				<View style={styles.box} />
				<View style={styles.round} />
				<View style={styles.box} />
				<View style={styles.round} />
				<View
					style={styles.box}
					onLayout={(event) => {
						viewYRef.current = event.nativeEvent.layout.y;
					}}
				/>
				<View style={styles.round} />
				<View style={styles.box} />
				<View style={styles.round} />
				<View style={styles.box} />
				<View style={styles.round} />
				<View style={styles.box} />
				<View style={styles.round} />
				<ScrollView
					ref={scrollViewHorizontalRef}
					horizontal
					style={styles.scrollView}
					contentContainerStyle={styles.contentScrollView}>
					<View style={[styles.buttons, { flexDirection: 'column' }]}>
						<Pressable
							style={styles.button}
							onPress={navigateToRight}>
							<Entypo
								name="arrow-long-right"
								size={24}
								color="black"
							/>
						</Pressable>
						<Pressable
							style={styles.button}
							onPress={navigateToX}>
							<Entypo
								name="arrow-right"
								size={24}
								color="black"
							/>
						</Pressable>
					</View>
					<View style={styles.box} />
					<View style={styles.round} />
					<View style={styles.box} />
					<View style={styles.round} />
					<View style={styles.box} />
					<View
						style={styles.round}
						onLayout={(event) => {
							viewXRef.current = event.nativeEvent.layout.x;
						}}
					/>
					<View style={styles.box} />
					<View style={styles.round} />
					<View style={styles.box} />
					<View style={styles.round} />
					<View style={[styles.buttons, { flexDirection: 'column' }]}>
						<Pressable
							style={styles.button}
							onPress={navigateToLeft}>
							<Entypo
								name="arrow-long-left"
								size={24}
								color="black"
							/>
						</Pressable>
						<Pressable
							style={styles.button}
							onPress={navigateToX}>
							<Entypo
								name="arrow-left"
								size={24}
								color="black"
							/>
						</Pressable>
					</View>
				</ScrollView>
				<View style={styles.buttons}>
					<Pressable
						style={styles.button}
						onPress={navigateToTop}>
						<Entypo
							name="arrow-long-up"
							size={24}
							color="black"
						/>
					</Pressable>
					<Pressable
						style={styles.button}
						onPress={navigateToY}>
						<Entypo
							name="arrow-up"
							size={24}
							color="black"
						/>
					</Pressable>
				</View>
			</ScrollView>
		</View>
	);
}

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
