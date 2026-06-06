"use client";
import ClienteUsuarioFormLogin from "@/components/auth/ClienteUsuarioFormLogin";
import { ClienteUsuarioLoginRequestSchema, ClienteUsuarioLoginRequestType } from "@/hooks/auth/auth-types";
import useClienteUsuarioLogin from "@/hooks/auth/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { alpha, Box, Button, Card, CardContent, Container, Divider, Grid, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function LoginPage() {
	const { formState: { errors }, control, handleSubmit } = useForm({
		resolver: zodResolver(ClienteUsuarioLoginRequestSchema),
		defaultValues: {
			email: "",
			password: "",
		}
	})

	const router = useRouter();

	const { clienteUsuarioLogin } = useClienteUsuarioLogin();

	const onSubmit = async (data: ClienteUsuarioLoginRequestType) => {
		await clienteUsuarioLogin(data);

		router.push('/dashboard');
	}

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
					Login / Cadastro
				</Typography>
				<Typography
					variant="body2"
					sx={(theme) => ({ mt: 1, color: alpha(theme.palette.common.white, 0.78), lineHeight: 1.7 })}
				>
					Acesse sua conta para gerenciar seus pets ou crie uma nova em poucos passos.
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
						<ClienteUsuarioFormLogin control={control} errors={errors} />
						<Button
							fullWidth
							variant="contained"
							color="secondary"
							onClick={handleSubmit(onSubmit)}
							sx={(theme) => ({
								mt: 2,
								textTransform: "none",
								fontWeight: 900,
								color: theme.palette.common.black,
							})}
						>
							Entrar
						</Button>

						<Divider sx={(theme) => ({ my: 2.5, borderColor: alpha(theme.palette.common.white, 0.14) })} />

						<Button
							fullWidth
							href="/signUp"
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
							Criar conta
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
