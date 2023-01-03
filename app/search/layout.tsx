import Search from "./Search";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex bg-black">
      <div className="flex space-x-4 divide-x-2 p-5">
        {/*  @ts-ignore*/}
        <h1>Search</h1>
      </div>
      <div className="flex-1 pl-5">
        {/*  @ts-ignore*/}
        <Search />
        <div>{children}</div> {/* children = /search/page.tsx*/}
      </div>
    </main>
  );
}
