"use client";

import ClienteUsuarioForm from "@/components/clienteUsuario/ClienteUsuarioForm";
import useClienteUsuarioCadastrar from "@/hooks/cliente-usuario/cliente-usuario-create";
import { ClienteUsuarioCreateRequestSchema, ClienteUsuarioCreateRequestType } from "@/hooks/cliente-usuario/cliente-usuario-type";
import { zodResolver } from "@hookform/resolvers/zod";
import { alpha, Box, Button, Card, CardContent, Container, Divider, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

export default function SignUp() {
	const { formState: { errors }, handleSubmit, control } = useForm({
		resolver: zodResolver(ClienteUsuarioCreateRequestSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
		}
	});

	const { clienteUsuarioCadastrar } = useClienteUsuarioCadastrar();

	const onSubmit = async (data: ClienteUsuarioCreateRequestType) => {
		await clienteUsuarioCadastrar(data);
	};

	return (
		<Box
			sx={(theme) => ({
				minHeight: "100vh",
				pt: { xs: 15, sm: 20 },
				pb: { xs: 6, sm: 8 },
				color: "secondary",
				backgroundImage: [
					`linear-gradient(${alpha(theme.palette.common.black, 0.05)}, ${alpha(
						theme.palette.common.black,
						0.65,
					)})`,
					"url(/teste.png)",
				].join(", "),
				backgroundSize: {
					xs: "cover, cover",
					md: "cover, cover",
				},
				backgroundPosition: {
					xs: "center, center",
					md: "center, center",
				},
				backgroundRepeat: "no-repeat, no-repeat",
				"&::before": {
					content: '""',
					position: "absolute",
					inset: 0,
					background: `linear-gradient(180deg, ${alpha(
						theme.palette.common.black,
						0.25,
					)} 0%, ${alpha(theme.palette.common.black, 0.55)} 100%)`,
					pointerEvents: "none",
				},
				"& > *": {
					position: "relative",
					zIndex: 1,
				},
			})}
		>
			<Container maxWidth="sm">
				<Typography variant="h4" color="secondary" sx={{ fontWeight: 800, letterSpacing: 0.2 }}>
					Crie sua conta
				</Typography>
				<Typography
					variant="body2"
					sx={(theme) => ({ mt: 1, color: alpha(theme.palette.common.white, 0.78), lineHeight: 1.7 })}
				>
					Monte seu perfil para acompanhar pets, histórico e próximos cuidados em um só lugar.
				</Typography>

				<Card
					variant="outlined"
					sx={(theme) => ({
						mt: 3,
						borderColor: alpha(theme.palette.common.white, 0.16),
						backgroundColor: alpha(theme.palette.common.white, 0.06),
						backdropFilter: "blur(10px)",
					})}
				>
					<CardContent sx={{ p: { xs: 3, sm: 3.5 } }}>
						<ClienteUsuarioForm control={control} errors={errors} />

						<Button
							fullWidth
							variant="contained"
							color="secondary"
							sx={(theme) => ({
								mt: 2,
								textTransform: "none",
								fontWeight: 900,
								color: theme.palette.common.black,
							})}
							onClick={handleSubmit(onSubmit)}
						>
							Criar conta
						</Button>

						<Divider sx={(theme) => ({ my: 2.5, borderColor: alpha(theme.palette.common.white, 0.14) })} />

						<Button
							fullWidth
							href="/login"
							variant="outlined"
							color="secondary"
							sx={(theme) => ({
								textTransform: "none",
								fontWeight: 800,
								borderColor: alpha(theme.palette.common.white, 0.22),
								backgroundColor: alpha(theme.palette.common.white, 0.03),
								"&:hover": {
									borderColor: alpha(theme.palette.common.white, 0.32),
									backgroundColor: alpha(theme.palette.common.white, 0.08),
								},
							})}
						>
							Já tenho conta
						</Button>

						<Button
							component="a"
							href="/"
							color="secondary"
							size="small"
							sx={(theme) => ({
								mt: 2,
								textTransform: "none",
								color: alpha(theme.palette.common.white, 0.78),
								"&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.06) },
							})}
						>
							Voltar para a landing
						</Button>
					</CardContent>
				</Card>
			</Container>
		</Box>
	);
}