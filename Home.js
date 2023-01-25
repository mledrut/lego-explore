// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import homeImage from './img/home.webp'
import legodb from './components/lego-db.js'

export default function Home(props) {

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.butHome}
        onPress={() => props.navigation.navigate("Products")}
        >
        <Image style={styles.butHomeImage} source={homeImage}/>
        <View style={styles.butHomeTextWrapper}>
          <Text style={styles.butHomeText}>{legodb.length} Légos a découvrir</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const vw = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 0
  },
  butHome: {
    display:"flex",
    flexDirection:"row",
    height: vw / 2,
    overflow:"hidden",
    position: "relative"
    
  },
  butHomeImage: {
    height: "100%",
    width: (vw * (1 / 2)),
    objectFit: "cover"
  },
  butHomeTextWrapper: {
    width: (vw * (1 / 2)),
    backgroundColor: "#D01112",
    display: "flex",
    justifyContent:"flex-end",
    padding: 10
  },
  butHomeText: {
    fontSize: 22,
    color: "#FFF",
    fontWeight: "800",
    textTransform: "uppercase"
  }
});
