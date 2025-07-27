import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'
import { SvgFromUri } from 'react-native-svg';
import Svg, { Circle, SvgUri } from 'react-native-svg';


const Home = () => {
    return (
        <>
            <View style={styles.container}>
                <SvgFromUri
                    width={200}
                    height={200}
                    uri={require('../../assets/images/LaLigaTV_por_Movistar_Plus+_2023_Logo.svg')}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});



export default Home;