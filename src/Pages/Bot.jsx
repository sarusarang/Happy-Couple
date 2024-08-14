import React, { useState } from 'react'
import ChatBot from "react-chatbotify";
import { useNavigate } from 'react-router-dom'


function Bot() {



    // Chat Bot Data
    const [BotData, SetBotData] = useState({})



    const Navigate = useNavigate()


    // Handle File Uploads
    const handleFileUpload = (params) => {


        console.log(params.files)

    }


    // Chat Bot Settings
    const settings = {

        general: { embedded: true, primaryColor: "#2a2a2a", secondaryColor: '#000' },
        chatHistory: { disabled: true },
        botBubble: { simStream: true, showAvatar: true },
        header: { title: (<div style={{ cursor: "pointer", margin: 0, fontSize: 20, fontWeight: "bold" }} >Self Assessment</div>) },
        notification: { disabled: true },
        emoji: { disabled: true },
        footer: {
            text:

                (
                    <div style={{ cursor: "pointer", display: "flex", flexDirection: "row", alignItems: "center", columnGap: 3 }}
                        onClick={() => window.open("https://react-chatbotify.com")}
                    >
                        <span key={0}>Powered By </span>
                       
                       
                        <span key={2} style={{ fontWeight: "bold" }}>Ex Technology</span>
                    </div>
                ),


        }

    }



    // Chat Bot Flow
    const flow = {

        start: {
            message: "Hi",
            transition: { duration: 200 },
            path: "start2"

        },

        start2: {
            message: "I am your Online Health guide From Happy Couple Solution.",
            transition: { duration: 200 },
            path: "start3"
        },

        start3: {
            message: "Welcome! ",
            transition: { duration: 200 },
            path: "start4"
        },

        start4: {
            message: "Kindly Complete a confidential interaction to find your ideal sexual health product for your happy life.",
            transition: { duration: 200 },
            path: "ask_phone"
        },


        ask_phone: {

            message: "Please Kindly Enter your Phone Number",
            function: (params) => SetBotData({ ...BotData, phone: params.userInput }),
            path: async (params) => {

                if (isNaN(Number(params.userInput))) {

                    await params.injectMessage("Ops needs to be a number!");
                    return;
                }
                return "step_1";
            }
        },

        step_1: {

            message: "What are your prior concerns about health?",
            options: ["Sexual Wellness", "Stress Management "],
            function: (params) => SetBotData({ ...BotData, Step1: params.userInput }),
            chatDisabled: true,
            path: async (params) => {

                if (params.userInput == "Stress Management") {

                    return "Stress_1";
                }
                return;
            }

        },
        Stress_1: {

            message: "Provide Your Basic Information",
            chatDisabled: true,
            transition: { duration: 200 },
            path: "Stress_1_age"

        },

        Stress_1_age: {

            message: "Enter Your Age",
            function: (params) => SetBotData({ ...BotData, age: params.userInput }),
            path: async (params) => {

                if (isNaN(Number(params.userInput))) {

                    await params.injectMessage("Ops needs to be a number!");
                    return;
                }
                return "stress_1_sex";
            }
        },

        stress_1_sex: {

            message: "Please Select Your Sex",
            options: ["Male", "Female", "Others"],
            chatDisabled: true,
            function: (params) => SetBotData({ ...BotData, sex: params.userInput }),
            path: "stress_1_height"
        },

        stress_1_height: {

            message: "Enter Your Height",
            function: (params) => SetBotData({ ...BotData, height: params.userInput }),
            path: async (params) => {

                if (isNaN(Number(params.userInput))) {

                    await params.injectMessage("Ops needs to be a number!");
                    return;
                }
                return "stress_1_weight";
            }
        },

        stress_1_weight: {

            message: "Enter Your Weight",
            function: (params) => SetBotData({ ...BotData, weight: params.userInput }),
            path: async (params) => {

                if (isNaN(Number(params.userInput))) {

                    await params.injectMessage("Ops needs to be a number!");
                    return;
                }
                return "stress_2";
            }
        },

        stress_2: {

            message: "Your Medical History",
            checkboxes: { items: ["High Diabetes", "Diabetes", "High BP", "Low BP", "High Cholesterol", "Thyroid issues", "Creatinine issues", "Cardiac issues"] },
            function: (params) => SetBotData({ ...BotData, medical_history: params.userInput }),
            chatDisabled: true,
            path: "stress_3"

        },

        stress_3: {

            message: "How often do you feel stressed or anxious?",
            options: ["Rarely", "Sometimes", "Often", "Almost always"],
            function: (params) => SetBotData({ ...BotData, Stress_4: params.userInput }),
            chatDisabled: true,
            path: "stress_4"

        },

        stress_4: {

            message: "Do you have trouble sleeping due to stress or anxiety?",
            options: ["Yes", "No"],
            function: (params) => SetBotData({ ...BotData, Stress_5: params.userInput }),
            chatDisabled: true,
            path: "stress_5"

        },

        stress_5: {

            message: "Have you experienced any major life chnages recently?",
            options: ["Yes", "No"],
            function: (params) => SetBotData({ ...BotData, Stress_6: params.userInput }),
            chatDisabled: true,
            path: "stress_6"

        },


        stress_6: {

            message: "How do you usually cope with stress?",
            options: ["Exercise", "Meditation", " Talking to friends/family", "Hobbies", "None of the above"],
            function: (params) => SetBotData({ ...BotData, Stress_7: params.userInput }),
            chatDisabled: true,
            path: "stress_7"

        },

        stress_7: {

            message: "How would you describe your activity levels?",
            options: ["Sedentary (Little or no exercise)", "Moderately Active (Moderate physical activity 3-5 days a week)", "Very Active (Regular gym-goer/running/sport)"],
            function: (params) => SetBotData({ ...BotData, Stress_8: params.userInput }),
            chatDisabled: true,
            path: "stress_8"

        },

        stress_8: {

            message: "For how many hours do you usually sleep at night?",
            options: ["Less than 6 hours", "6 to 8 hours", "8hours+"],
            function: (params) => SetBotData({ ...BotData, Stress_9: params.userInput }),
            chatDisabled: true,
            path: "stress_9"

        },

        stress_9: {

            message: "Which of the following do you identify with?",
            checkboxes: { items: ["I eat junk food regularly", "I usually skip meals", "I usually eat home-cooked meals", "None of the above"] },
            function: (params) => SetBotData({ ...BotData, Stress_10: params.userInput }),
            chatDisabled: true,
            path: "stress_10"

        },

        stress_10: {

            message: "Do you experience constipation and gas regularly?",
            options: ["Yes", "No"],
            function: (params) => SetBotData({ ...BotData, Stress_11: params.userInput }),
            chatDisabled: true,
            path: "stress_11"

        },

        stress_11: {

            message: "Which of the following apply to you?",
            checkboxes: { items: ["I smoke regularly", "I drink alcohol regularly", "I drink more than 3 caffeinated drinks per day", "None of the above"] },
            function: (params) => SetBotData({ ...BotData, Stress_12: params.userInput }),
            chatDisabled: true,
            path: "stress_12"

        },

        stress_12: {

            message: "Do you have an existing doctor prescription for your concerns?",
            options: ["Yes", "No"],
            function: (params) => SetBotData({ ...BotData, Stress_13: params.userInput }),
            chatDisabled: true,
            path: async (params) => {

                if (params.userInput == "Yes") {

                    return "stress_12_yes";
                }
                return "stress_end";
            }

        },

        stress_12_yes: {

            message: "Describe Medican and disease Or upload the Doctor Prescription",
            // function: (params) => SetBotData({ ...BotData, Stress_13_yes: params.userInput }),
            file: (params) => handleFileUpload(params),
            path: "stress_end"

        },

        stress_end: {

            message: "Thanks for sharing valuable health information to decide the required treatment or medication as you need immediately",
            chatDisabled: true,
            path: ""


        },




    }






    return (


        <>



            <section className='w-100 vh-100 d-flex justify-content-center align-items-center'>



                <ChatBot settings={settings} flow={flow} />



            </section>




        </>





    )














}

export default Bot