import React from 'react'
import ChatBot from "react-chatbotify";
import { Button } from 'react-chatbotify';

function Bot() {



    // Chat Bot Settings
    const settings = {

        general: { embedded: true, primaryColor: "#2a2a2a", secondaryColor: '#000' },
        chatHistory: { disabled: true },
        botBubble: { simStream: true, showAvatar: true },
        header: { title: (<div style={{ cursor: "pointer", margin: 0, fontSize: 20, fontWeight: "bold" }} >Self Assessment</div>) },
        notification: { disabled: true },

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
			chatDisabled: true,
            path: "phone"

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