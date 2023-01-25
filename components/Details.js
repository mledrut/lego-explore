import React, { useState } from 'react'
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native'

const Details = (props) => {

    const [item, setItem] = useState(props.route.params.item)

  return (
    <View style={styles.container}>
        <View style={styles.imagesWrapper}>
            <Image style={styles.detailsImage} source={{ uri: item.images[0]}} />
        </View>
        <View style={styles.infosWrapper}>
            <View>
                <Text style={styles.infosTitle}>{item.name}</Text>
                <Text style={styles.infosPrice}>{item.price} €</Text>
            </View>
            <View style={styles.iconSection}>
                <View style={styles.iconWrapper}>
                    <Image style={styles.infosIcon} source={require('../img/icon-baby.png')} />
                    <Text>{item.details.age} +</Text>
                    <Text>Âges</Text>
                </View>
                <View style={styles.iconWrapper}>
                    <Image style={styles.infosIcon} source={require('../img/icon-brick.png')} />
                    <Text>{item.details.pieces}</Text>
                    <Text>Nombre de pièces</Text>
                </View>
            </View>
            <View style={styles.buttonWrapper}>
                <View style={styles.buttonSite}>
                    <Text style={styles.buttonText}>Voir sur le site</Text>
                </View>
            </View>
        </View>
    </View>
  )
}

export default Details

const vw = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#FFF"
    },
    imagesWrapper:{
        flex: 2,
    },
    detailsImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    infosWrapper:{
        flex: 2,
        display:"flex",
        justifyContent:"space-between"
    },
    infosTitle:{
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 6
    },
    infosPrice:{
        fontSize: 24,
        fontWeight: "700"
    },
    iconSection:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        width: "100%"
    },
    iconWrapper:{
        display:"flex",
        alignItems:"center"
    },
    buttonSite:{
        backgroundColor:"#EE7214",
        padding: 10,
        marginBottom: 20,
        width: ( vw - 60 ) / 2,
        borderRadius: 50,
    },
    buttonText:{
        fontSize: 17,
        fontWeight: "600",
        textAlign: "center",
    }
  });