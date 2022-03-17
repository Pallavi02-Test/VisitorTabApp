import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, Pressable, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderWithLogo from '../components/HeaderWithLogo';
import { images } from '../constants';
import LinearGradient from "react-native-linear-gradient";



const RegisterForm = () => {
    const [date, setDate] = useState(); //new Date(1625484193771
    const [visibleExitDate, setvisibleExitDate] = React.useState(false);
    const [selectedExitDate, setselectedExitDate] = useState();
    const [selectedExitDateError, setSelectedExitDateError] = useState('');
    const [calendarState, setCalendarState] = useState(false);
    useEffect(() => {
        var dt = Date.now();
        setDate(new Date(dt));
    }, []);

    const exitDate = () => {
        const onChangeDate = (selectedExitDate) => {
            const currentDate = selectedExitDate;

            setselectedExitDate(
                currentDate ? moment(currentDate).format('DD MMM, YYYY') : '',
            );
            setSelectedExitDateError(currentDate ? '' : 'Please select date');
            if (new Date(currentDate) < new Date(selectedStartDate)) {
                setselectedExitDate(null);
                setSelectedExitDateError('Exit Date cannot be less than start date');
            }
        };

        return (
            <View style={{ margin: 0, justifyContent: 'flex-start', marginTop: 0 }}>
                {visibleExitDate == false ? null : (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode="date" // {mode}
                        is24Hour={true}
                        display="default"
                        // onChange={onChangeDate}
                        minimumDate={date}
                    />
                )}
                <TextInput
                    label="Expected Exit Date "
                    color={'black'}
                    style={{ fontSize: 18, height: 60 }}
                    editable={false}
                    right={
                        <TextInput.Icon
                            name="calendar"
                            color={'#fff'}
                            onPress={() => {
                                setvisibleExitDate(true);
                            }}
                        />
                    }
                    value={selectedExitDate}
                // onChangeText={selectedExitDate => validateExitDate(selectedExitDate)}
                // onBlur={() => validateExitDate(selectedExitDate)}
                />

                {/* <Text style={{ color: 'red', fontSize: 12, marginLeft: 6 }}>
                    {selectedExitDateError}
                </Text> */}
            </View>
        );
    };

    return (

        <SafeAreaView style={{ height: '100%', backgroundColor: '#123C79' }}>
            <HeaderWithLogo />
            <ScrollView
                nestedScrollEnabled={true}>
                <LinearGradient
                    colors={['#123C79', '#0D1F3A']}
                >
                    <View>

                        <View style={{
                            backgroundColor: '#052346',
                            width: 600,
                            height: 500,
                            alignSelf: 'center',
                            marginTop: 150,
                            borderRadius: 10,
                            marginBottom: 60
                        }}>
                            <Text style={{
                                color: '#CBD2DC',
                                fontWeight: 'bold',
                                fontSize: 25,
                                marginLeft: 50,
                                marginTop: -15,
                            }}>
                                Visitor
                            </Text>

                            <View style={{
                                backgroundColor: '#2B456E',
                                width: '80%',
                                alignSelf: 'center',
                                marginTop: 30,
                                borderRadius: 10,
                            }}>
                                <TextInput
                                    placeholder="Name"
                                    placeholderTextColor={'#ABADB0'}
                                    style={{ fontSize: 18, height: 60 }}
                                />
                            </View>
                            <View style={{
                                backgroundColor: '#2B456E',
                                width: '80%',
                                alignSelf: 'center',
                                marginTop: 30,
                                borderRadius: 10,
                            }}>
                                <TextInput
                                    placeholder="Contact Number"
                                    placeholderTextColor={'#ABADB0'}
                                    style={{ fontSize: 18, height: 60 }}
                                />
                            </View>
                            <View style={{
                                backgroundColor: '#2B456E',
                                width: '80%',
                                alignSelf: 'center',
                                marginTop: 30,
                                borderRadius: 10,
                            }}>
                                <TextInput
                                    placeholder="Vehicle Number"
                                    placeholderTextColor={'#ABADB0'}
                                    style={{ fontSize: 18, height: 60 }}
                                />
                            </View>
                            <View style={{
                                backgroundColor: '#2B456E',
                                width: '80%',
                                alignSelf: 'center',
                                marginTop: 30,
                                borderRadius: 10,
                            }}>
                                {/* {exitDate()} */}
                                <TextInput
                                    placeholder="Expected Exit Date"
                                    placeholderTextColor={'#ABADB0'}
                                    style={{ fontSize: 18, height: 60 }}
                                />
                            </View>

                            <View style={{
                                backgroundColor: '#2B456E',
                                width: '80%',
                                alignSelf: 'center',
                                marginTop: 30,
                                borderRadius: 10,
                            }}>
                                <TextInput
                                    placeholder="Expected Exit Time"
                                    placeholderTextColor={'#ABADB0'}
                                    style={{ fontSize: 18, height: 60 }}
                                />
                            </View>

                        </View>


                        <View style={{
                            backgroundColor: '#052346',
                            width: 600,
                            height: 250,
                            alignSelf: 'center',
                            marginTop: 20,
                            borderRadius: 10,
                            marginBottom: 40
                        }}>
                            <Text style={{
                                color: '#CBD2DC',
                                fontWeight: 'bold',
                                fontSize: 25,
                                marginLeft: 50,
                                marginTop: -15,
                            }}>
                                Resident
                            </Text>

                            <View style={{
                                backgroundColor: '#2B456E',
                                width: '80%',
                                alignSelf: 'center',
                                marginTop: 30,
                                borderRadius: 10,
                            }}>
                                <TextInput
                                    placeholder="Unit Number"
                                    placeholderTextColor={'#ABADB0'}
                                    style={{ fontSize: 18, height: 60 }}
                                />
                            </View>
                            <View style={{
                                backgroundColor: '#2B456E',
                                width: '80%',
                                alignSelf: 'center',
                                marginTop: 30,
                                borderRadius: 10,
                            }}>
                                <TextInput
                                    placeholder="Resident Name"
                                    placeholderTextColor={'#ABADB0'}
                                    style={{ fontSize: 18, height: 60 }}
                                />
                            </View>

                        </View>

                        <View style={{ marginBottom: 60, marginTop: 30 }}>
                            <TouchableOpacity style={{
                                backgroundColor: '#C7D9EA',
                                width: 450,
                                height: 80,
                                alignSelf: 'center',
                                borderRadius: 15,
                            }}>
                                <Text style={{
                                    fontSize: 30,
                                    textAlign: 'center',
                                    marginTop: 20
                                }}
                                >
                                    Register </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginBottom: 60, marginTop: 0 }}>
                            <TouchableOpacity style={{
                                backgroundColor: '#293950',
                                width: 450,
                                height: 80,
                                alignSelf: 'center',
                                borderRadius: 15,
                            }}>
                                <Text style={{
                                    fontSize: 30,
                                    textAlign: 'center',
                                    marginTop: 20,
                                    color:'#CBD2DC'
                                }}
                                >
                                    Cancel </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </ScrollView>
        </SafeAreaView>
    );

}

export default RegisterForm;