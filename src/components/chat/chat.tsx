'use client';

import { Button } from '@/components/ui/button';
import { useChat } from 'ai/react';
import { Send } from 'lucide-react';
import TextareaAutosize from 'react-textarea-autosize';
import { ChatMessage } from './chat-message';

export const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="w-[600px]">
      <div className="flex flex-col gap-8">
        {messages.length === 0 && (
          <p className="text-primary/60">Chat Area...</p>
        )}
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>

      <hr className="my-8" />

      <form onSubmit={handleSubmit}>
        <div className="relative flex rounded border border-transparent bg-background focus-within:border-primary">
          <TextareaAutosize
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
            className="w-full resize-none border-0 bg-transparent py-4 pl-4 pr-[50px] focus:outline-0 focus-visible:outline-0"
            rows={1}
          />
          <Button size="icon" className="absolute bottom-2 right-2 mt-4">
            <Send size="1em" />
          </Button>
        </div>
      </form>
    </div>
  );
};
