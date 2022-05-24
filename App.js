import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import react, { useState, useEffect } from "react";
import DisplayImages from "./components/DisplayImages/DisplayImages";

export default function App() {
	const [ramen, setRamen] = useState({});
	const [ramenimage, setRamenimage] = useState([]);
	const url =
		"https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json";
	const imageurl =
		"https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json";
	const givedata = {
		method: "GET",
	};
	async function FetchingImages() {
		await fetch(imageurl, givedata)
			.then((response) => response.json())
			.then((responseData) => {
				console.log(responseData);
				setRamenimage(responseData);
			});
	}
	useEffect(async () => {
		await FetchingImages();
	}, []);
	return (
		<>
			<View style={styles.container}>
				<Text style={styles.text_one}>Hello</Text>
				<Button
					title="Learn More"
					color="#841584"
					accessibilityLabel="Learn more about this purple button"
				/>
				<DisplayImages images={ramenimage} />
				<StatusBar style="auto" />
			</View>
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
		height: 100,
		width: 100,
	},
});
