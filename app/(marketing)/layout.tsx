import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-screen bg-slate-100 flex items-center justify-between flex-col">
			<Navbar />
			<main className=" bg-slate-100">{children}</main>
			{/* <main className="pt-40 pb-20 bg-slate-100">{children}</main> */}
			<Footer />
		</div>
	);
};

export default MarketingLayout;
