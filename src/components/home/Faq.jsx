import React, { useState } from "react";
import {
    Row,
    Col,
    Card,
    Collapse,
    CardHeader,
    CardBody,
    Container,
} from "reactstrap";
import { LuMinus } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
const Faq = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        // This is outer div
        <div>
            <Card
                className="mb-3 border-0 p-2 bg-zinc-200"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
            >
                <CardHeader
                    onClick={toggleAccordion}
                    className={`${isOpen ? "border-0" :"border-1"} cursor-pointer bg-zinc-200`}
                >
                    
                    <div className={`${isOpen ? "font-bold bg-white" : ""} px-3 relative py-2 rounded-lg text-xl flex items-center justify-between`}>
                        <div className='text-xl'>
                            {question}
                        </div>

                        <div>
                            {isOpen ? (
                                <LuMinus
                                    size={30}
                                    className="mx-2 text-gray-400"
                                />
                            ) : (
                                <GoPlus
                                    size={30}
                                    className="mx-2 text-gray-400 font-bold"
                                />
                            )}
                        </div>
                    </div>
                </CardHeader>
                <Collapse isOpen={isOpen} className="bg-white mx-3 rounded-lg m-0">
                    <CardBody>
                        <div className="list-unstyled text-xl">{answer}</div>
                    </CardBody>
                </Collapse>
            </Card>
        </div>
    );
};

const FaqSection = () => {
    const faqs = [
        {
            question: "What is Animaker?",
            answer: "Animaker is an online video-making platform that can help beginners, professionals, and everyone else create animated and live-action videos in a matter of minutes.",
        },
        {
            question: "How to use Animaker?",
            answer: "Sign up with a free account on animaker.com, and that’s it. You can now use this awesome platform to create super cool videos.",
        },
        {
            question: "How much does Animaker cost?",
            answer: "There are different pricing plans (Free, Basic, Starter, Pro) available on Animaker. Check out the pricing page to know more about each plan.",
        },
        {
            question: "Is Animaker free?",
            answer: `Yes, there is a free-forever plan for Animaker available. You can signup for this plan via animaker.com. To enjoy other premium features, you can upgrade your subscription. Check out the pricing page to learn more about the different pricing plans available.`,
        },
        {
            question:
                "Is there a common plan to access the premium features of Animaker and its product ecosystem premium features?",
            answer: `We are in the process of building such a common plan to give access to Animaker’s suite of products. Kindly contact our support team for more details.`,
        },
    ];

    return (
        // This is the outer div
        <div className="">
            <h1
                className="text-center text-2xl  md:text-5xl font-bold  mx-auto mt-6 mb-4"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
            >
                Frequently Asked Questions
            </h1>
            <div data-aos="zoom-in-up" data-aos-duration="2000">
                {faqs.map((faq, index) => (
                    <Faq
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                    />
                ))}
            </div>
        </div>
    );
};

export default FaqSection;
