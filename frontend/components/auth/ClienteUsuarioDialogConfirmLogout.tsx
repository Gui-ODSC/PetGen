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
		<Dialog open={open} onClose={onClose}>
			<DialogTitle sx={{ backgroundColor: "black", border: 1, padding: 1.5 }} >
				<Typography fontSize={15} color="secondary" fontWeight={"bold"}>Deseja realmente sair?</Typography>
			</DialogTitle>
			<DialogContent sx={{ padding: 0 }}>
				<Typography
					fontSize={14}
					sx={{
						m: 3,
						display: "flex",
						alignContent: "center"
					}}>
					Clique no botão "Sair" para confirmar.
				</Typography>
			</DialogContent>
			<Divider />
			<DialogActions sx={{ display: "flex", justifyContent: "space-between" }}>
				<Button disabled={clienteUsuarioLogoutIsLoading} size="small" variant="contained" onClick={onClose}>Cancelar</Button>
				<Button disabled={clienteUsuarioLogoutIsLoading} size="small" variant="contained" color="error" onClick={logoutHandler}>Sair</Button>
			</DialogActions>
		</Dialog >
	);
}