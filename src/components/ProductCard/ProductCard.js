import React from "react";
import { Text, View, FlatList, StyleSheet, ScrollView, Image, Dimensions } from "react-native";
import styles from "./ProductCard.style";

const ProductCard = ({ product }) => {
    return (

            <View style={styles.card_container}>
                <Image style={styles.image}
                    source={{ uri: product.imgURL }}
                    resizeMode={"contain"}
                />
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{product.price}</Text>
                <Text style={styles.instock}>{product.inStock ? '' : 'STOKTA YOK'}</Text>
            </View>

    );
}
export default ProductCard;