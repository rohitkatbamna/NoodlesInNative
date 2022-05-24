import react from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";

function DisplayImages({ images }) {
	console.log(images);
	let c = 0;
	return (
		<>
			<ScrollView>
				{images.map((obj) => {
					return (
						<Image
							source={{ uri: obj.Image }}
							style={styles.tinyLogo}
							key={c++}
						/>
					);
				})}
			</ScrollView>
		</>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	text_one: {
		fontSize: 30,
	},
	tinyLogo: {
		marginTop: 100,
		height: 200,
		width: 500,
	},
});
export default DisplayImages;
