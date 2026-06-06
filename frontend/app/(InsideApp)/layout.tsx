"use client";
import BaseAppBar from "@/components/layout/AppBar";
import { Grid } from "@mui/material";

export default function InsideAppLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Grid
			sx={{
				minHeight: "100vh",
				backgroundColor: "#252235",
			}}
			color="white"
		>
			<BaseAppBar />
			{children}
		</Grid>
	);
}