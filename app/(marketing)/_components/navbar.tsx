import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
	return (
		<div className="w-full h-14 p-4 border-b shadow-sm bg-white flex items-center">
			<div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
				<Logo
					width={30}
					height={30}
				/>
				<Button
					size="sm"
					variant="outline"
					asChild
				>
					<Link href="/sign-in">Login</Link>
				</Button>
			</div>
		</div>
	);
};
