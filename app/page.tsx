"use client";

import Image from "next/image";
import f1_chatbot_logo from "./assets/f1_chatbot_logo.jpg";
import { useChat } from "ai/react";
import { Message } from "ai";
import Bubble from "./components/Bubble";
import LoadingBubble from "./components/LoadingBubble";
import PromptSuggestionRow from "./components/PromptSuggestionRow";

const Home = () => {
  const {
    input,
    isLoading,
    messages,
    handleInputChange,
    handleSubmit,
    append,
  } = useChat();

  const noMessages = !messages || messages.length === 0;

  const handlePrompt = (promptText) => {
    const msg: Message = {
      id: crypto.randomUUID(),
      content: promptText,
      role: "user",
    };
    append(msg);
  };

  return (
    <main>
      <Image src={f1_chatbot_logo} width={250} alt="F1 Chatbot Logo" />
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
            <PromptSuggestionRow onPromptClick={handlePrompt} />
          </>
        ) : (
          <>
            {messages.map((message, index) => (
              <Bubble key={`message-${index}`} message={message} />
            ))}
            {isLoading && <LoadingBubble />}
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
