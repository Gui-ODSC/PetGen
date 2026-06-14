"use client";
import BaseAppBar from "@/components/layout/AppBar";
import { Box } from "@mui/material";

const APP_BAR_HEIGHT = 64;

export default function InsideAppLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Box
			sx={{
				height: "100vh",
				backgroundColor: "#252235",
				overflow: "hidden",
			}}
			color="white"
		>
			<BaseAppBar />
			<Box
				sx={{
					pt: `${APP_BAR_HEIGHT}px`,
					height: "100%",
					boxSizing: "border-box",
					background:
						"radial-gradient(circle at top left, rgba(123, 224, 195, 0.18), transparent 28%), radial-gradient(circle at top right, rgba(255, 214, 107, 0.14), transparent 24%)",
					overflow: "hidden",
				}}
			>
				<Box
					sx={{
						height: "100%",
						px: { xs: 2, md: 4 },
						py: { xs: 3, md: 4 },
						boxSizing: "border-box",
						overflowY: "auto",
						overflowX: "hidden",
					}}
				>
					{children}
				</Box>
			</Box>
		</Box>
	);
}