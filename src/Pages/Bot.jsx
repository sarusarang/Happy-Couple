import React, { useState } from 'react'
import ChatBot from "react-chatbotify";
import { useNavigate } from 'react-router-dom'


function Bot() {



    // Chat Bot Data
    const [BotData, SetBotData] = useState({})



    const Navigate = useNavigate()


    // Handle File Uploads
    const handleFileUpload = (params) => {




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
                return "wellness_1";
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

            message: "Enter Your Height In Cm",
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

            message: "Enter Your Weight In KG",
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
            checkboxes: { items: ["High Diabetes", "Diabetes", "High BP", "Low BP", "High Cholesterol", "Thyroid issues", "Creatinine issues", "Cardiac issues", "None of the Above"] },
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
            function: (params) => SetBotData({ ...BotData, sex_activitylevel: params.userInput }),
            chatDisabled: true,
            path: "stress_8"

        },

        stress_8: {

            message: "For how many hours do you usually sleep at night?",
            options: ["Less than 6 hours", "6 to 8 hours", "8hours+"],
            function: (params) => SetBotData({ ...BotData, Sleep_patterns: params.userInput }),
            chatDisabled: true,
            path: "stress_9"

        },

        stress_9: {

            message: "Diet and Eating Habits \nWhich of the following do you identify with?",
            checkboxes: { items: ["I eat junk food regularly", "I usually skip meals", "I usually eat home-cooked meals", "None of the above"] },
            function: (params) => SetBotData({ ...BotData, Eat_habit: params.userInput }),
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

            message: "Lifestyle Habits \nWhich of the following apply to you?",
            checkboxes: { items: ["I smoke regularly", "I drink alcohol regularly", "I drink more than 3 caffeinated drinks per day", "None of the above"] },
            function: (params) => SetBotData({ ...BotData, Life_habit: params.userInput }),
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
            function: (params) => SetBotData({ ...BotData, Stress_13_yes: params.userInput }),
            file: (params) => handleFileUpload(params),
            path: "stress_end"

        },

        stress_end: {

            message: "Thanks for sharing valuable health information to decide the required treatment or medication as you need immediately",
            chatDisabled: true,
            path: ""


        },


        // Sexual Wellness Flow

        wellness_1: {

            message: "Share your Main Concern you need a complete solution",
            options: ["Erectile Dysfunction (ED)", "Premature Ejaculation (PE)", "Low sexual interest / Poor Satisfaction"],
            function: (params) => SetBotData({ ...BotData, wellness_2: params.userInput }),
            chatDisabled: true,
            path: async (params) => {

                if (params.userInput == "Erectile Dysfunction (ED)") {

                    return "ED_1";
                }

                return "wellness_2";
            }

        },

        wellness_2: {

            message: "Provide Your Basic Information",
            chatDisabled: true,
            transition: { duration: 200 },
            path: "wellness_2_age"

        },

        wellness_2_age: {

            message: "Enter Your Age",
            function: (params) => SetBotData({ ...BotData, age: params.userInput }),
            path: async (params) => {

                if (isNaN(Number(params.userInput))) {

                    await params.injectMessage("Ops needs to be a number!");
                    return;
                }
                return "wellness_2_sex";
            }
        },

        wellness_2_sex: {

            message: "Please Select Your Sex",
            options: ["Male", "Female", "Others"],
            chatDisabled: true,
            function: (params) => SetBotData({ ...BotData, sex: params.userInput }),
            path: "wellness_2_height"
        },

        wellness_2_height: {

            message: "Enter Your Height In Cm",
            function: (params) => SetBotData({ ...BotData, height: params.userInput }),
            path: async (params) => {

                if (isNaN(Number(params.userInput))) {

                    await params.injectMessage("Ops needs to be a number!");
                    return;
                }
                return "wellness_2_weight"
            }
        },

        wellness_2_weight: {

            message: "Enter Your Weight In KG",
            function: (params) => SetBotData({ ...BotData, weight: params.userInput }),
            path: async (params) => {

                if (isNaN(Number(params.userInput))) {

                    await params.injectMessage("Ops needs to be a number!")
                    return;
                }
                return "wellness_3"
            }
        },

        wellness_3: {

            message: "Your Medical History",
            checkboxes: { items: ["High Diabetes", "Diabetes", "High BP", "Low BP", "High Cholesterol", "Thyroid issues", "Creatinine issues", "Cardiac issues", "None of the above"] },
            function: (params) => SetBotData({ ...BotData, medical_history: params.userInput }),
            chatDisabled: true,
            path: "wellness_4"

        },


        wellness_4: {

            message: "Which of the following do you identify with?",
            options: ["I ejaculate before penetration", "I find myself ejaculating too early during sex", "I have no issues with ejaculation"],
            function: (params) => SetBotData({ ...BotData, wellness_5: params.userInput }),
            chatDisabled: true,
            path: "wellness_5"

        },

        wellness_5: {

            message: "Have You issue with erectile dysfunction ?",
            options: ["Yes", "No"],
            function: (params) => SetBotData({ ...BotData, wellness_6: params.userInput }),
            chatDisabled: true,
            path: "wellness_6"

        },

        wellness_6: {

            message: "What is your Sexual Activity Frequency?",
            options: ["Daily", "Once a week", "More than once a week", "Less than once a week", "Don't keep track", "It's been a while since I have been active"],
            function: (params) => SetBotData({ ...BotData, wellness_7: params.userInput }),
            chatDisabled: true,
            path: "wellness_7"

        },

        wellness_7: {

            message: "How would you describe your activity levels?",
            options: ["Sedentary (Little or no exercise)", "Moderately Active (Moderate physical activity 3-5 days a week)", "Very Active (Regular gym-goer/running/sport)"],
            function: (params) => SetBotData({ ...BotData, sex_activitylevel: params.userInput }),
            chatDisabled: true,
            path: "wellness_8"

        },

        wellness_8: {

            message: "Which of the following do you identify with?",
            checkboxes: { items: ["I eat junk food regularly", "I usually skip meals", "I usually eat home-cooked meals", "None of the above"] },
            function: (params) => SetBotData({ ...BotData, Eat_habit: params.userInput }),
            chatDisabled: true,
            path: "wellness_9"

        },

        wellness_9: {

            message: "Do you experience stress regularly?",
            options: ["I am under a lot of stress", "Have been more stressed lately", "The normal stress of regular life", "No Stress"],
            function: (params) => SetBotData({ ...BotData, wellness_10: params.userInput }),
            chatDisabled: true,
            path: "wellness_10"

        },

        wellness_10: {

            message: "Your Sleep Patterns",
            options: ["Less than 6 hours", "6 to 8 hours", "8hours+"],
            function: (params) => SetBotData({ ...BotData, Sleep_patterns: params.userInput }),
            chatDisabled: true,
            path: "wellness_11"

        },

        wellness_11: {

            message: "Do you experience constipation and gas regularly?",
            options: ["Yes", "No"],
            function: (params) => SetBotData({ ...BotData, wellness_12: params.userInput }),
            chatDisabled: true,
            path: "wellness_12"

        },

        wellness_12: {

            message: "Lifestyle Habits",
            checkboxes: { items: ["I smoke regularly", "I drink alcohol regularly", "I drink more than 3 caffeinated drinks per day", "None of the above"] },
            function: (params) => SetBotData({ ...BotData, Life_habit: params.userInput }),
            chatDisabled: true,
            path: "wellness_13"

        },

        wellness_13: {

            message: "Are you taking any medicine continuously?",
            options: ["Yes", "No"],
            function: (params) => SetBotData({ ...BotData, wellness_14: params.userInput }),
            chatDisabled: true,
            path: async (params) => {

                if (params.userInput == "Yes") {

                    return "wellness_13_yes";
                }

                return "wellness_14";
            }

        },


        wellness_13_yes: {

            message: "Describe Medican and Disease?",
            function: (params) => SetBotData({ ...BotData, wellness_14_yes: params.userInput }),
            path: "wellness_14"

        },


        wellness_14: {

            message: "If you have any existing doctor prescriptions for your concerns?",
            options: ["Yes", "No"],
            function: (params) => SetBotData({ ...BotData, wellness_15: params.userInput }),
            chatDisabled: true,
            path: async (params) => {

                if (params.userInput == "Yes") {

                    return "wellness_14_yes";
                }

                return "wellness_15";
            }

        },

        wellness_14_yes: {

            message: "Upload the latest prescriptions",
            file: (params) => handleFileUpload(params),
            path: "wellness_15"

        },

        wellness_15: {

            message: "Thanks for sharing valuable health information to decide the required treatment/medication as you need immediately",
            path: ""

        },


        // Erectile Dysfunction (ED)
        ED_1: {

            message: "Which of the following issues do you idented?",
            options: ["Occasionally, my erection is not hard enough to penetrate", "usually find it difficult to maintain an erection", "For some days/Months not to get an erection", "I am so crazy about having sex, but my erection level is Zero", "I have no issues in maintaining my erection"],
            function: (params) => SetBotData({ ...BotData, ED_3: params.userInput }),
            chatDisabled: true,
            path: "ED_2"

        },

        ED_2: {

            message: "Have You issues with Premature Ejaculation?",
            options: ["Yes", "No"],
            function: (params) => SetBotData({ ...BotData, ED_4: params.userInput }),
            chatDisabled: true,
            path: "ED_3"

        },

        ED_3: {

            message: "Provide Your Personal Information",
            chatDisabled: true,
            transition: { duration: 200 },
            path: "ED_3_age"

        },

        ED_3_age: {

            message: "Enter Your Age",
            function: (params) => SetBotData({ ...BotData, age: params.userInput }),
            path: async (params) => {

                if (isNaN(Number(params.userInput))) {

                    await params.injectMessage("Ops needs to be a number!");
                    return;
                }
                return "ED_3_sex";
            }
        },

        ED_3_sex: {

            message: "Please Select Your Sex",
            options: ["Male", "Female", "Others"],
            chatDisabled: true,
            function: (params) => SetBotData({ ...BotData, sex: params.userInput }),
            path: "ED_3_height"
        },

        ED_3_height: {

            message: "Enter Your Height In Cm",
            function: (params) => SetBotData({ ...BotData, height: params.userInput }),
            path: async (params) => {

                if (isNaN(Number(params.userInput))) {

                    await params.injectMessage("Ops needs to be a number!");
                    return;
                }
                return "ED_3_weight"
            }
        },

        ED_3_weight: {

            message: "Enter Your Weight In KG",
            function: (params) => SetBotData({ ...BotData, weight: params.userInput }),
            path: async (params) => {

                if (isNaN(Number(params.userInput))) {

                    await params.injectMessage("Ops needs to be a number!")
                    return;
                }
                return "ED_4"
            }
        },

        ED_4: {

            message: "Your Medical History",
            checkboxes: { items: ["High Diabetes", "Diabetes", "High BP", "Low BP", "High Cholesterol", "Thyroid issues", "Creatinine issues", "Cardiac issues", "None of the above"] },
            function: (params) => SetBotData({ ...BotData, medical_history: params.userInput }),
            chatDisabled: true,
            path: "ED_5"

        },


        ED_5: {

            message: "How would you describe your activity levels?",
            options: ["Sedentary (Little or no exercise)", "Moderately Active (Moderate physical activity 3-5 days a week)", "Very Active (Regular gym-goer/running/sport)"],
            function: (params) => SetBotData({ ...BotData, sex_activitylevel: params.userInput }),
            chatDisabled: true,
            path: "ED_6"

        },


        ED_6: {

            message: "Which of the following do you identify with?",
            checkboxes: { items: ["I eat junk food regularly", "I usually skip meals", "I usually eat home-cooked meals", "None of the above"] },
            function: (params) => SetBotData({ ...BotData, Eat_habit: params.userInput }),
            chatDisabled: true,
            path: "ED_7"

        },

        ED_7: {

            message: "Do you experience constipation and gas regularly?",
            options: ["Yes", "No"],
            function: (params) => SetBotData({ ...BotData, ED_9: params.userInput }),
            chatDisabled: true,
            path: "ED_8"

        },

        ED_8: {

            message: "Do you experience stress regularly?",
            options: ["I am under a lot of stress", "Have been more stressed lately", "The normal stress of regular life", "No Stress"],
            function: (params) => SetBotData({ ...BotData, ED_10: params.userInput }),
            chatDisabled: true,
            path: "ED_9"

        },

        ED_9: {

            message: "Your Sleep Patterns",
            options: ["Less than 6 hours", "6 to 8 hours", "8hours+"],
            function: (params) => SetBotData({ ...BotData, Sleep_patterns: params.userInput }),
            chatDisabled: true,
            path: "ED_10"

        },

        ED_10: {

            message: "Lifestyle Habits",
            checkboxes: { items: ["I smoke regularly", "I drink alcohol regularly", "I drink more than 3 caffeinated drinks per day", "None of the above"] },
            function: (params) => SetBotData({ ...BotData, Life_habit: params.userInput }),
            chatDisabled: true,
            path: "ED_11"

        },

        ED_11: {

            message: "Are you concerned about the side effects of erectile dysfunction medications, and would you prefer an alternative treatment that doesn't involve medication?",
            options: ["Yes", "No"],
            function: (params) => SetBotData({ ...BotData, ED_13: params.userInput }),
            chatDisabled: true,
            path: async (params) => {

                if (params.userInput == "Yes") {

                    return "ED_11_yes";
                }

                return "ED_12";
            }

        },


        ED_11_yes: {

            message: "Based on your response, we recommend considering the Erectaid Vacuum Therapy Device. This device is ideal for individuals who are concerned about medication side effects or have conditions like high blood pressure or cardiac issues.",
            chatDisabled: true,
            transition: { duration: 200 },
            path: "ED_11_yes_2"
        },

        ED_11_yes_2: {

            message: "Erectaid Vacuum Therapy Device:\n- Safe and effective\n- No medication side effects\n- Suitable for users with high blood pressure and cardiac conditions",
            chatDisabled: true,
            transition: { duration: 200 },
            path: "ED_12"
        },


        ED_12: {

            message: "Are you taking any treatments?",
            options: ["Yes", "No"],
            function: (params) => SetBotData({ ...BotData, ED_14: params.userInput }),
            chatDisabled: true,
            path: async (params) => {

                if (params.userInput == "Yes") {

                    return "ED_12_yes";
                }

                return "ED_end";
            }

        },


        ED_12_yes: {

            message: "Describe Medican and disease Or upload the Doctor Prescription",
            function: (params) => SetBotData({ ...BotData, ED_14_yes: params.userInput }),
            file: (params) => handleFileUpload(params),
            path: "ED_end"

        },


        ED_end: {

            message: "Thanks for sharing valuable health information to decide the required treatment Or medication you need immediately",
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