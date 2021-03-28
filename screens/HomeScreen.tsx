import * as React from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";
import AlbumCategory, { AlbumCategoryProps } from "../components/AlbumCategory";
import albumCategories from "../data/albumCategories";
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={albumCategories}
        renderItem={({ item }) => (
          <AlbumCategory
            title={item.title}
            albums={(item.albums as unknown) as AlbumCategoryProps["albums"]}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      {/* <AlbumCategory
        title={albumCategories[0].title}
        albums={
          (albumCategories[0].albums as unknown) as AlbumCategoryProps["albums"]
        }
      /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
