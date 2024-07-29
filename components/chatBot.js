import React, { useState, useRef, useCallback, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, KeyboardAvoidingView, Platform, Image } from 'react-native';
import axios from 'axios';
import moment from 'moment';

const ChatbotScreen = () => {
    const [data, setData] = useState([
        { type: 'bot', text: "Hi, I'm D.I.Z.Z.Z.Z.Y! I'm here to assist you with anything you need.", time: moment().format('h:mm A') }
    ]);
    const [textInput, setTextInput] = useState('');
    const flatListRef = useRef(null);

    const handleSend = useCallback(async () => {
        const prompt = textInput;
        const timestamp = moment().format('h:mm A');
        try {
            const response = await axios.post(apiUrl, {
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'user', content: prompt }
                ],
                temperature: 0.5,
                max_tokens: 150,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                }
            });
            const text = response.data.choices[0].message.content;
            setData(prevData => [
                ...prevData, 
                { type: 'user', text: textInput, time: timestamp }, 
                { type: 'bot', text, time: timestamp }
            ]);
            setTextInput('');
        } catch (error) {
            if (error.response) {
                console.error("Error response:", error.response.data);
            } else if (error.request) {
                console.error("Error request:", error.request);
            } else {
                console.error("Error message:", error.message);
            }
        }
    }, [textInput, apiKey, apiUrl]);

    const handleKeyPress = useCallback(({ nativeEvent }) => {
        if (nativeEvent.key === 'Enter') {
            handleSend();
        }
    }, [handleSend]);

    useEffect(() => {
        if (flatListRef.current) {
            flatListRef.current.scrollToEnd({ animated: true });
        }
    }, [data]);

    const robotImage = require('../assets/icons/icons8-robot-64.png');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 80} // Adjust as needed
        >
            <FlatList
                ref={flatListRef}
                data={data}
                keyExtractor={(item, index) => index.toString()}
                style={styles.body}
                ListHeaderComponent={() => (
                    <View style={styles.headerContainer}>
                        <Image source={robotImage} style={styles.robotImage} />
                        <Text style={styles.robotText}>D.I.Z.Z.Z.Z.Y</Text>
                    </View>
                )}
                renderItem={({ item, index }) => (
                    <View style={[styles.messageContainer, item.type === 'user' ? styles.userMessageContainer : styles.botMessageContainer, index === 0 ? styles.firstMessageContainer : null]}>
                        <View style={[styles.messageBubble, item.type === 'user' ? styles.userBubble : styles.botBubble]}>
                            <Text style={styles.messageText}>{item.text}</Text>
                        </View>
                        <Text style={styles.timeText}>{item.time}</Text>
                    </View>
                )}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={textInput}
                    onChangeText={text => setTextInput(text)}
                    placeholder="Ask me anything..."
                    placeholderTextColor="#888888"
                    onKeyPress={handleKeyPress}
                    returnKeyType="send"
                    blurOnSubmit={false}
                    onSubmitEditing={handleSend}
                />
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    body: {
        flex: 1,
    },
    headerContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    robotImage: {
        width: 100,
        height: 100,
        marginBottom: 5,
    },
    robotText: {
        color: '#FFFFFF',
        fontSize: 15,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    firstMessageContainer: {
        marginTop: 20,
    },
    messageContainer: {
        flexDirection: 'column',
        marginVertical: 5,
        marginHorizontal: 10,
    },
    userMessageContainer: {
        alignItems: 'flex-end',
    },
    botMessageContainer: {
        alignItems: 'flex-start',
    },
    messageBubble: {
        maxWidth: '80%',
        padding: 10,
        borderRadius: 15,
    },
    userBubble: {
        backgroundColor: '#007AFF',
        borderBottomRightRadius: 0,
    },
    botBubble: {
        backgroundColor: '#444444',
        borderBottomLeftRadius: 0,
    },
    messageText: {
        color: '#ffffff',
        fontSize: 16,
    },
    timeText: {
        fontSize: 12,
        color: '#888888',
        marginTop: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderTopWidth: 0,
        borderColor: '#444444',
        backgroundColor: '#000000',
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 20,
        paddingHorizontal: 10,
        backgroundColor: '#000000',
        color: '#ffffff',
    },
});

export default ChatbotScreen;