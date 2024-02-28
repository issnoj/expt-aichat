import { Chat } from '@/components/chat/chat';

export default function Home() {
  return (
    <main className="grid h-screen grid-rows-[100px,1fr]">
      <h1 className={'grid place-content-center text-3xl font-bold'}>
        expt-aichat
      </h1>
      <div className={'bg-secondary p-24'}>
        <div className={'grid place-content-center'}>
          <Chat />
        </div>
      </div>
    </main>
  );
}
