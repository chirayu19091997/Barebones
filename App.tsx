import { StatusBar } from "expo-status-bar";
import * as ScreenOrientation from "expo-screen-orientation";
import { useFonts } from "expo-font";
import { LogBox, StyleSheet } from "react-native";
import { Text, View } from "./components/Themed";
import { useEffect } from "react";

export default function App() {
	const [isLoaded] = useFonts({
		SpaceMono: require("./assets/fonts/SpaceMono-Regular.ttf"),
	});

	useEffect(() => {
		LogBox.ignoreAllLogs(true);
		ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
	}, []);

	if (!isLoaded) {
		return <View />;
	} else {
		return (
			<View style={styles.container}>
				<Text>Open up App.tsx to start working on your app!</Text>
				<StatusBar style="auto" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: "5%",
		alignItems: "center",
		justifyContent: "center",
	},
});
