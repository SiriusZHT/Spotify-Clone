import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import albumDetails from "../data/albumDetails";
import SongListItem from "../components/SongListItem";
import AlbumHeader from "../components/AlbumHeader";
const AlbumScreen = () => {
  const route = useRoute();

  useEffect(() => {
    console.log(route);
    // Object {
    //   "key": "AlbumScreen-DjZfyPDCAAGRsa4lj2xPp",
    //   "name": "AlbumScreen",
    //   "params": Object {
    //     "id": "1",
    //   },
    // }
  }, []);

  return (
    <View>
      {/* <SongListItem song={albumDetails.songs[0]} /> */}
      <FlatList
        data={albumDetails.songs}
        renderItem={({ item }) => <SongListItem song={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <AlbumHeader album={albumDetails}></AlbumHeader>
        )}
      />
    </View>
  );
};

export default AlbumScreen;
