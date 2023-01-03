import TodosList from "./TodosList";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex bg-black">
      <div className="flex-grow">
        {/*  @ts-ignore*/}
        <TodosList />
      </div>
      <div className="flex-1">{children}</div>
    </main>
  );
}
