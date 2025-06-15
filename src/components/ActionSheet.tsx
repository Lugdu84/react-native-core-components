import {
	View,
	Text,
	Modal,
	StyleSheet,
	Pressable,
	ActionSheetIOSOptions,
} from 'react-native';

type ActionSheetProps = {
	visible: boolean;
	onActionSelection: (buttonIndex?: number) => void;
	actions: ActionSheetIOSOptions;
};

export default function ActionSheet({
	visible,
	onActionSelection,
	actions,
}: ActionSheetProps) {
	const {
		title,
		message,
		options,
		cancelButtonIndex,
		destructiveButtonIndex,
		tintColor,
		cancelButtonTintColor,
		disabledButtonIndices,
	} = actions;

	const isInArrayOrEqual = (
		numberOrArray: number | number[] | undefined | null,
		index: number
	) => {
		if (Array.isArray(numberOrArray)) {
			return numberOrArray.includes(index);
		}
		return index === numberOrArray;
	};

	const getColor = (index: number) => {
		if (isInArrayOrEqual(disabledButtonIndices, index)) {
			return 'gray';
		}
		if (isInArrayOrEqual(destructiveButtonIndex, index)) {
			return 'red';
		}
		if (index === cancelButtonIndex) {
			if (cancelButtonTintColor) return cancelButtonTintColor as string;
			return (tintColor as string) || 'blue';
		}

		return (tintColor as string) || 'blue';
	};

	return (
		<Modal
			onRequestClose={() => onActionSelection()}
			transparent
			style={styles.container}
			visible={visible}>
			<Pressable
				style={styles.modalView}
				onPress={() => onActionSelection()}>
				<View
					style={styles.buttons}
					onStartShouldSetResponder={() => true}>
					<View style={styles.rowModal}>
						<Text style={styles.title}>{title}</Text>
						<Text style={styles.subtitle}>{message}</Text>
					</View>
					{options.map((text, index) => {
						if (index === cancelButtonIndex) return null;
						return (
							<Pressable
								disabled={isInArrayOrEqual(disabledButtonIndices, index)}
								key={index}
								onPress={() => onActionSelection(index)}
								style={[styles.rowModal, styles.separator]}>
								<Text style={[styles.textButton, { color: getColor(index) }]}>
									{text}
								</Text>
							</Pressable>
						);
					})}
				</View>
				{cancelButtonIndex && (
					<Pressable
						style={[styles.rowModal, styles.buttons]}
						onPress={() => onActionSelection(cancelButtonIndex)}>
						<Text
							style={[
								styles.textButton,
								{ color: getColor(cancelButtonIndex) },
							]}>
							Annuler
						</Text>
					</Pressable>
				)}
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
		backgroundColor: 'rgb(236, 238, 236)',
		borderRadius: 20,
		boxShadow: '4 4 10 rgba(0, 0, 0, 0.4)',
	},
	rowModal: {
		alignContent: 'center',
		justifyContent: 'center',
		padding: 15,
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
	separator: {
		borderTopWidth: 0.5,
		borderColor: 'gray',
	},
});
