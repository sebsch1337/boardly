import Link from "next/link";

import localFont from "next/font/local";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

const headingFont = localFont({ src: "../../public/fonts/font.woff2" });
const textFont = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

const MarketingPage = () => {
	return (
		<div className="flex items-center justify-center flex-col">
			<div className={cn("flex items-center justify-center flex-col", headingFont.className)}>
				<Logo
					width={150}
					height={150}
					hideText={true}
				/>
				<h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
					Accelerate Your Team&apos;s
					<span className="mx-auto text-6xl md:text-8xl bg-gradient-to-r from-fuchsia-600 to-pink-600  text-transparent bg-clip-text w-fit block p-4">
						Progress.
					</span>
				</h1>
			</div>
			<div className={cn("text-sm md:text-xl text-neutral-400 max-w-xs md:max-w-2xl text-center mx-auto", textFont.className)}>
				Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team
				works is unique - accomplish it all with Boardly.
			</div>
			<Button
				className="mt-6"
				size="lg"
				asChild
			>
				<Link href="/sign-up">Get Boardly for free</Link>
			</Button>
		</div>
	);
};

export default MarketingPage;
