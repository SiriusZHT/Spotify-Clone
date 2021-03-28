import React from "react";
import { View, Image, Text, TouchableWithoutFeedback } from "react-native";
import { Album } from "../../types";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
export type AlbumProps = {
  album: Album;
};
const AlbumComponent = (props: AlbumProps) => {
  const navigation = useNavigation();
  const onPress = () => {
    // console.warn(`Album pressed: ${props.album.artistsHeadline}`);
    navigation.navigate("AlbumScreen", { id: props.album.id });
  };
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        {/**image of the album */}
        <Image
          source={{ uri: props.album.imageUri }}
          style={styles.image}
        ></Image>
        <Text style={styles.text}>{props.album.artistsHeadline}</Text>
        {/**artists */}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AlbumComponent;
