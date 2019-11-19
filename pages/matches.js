import React, { Component } from 'react';
import { Constants } from 'react';
import firebase from './firebase';

import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';


export default class MatchScreen extends Component {


   
  
    render() {


        return (
            <View style={{ flex: 1 }}>
                <ScrollView
                    style={{ flex: 1 }}>

                    <View style={styles.detailscontainer}>
                        
                        <Text style={styles.profilebio}>JOHN DOE</Text>
                        <Text style={styles.profiletext}>Happy, enthusiastic, friendly and outgoing.</Text>

                        <Text style={styles.profiletext}>Email: <Text style={{ color: '#e93766' }}>
                       
                        </Text>
                        </Text>

                    </View>

                    <View style={styles.detailscontainer}>
                        <Text style={styles.profilebio}>POSTS </Text>
                    </View>

                    <View style={styles.postsContainer}>
           
                    </View>

                    <View style={styles.postsContainer}>


                       
                    </View>








                </ScrollView>




            </View>
        );
    }
}

const styles = StyleSheet.create({
    postsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 0,
        alignItems: 'center',
        textAlign: "center",
        marginTop: 3
    },



    detailscontainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 10
    },

    textcontainer: {
        justifyContent: 'center'

    },

    titletext: {
        top: 20,
        fontWeight: '800',
        fontSize: 16,
        color: 'white'
    },
    images: {
        height: 300,
        width: null

    },


    postsimages: {
        height: 120,
        width: 120,
        marginRight: 3,
    },

    captiontext: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        fontSize: 14
    },

    circleimages: {
        height: 65,
        width: 65,
        borderRadius: 33
    },

    circlecontainers: {
        marginRight: 15,
        alignItems: 'center'
    },
    profilebio: {
        paddingHorizontal: 0,
        paddingVertical: 4,
        fontSize: 17,
        fontWeight: '600',
        marginTop: 10
    },
    profiletext: {
        fontSize: 14,
        marginTop: 4,
    }
});