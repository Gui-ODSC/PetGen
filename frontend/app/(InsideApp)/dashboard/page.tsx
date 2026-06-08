import BaseAppBar from "@/components/layout/AppBar";
import { Grid, Typography } from "@mui/material";

export default function DashboardPage() {
	return (
		<Grid container display={"flex"} mt={3} justifyContent={"center"}>
			<Grid display={"flex"} flexDirection={"column"} alignItems={"center"}>
				<Typography variant="h4">Dashboard</Typography>
				<Typography>Bem-vindo ao dashboard!</Typography>
			</Grid>
		</Grid>
	);
}