import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from '../constannts/colors';
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import Instructiontext from "../components/ui/InstructionText";


function StartGameScreen({onPickNumber}) { 
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);

        if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99){
            // show alert
            Alert.alert('Inavlaid number!','Number has to be a number between 1 and 99.',
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
             );
            return;
        }
        onPickNumber(chosenNumber);
    }

    return (
    <View style={styles.rootContainer}>  
         <Title>Guess My Number</Title>
         <Card>
               <Instructiontext>Enter a number</Instructiontext>
                <TextInput 
                style= {styles.numberInput} 
                maxLength={2} 
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
                />
                <View style={styles.buttonsConatiner}>
                <View style={styles.buttonContiner}>
                <PrimaryButton onPressButton={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContiner}>
                <PrimaryButton onPressButton={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
               </View>
        </Card>
    </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create( {
    rootContainer: {
        flex:1,
        marginTop: 100,
        alignItems: 'center' 
    },
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        borderRadius: 8,
        backgroundColor: Colors.primary800,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },

    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: "center",
    },

    buttonsConatiner: {
        flexDirection: "row",       
    },

    buttonContiner: {
        flex: 1
    }
     

});