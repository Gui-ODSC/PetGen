import useLogout from "@/hooks/auth/logout";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function ClienteUsuarioDialogConfirmLogout({ open, onClose }: { open: boolean, onClose: () => void }) {
	const { clienteUsuarioLogout, clienteUsuarioLogoutIsLoading } = useLogout();

	const router = useRouter();

	const logoutHandler = async () => {
		await clienteUsuarioLogout();
		router.push("/login");
		onClose();
	}

	return (
		<Dialog open={open} onClose={onClose} fullWidth maxWidth="xs" PaperProps={{
			sx: {
				backgroundColor: "#252235",
				overflow: "hidden",
				borderRadius: 1,
				boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)"
			},
		}}
		>
			<DialogTitle sx={{
				backgroundColor: "black"
			}}
			>
				<Typography fontSize={15} color="secondary" fontWeight={"bold"}>Deseja realmente sair?</Typography>
			</DialogTitle >
			<DialogContent sx={{ padding: 0, color: "secondary.main" }}>
				<Typography
					fontSize={14}
					sx={{
						m: 3,
						display: "flex",
						textAlign: "center",
						justifyContent: "center",
					}}>
					Clique no botão "Sair" para confirmar.
				</Typography>
			</DialogContent>
			<Divider />
			<DialogActions sx={{ display: "flex", padding: 1.5, justifyContent: "space-between", backgroundColor: "#252235" }}>
				<Button disabled={clienteUsuarioLogoutIsLoading} size="small" variant="contained" onClick={onClose}>Cancelar</Button>
				<Button disabled={clienteUsuarioLogoutIsLoading} size="small" variant="contained" color="error" onClick={logoutHandler}>Sair</Button>
			</DialogActions>
		</Dialog >
	);
}