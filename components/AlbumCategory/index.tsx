import React from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Album } from "../../types";
import AlbumComponent from "../Album";
import styles from "./styles";
export type AlbumCategoryProps = {
  title: string;
  albums: [Album];
};
const AlbumCategory = (props: AlbumCategoryProps) => (
  <View style={styles.container}>
    {/* Title of category */}
    <Text style={styles.title}>{props.title}</Text>
    {/* List of albums */}
    <FlatList
      data={props.albums}
      renderItem={({ item }) => <AlbumComponent album={item} />}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
    />
  </View>
);

export default AlbumCategory;
