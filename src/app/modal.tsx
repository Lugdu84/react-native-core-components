import { capitalizeFirstLetter } from '@/lib/formatString';
import { Stack, usePathname } from 'expo-router';
import { useState } from 'react';
import { Button, Modal, Pressable, StyleSheet, View } from 'react-native';

export default function ModalScreen() {
	const nameOfScreen = usePathname();

	const [modalIsVisible, setModalIsVisible] = useState(false);

	const toggleModal = () => {
		setModalIsVisible(!modalIsVisible);
	};

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: capitalizeFirstLetter(nameOfScreen) }} />
			<Button
				title="show modal"
				onPress={toggleModal}
			/>
			<Modal
				visible={modalIsVisible}
				transparent
				animationType="slide">
				<Pressable
					style={styles.centeredView}
					onPress={toggleModal}>
					<View
						style={styles.modalView}
						onStartShouldSetResponder={() => true}>
						<Button
							title="hide modal"
							onPress={toggleModal}
						/>
					</View>
				</Pressable>
			</Modal>
		</View>
	);
}

// 1. Modal
// 2. state et show modal
// 3. hide modal
// 4. animationType
// 5. transparent
// ----------
// 6. fermer la modal en cliquant en dehors
// 6. n'utilise pas les presentation (option plus intéressante avec Expo Router)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
	},
	centeredView: {
		marginTop: 60,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalView: {
		borderRadius: 20,
		padding: 50,
		boxShadow: '0 3 6 rgba(0, 0, 0, 0.16)',
	},
});
