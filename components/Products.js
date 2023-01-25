import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, Dimensions } from 'react-native'
import legodb from './lego-db.js'


const Products = ({ navigation}) => {

    const [list, setList] = useState(legodb)

    const renderProducts = (item) => {
        return(
          <TouchableOpacity style={styles.itemBloc}
            onPress={() => navigation.navigate("Details", {item})}
          >
            <View>
                <Image style={styles.itemImage} source={{uri: item.images[0]}} />
            </View>
            <View style={styles.itemText}>
                <Text style={styles.itemTextName}>{item.name}</Text>
                <Text style={styles.itemTextPrice}>{item.price} €</Text>
            </View>
          </TouchableOpacity>
        )
    }


  return (
    <View style={styles.container}>
        <FlatList
          keyExtractor={item => item.id}
          data={list}
          renderItem={({item}) => renderProducts(item)}
          numColumns={1} // Mettre la liste sur deux collones 
        />
    </View>
  )
}

export default Products

const vw = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 0
    },
    display: {
        display:"none"
    },
    itemBloc: {
        backgroundColor: "#FFF",
        borderBottomColor: 'rgb(224, 224, 224)',
        borderBottomWidth: 1,
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 20,
        paddingRight: 20,
        width: "100%",
        // marginBottom: 20,
        flexDirection: "row"
    },
    itemImage: {
        width: ((vw - 40) * (2 / 5)),
        height: 100,
        resizeMode: "contain"
    },
    itemText:{
        width: ((vw - 40) * (3 / 5)),
        justifyContent: "center",
        paddingLeft: 10
    },
    itemTextName:{
        fontSize: 20,
        fontWeight: "700"
    },
    itemTextPrice:{
        fontSize: 16,
        fontWeight: "500"
    }
  });