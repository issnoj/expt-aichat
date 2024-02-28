import { Message } from 'ai';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css'; // `rehype-katex` does not import the CSS for you
import { CodeBlock } from './code-block';
import { MemoizedReactMarkdown } from './markdown';

type Props = {
  message: Message;
};

export const ChatMessage = ({ message }: Props) => {
  return (
    <div className="rounded bg-background p-4 shadow">
      <div className="font-bold">{message.role}</div>
      <div className="mt-1 overflow-hidden">
        <MemoizedReactMarkdown
          className="break-words leading-relaxed"
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex]}
          components={{
            p({ children }) {
              return <p className="my-4 last:mb-0">{children}</p>;
            },
            code({ node, className, children, ...rest }) {
              const match = /language-(\w+)/.exec(className || '');
              return match ? (
                <CodeBlock
                  {...rest}
                  key={Math.random()}
                  language={(match && match[1]) || ''}
                  value={String(children).replace(/\n$/, '')}
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },
          }}
        >
          {message.content}
        </MemoizedReactMarkdown>
      </div>
    </div>
  );
};
