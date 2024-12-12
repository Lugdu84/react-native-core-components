import { View, Text, Modal, StyleSheet, Pressable } from 'react-native';

type ActionSheetProps = {
	visible: boolean;
	hide: (visible: boolean) => void;
};

export default function ActionSheet({ visible, hide }: ActionSheetProps) {
	const buttons = ['Modifier', 'Supprimer', 'Bouton désactivé', 'Annuler'];

	const handleClose = () => {
		hide(false);
	};

	return (
		<Modal
			transparent
			style={styles.container}
			visible={visible}>
			<Pressable
				onPress={handleClose}
				style={styles.modalView}>
				<View
					style={styles.buttons}
					onStartShouldSetResponder={() => true}>
					<View style={styles.rowModal}>
						<Text style={styles.title}>Titre du Sheet</Text>
						<Text style={styles.subtitle}>Message du Sheet</Text>
					</View>
					{buttons.map((button, index) => (
						<Pressable
							key={index}
							onPress={handleClose}
							style={[
								styles.rowModal,
								{ borderTopWidth: 0.5, borderColor: 'gray' },
							]}>
							<Text style={styles.textButton}>{button}</Text>
						</Pressable>
					))}
				</View>
				<Pressable style={[styles.rowModal, styles.buttons]}>
					<Text style={styles.textButton}>Annuler</Text>
				</Pressable>
			</Pressable>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	modalView: {
		flex: 1,
		justifyContent: 'flex-end',
		padding: 10,
		gap: 10,
		backgroundColor: 'rgba(0, 0, 0, 0.2)',
	},
	buttons: {
		backgroundColor: 'white',
		borderRadius: 20,
		boxShadow: '4 4 10 rgba(0, 0, 0, 0.4)',
	},
	rowModal: {
		alignContent: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	title: {
		fontSize: 16,
		textAlign: 'center',
	},
	subtitle: {
		fontSize: 12,
		textAlign: 'center',
		color: 'gray',
	},
	textButton: {
		textAlign: 'center',
		fontSize: 18,
	},
});
