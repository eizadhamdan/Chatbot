"use client";
import Image from "next/image";
import f1_chatbot_logo from "./assets/f1_chatbot_logo.jpg";
import { useChat } from "ai/react";
import { Message } from "ai";

const Home = () => {
  const { input, isLoading, messages, handleInputChange, handleSubmit } =
    useChat();

  const noMessages = true;

  return (
    <main>
      <Image src={f1_chatbot_logo} width={290} alt="F1 Chatbot Logo" />
      <h1 className="title-chatbot">Formula One Chatbot</h1>
      <section className={noMessages ? "" : "populated"}>
        {noMessages ? (
          <>
            <p className="starter-text">
              The Ultimate place for Formula One super fans! Ask F1Chatbot
              anything about the fantastic topic of F1 and it will come back
              with the most up-to-date answers. I hope you enjoy!
            </p>
            <br />
            {/* <PromptSuggestionRow/> */}
          </>
        ) : (
          <>
            {/* map messages onto text bubbles */}
            {/* <LoadingBubble/> */}
          </>
        )}
      </section>
      <form onSubmit={handleSubmit}>
        <input
          className="question-box"
          onChange={handleInputChange}
          value={input}
          placeholder="Ask me something..."
        />
        <input type="submit" />
      </form>
    </main>
  );
};

export default Home;
