import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen w-full bg-cloudy-base p-4">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* <Header /> */}

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
