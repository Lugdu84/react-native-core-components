import { Octicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

import { StyleSheet, Text, View } from 'react-native';
type CardLinkProps = {
	route: ItemRoute;
};

export default function CardLink({ route: { href, text } }: CardLinkProps) {
	return (
		<Link href={href}>
			<View style={styles.cardLink}>
				<Text style={styles.text}>{text}</Text>
				<Octicons
					name="chevron-right"
					size={24}
					color="black"
				/>
			</View>
		</Link>
	);
}

const styles = StyleSheet.create({
	cardLink: {
		backgroundColor: '#f9f9f9',
		borderRadius: 5,
		padding: 10,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	text: {
		fontSize: 16,
		fontWeight: 'bold',
	},
});
