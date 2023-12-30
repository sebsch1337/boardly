import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const headingFont = localFont({ src: "../public/fonts/font.woff2" });

interface LogoProps {
	hideText?: boolean;
	width: number;
	height: number;
}

export const Logo = ({ hideText = false, width, height }: LogoProps) => {
	return (
		<Link href="/">
			<div className="hover:opacity-75 transition flex items-center gap-x-2 ">
				<Image
					src="/logo.svg"
					width={width}
					height={height}
					alt="Logo"
				/>
				<p className={cn("text-lg text-neutral-700", headingFont.className, hideText && "hidden")}>Boardly</p>
			</div>
		</Link>
	);
};
