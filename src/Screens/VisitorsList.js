import React from 'react';
import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderWithLogo from '../components/HeaderWithLogo';
import { images } from '../constants';
import LinearGradient from "react-native-linear-gradient";


const Visitors = () => {

    return (
        <SafeAreaView style={{ height: '100%', backgroundColor: '#123C79' }}>
            <HeaderWithLogo />

            <ScrollView
                nestedScrollEnabled={true}
                style={{ backgroundColor: '#123C79' }}
            >
                <LinearGradient
                    colors={['#123C79', '#0D1F3A']}
                >
                    <View>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            marginTop: 150,
                            height: '100%',
                            justifyContent: 'center',
                        }}>
                            <Image
                                style={{ width: 100, height: 100, marginTop: 40, marginLeft: 30 }}
                                source={images.Visitor}
                            />
                            <Pressable
                                style={{
                                    width: 250,
                                    height: 80,
                                    marginTop: 50,
                                    marginLeft: 150,
                                    backgroundColor: '#FFFFFFC2',
                                    borderRadius: 10
                                }}
                            // onPress={onPressFunction}
                            >
                                <Text style={{
                                    fontSize: 30,
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    marginTop: 18
                                }}
                                >
                                    Visitors
                                </Text>
                            </Pressable>

                        </View>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            marginTop: 120,
                            justifyContent: 'center',
                        }}>

                            <Image
                                style={{ width: 100, height: 100, marginTop: 40, marginLeft: 30 }}
                                source={images.Delivery}
                            />
                            <Pressable
                                style={{
                                    width: 250,
                                    height: 80,
                                    marginTop: 50,
                                    marginLeft: 150,
                                    backgroundColor: '#FFFFFFC2',
                                    borderRadius: 10
                                }}
                            // onPress={onPressFunction}
                            >
                                <Text style={{
                                    fontSize: 30,
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    marginTop: 18
                                }}
                                >
                                    Deliveries
                                </Text>
                            </Pressable>

                        </View>
                    </View>
                </LinearGradient>
            </ScrollView>

        </SafeAreaView>
    );

}

export default Visitors;