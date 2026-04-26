"use client";

import {
	AppBar,
	Box,
	Button,
	Card,
	CardContent,
	Container,
	Divider,
	Grid,
	Toolbar,
	Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import PetsIcon from '@mui/icons-material/Pets';
import Image from "next/image";

const NAV_ITEMS = [
	{ label: "Home", href: "#principal" },
	{ label: "Solutions", href: "#servicos" },
	{ label: "Pricing", href: "#precos" },
	{ label: "Enterprise", href: "#sobre" },
] as const;

const SECTION_SX = {
	scrollMarginTop: { xs: 55, sm: 65 },
	py: { xs: 7, sm: 10 },
	minHeight: { xs: "100vh", sm: "100vh" },
} as const;

export default function LandingPage() {
	return (
		<Box>
			<AppBar
				position="fixed"
				elevation={0}
				color="transparent"
				sx={(theme) => ({
					borderBottom: 1,
					borderColor: "divider",
					backgroundColor: "#251034",
					backdropFilter: "blur(10px)",
				})}
			>
				<Toolbar sx={{ gap: 2 }}>
					<Typography
						variant="h6"
						component="div"
						color="secondary"
						sx={{
							fontWeight: 700,
							letterSpacing: 0.2,
							flexGrow: 1,
						}}
					>
						<Button color="secondary" size="small" href="#principal" sx={{ textTransform: "none", fontWeight: 700, fontSize: "1.25rem", alignItems: "center", gap: 0.5 }}>
							<PetsIcon sx={{ mr: 0.5, fontSize: "1.5rem" }} />
							<Typography variant="h6" component="span" sx={{ fontWeight: 700, letterSpacing: 0.2 }}>
								PetGen
							</Typography>
						</Button>
					</Typography>

					<Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
						{NAV_ITEMS.map((item) => (
							<Button
								key={item.href}
								component="a"
								href={item.href}
								color="secondary"
								size="large"
								sx={{ textTransform: "none", fontWeight: 500 }}
							>
								{item.label}
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>

			<Box component="main" sx={{ pt: { xs: 7, sm: 8 } }}>
				<Box
					id="principal"
					component="section"
					sx={(theme) => ({
						...SECTION_SX,
						display: "flex",
						alignItems: "center",
						position: "relative",
						color: theme.palette.common.white,
						backgroundImage: [
							`linear-gradient(${alpha(theme.palette.common.black, 0.00)}, ${alpha(
								theme.palette.common.black,
								0.55,
							)})`,
							"url(/landing-page-base.png)",
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
					})}
				>
					<Container maxWidth="lg">
						<Grid container spacing={4} alignItems="center">
							<Grid item xs={12} md={7}>
								<Typography
									variant="h1"
									sx={{
										fontSize: { xs: "2.2rem", sm: "3rem", md: "3.4rem" },
										lineHeight: 1.1,
									}}
								>
									Gerencie seus pets com simplicidade.
								</Typography>
								<Typography
									variant="body1"
									sx={{
										mt: 2,
										maxWidth: 640,
										opacity: 0.92,
									}}
								>
									Um sistema de gerenciamento de pets para acompanhar cadastro,
									serviços, planos e informações essenciais em um só lugar.
								</Typography>
							</Grid>
						</Grid>
					</Container>
				</Box>

				<Box
					id="servicos"
					component="section"
					sx={(theme) => ({
						...SECTION_SX,
						position: "relative",
						overflow: "hidden",
						color: theme.palette.common.white,
						background:
							"radial-gradient(circle at 30% 30%, rgba(90, 40, 140, 0.35), transparent 50%), linear-gradient(120deg, #191230, #371650)",
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
					<Container maxWidth="lg" sx={{ pt: { xs: 0, sm: 0, md: 3, lg: 7, xl: 9 } }}>
						<Typography
							variant="h4"
							color="secondary"
							sx={{ fontWeight: 800, letterSpacing: 0.2 }}
						>
							Serviços
						</Typography>
						<Typography
							variant="body1"
							color="secondary"
							sx={{ mt: 1, opacity: 0.9, maxWidth: 680 }}
						>
							Organize o atendimento e padronize a rotina.
						</Typography>
						<Typography
							variant="body2"
							sx={(theme) => ({
								mt: 1,
								maxWidth: 820,
								color: alpha(theme.palette.common.white, 0.78),
								lineHeight: 1.7,
							})}
						>
							Tenha uma visão clara do que foi cadastrado, do que está em andamento e do que
							precisa de atenção — com informações centralizadas para reduzir retrabalho e
							aumentar a previsibilidade do dia a dia.
						</Typography>

						<Grid container spacing={3} sx={{ mt: 3 }}>
							{[
								{
									title: "Cadastro de pets",
									desc: "Centralize informações e mantenha dados sempre atualizados.",
									bullets: [
										"Dados do tutor e contatos em um só lugar",
										"Anotações importantes do pet (alergias, observações)",
										"Histórico para consultas rápidas",
										"Upload de fotos e documentos do pet",
										"Controle de vacinas e datas importantes",
										"Identificação rápida por tags ou categorias",
									],
								},
								{
									title: "Gestão de serviços",
									desc: "Registre o que foi feito e acompanhe entregas com clareza.",
									bullets: [
										"Registro por data e responsável",
										"Status do atendimento e próximas etapas",
										"Padronização do atendimento no time",
										"Histórico detalhado de serviços realizados",
										"Agendamento integrado com calendário",
										"Observações específicas por atendimento",
									],
								},
								{
									title: "Planos e recorrência",
									desc: "Defina planos e facilite o controle do que está ativo.",
									bullets: [
										"Controle do que está ativo e do que venceu",
										"Rotina previsível para serviços recorrentes",
										"Apoio para acompanhar evolução ao longo do tempo",
										"Configuração flexível de planos personalizados",
										"Alertas de renovação e vencimento",
										"Visão geral dos clientes recorrentes",
									],
								},
							].map((item) => (
								<Grid key={item.title} item xs={12} md={4}>
									<Card
										variant="outlined"
										sx={(theme) => ({
											height: "100%",
											position: "relative",
											overflow: "hidden",
											borderColor: alpha(theme.palette.common.white, 0.16),
											backgroundColor: alpha(theme.palette.common.white, 0.06),
											backdropFilter: "blur(10px)",
											"&::before": {
												content: '""',
												position: "absolute",
												top: 0,
												left: 0,
												right: 0,
												height: 2,
												background: `linear-gradient(90deg, ${alpha(
													theme.palette.common.white,
													0,
												)} 0%, ${alpha(theme.palette.common.white, 0.55)} 50%, ${alpha(
													theme.palette.common.white,
													0,
												)} 100%)`,
											},
											"&:hover": {
												borderColor: alpha(theme.palette.common.white, 0.28),
												backgroundColor: alpha(theme.palette.common.white, 0.085),
											},
										})}
									>
										<CardContent sx={{ p: { xs: 3, sm: 3.5 } }}>
											<Typography
												variant="h6"
												color="secondary"
												sx={{ fontWeight: 800, letterSpacing: 0.1 }}
											>
												{item.title}
											</Typography>
											<Typography
												variant="body2"
												sx={(theme) => ({
													mt: 1.25,
													color: alpha(theme.palette.common.white, 0.78),
													lineHeight: 1.6,
												})}
											>
												{item.desc}
											</Typography>
											<Divider
												sx={(theme) => ({
													my: 2,
													borderColor: alpha(theme.palette.common.white, 0.14),
												})}
											/>
											<Typography
												variant="subtitle2"
												sx={(theme) => ({
													fontWeight: 800,
													letterSpacing: 0.2,
													color: alpha(theme.palette.common.white, 0.9),
												})}
											>
												O que você ganha
											</Typography>
											<Box
												component="ul"
												sx={(theme) => ({
													pl: 2,
													mt: 1,
													mb: 0,
													color: alpha(theme.palette.common.white, 0.78),
													lineHeight: 1.7,
												})}
											>
												{item.bullets.map((text) => (
													<Box key={text} component="li" sx={{ mt: 0.5 }}>
														<Typography
															variant="body2"
															sx={(theme) => ({ color: alpha(theme.palette.common.white, 0.78) })}
														>
															{text}
														</Typography>
													</Box>
												))}
											</Box>
										</CardContent>
									</Card>
								</Grid>
							))}
						</Grid>
					</Container>
				</Box>

				<Box
					id="precos"
					component="section"
					sx={(theme) => ({
						...SECTION_SX,
						display: "flex",
						position: "relative",
						overflow: "hidden",
						color: theme.palette.common.white,
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
					<Container maxWidth="lg" sx={{ pt: { xs: 0, sm: 0, md: 3, lg: 7, xl: 9 } }}>
						<Typography
							variant="h4"
							color="secondary"
							sx={{ fontWeight: 800, letterSpacing: 0.2 }}
						>
							Preços
						</Typography>
						<Typography
							variant="body1"
							color="secondary"
							sx={{ mt: 1, opacity: 0.9, maxWidth: 680 }}
						>
							Planos pensados para diferentes tamanhos de operação.
						</Typography>

						<Grid container spacing={3} sx={{ mt: 3 }}>
							{[
								{
									title: "Básico",
									desc: "Para começar a organizar sua base.",
									price: "R$ 49/mês",
									bullets: [
										"Até 100 pets cadastrados",
										"Cadastro completo de pets e tutores",
										"Histórico básico de atendimentos",
										"Registro manual de serviços",
										"Controle simples de planos",
										"1 usuário",
										"Suporte por e-mail",
									],
								},
								{
									title: "Profissional",
									desc: "Para rotinas com mais volume.",
									price: "R$ 99/mês",
									bullets: [
										"Até 500 pets cadastrados",
										"Tudo do plano Básico",
										"Gestão completa de serviços",
										"Agendamento com calendário",
										"Controle de recorrência automatizado",
										"Alertas de vencimento e lembretes",
										"Até 5 usuários",
										"Relatórios básicos",
										"Suporte prioritário",
									],
								},
								{
									title: "Empresa",
									desc: "Para equipes e operação maior.",
									price: "R$ 199/mês",
									bullets: [
										"Pets ilimitados",
										"Tudo do plano Profissional",
										"Múltiplos usuários (ilimitado)",
										"Controle avançado de planos e recorrência",
										"Relatórios completos e métricas",
										"Gestão de equipe (permissões)",
										"Personalização de atendimento",
										"Exportação de dados",
										"Suporte prioritário + atendimento rápido",
									],
								},
							].map((plan) => (
								<Grid key={plan.title} item xs={12} md={4}>
									<Card
										variant="outlined"
										sx={(theme) => ({
											height: "100%",
											position: "relative",
											overflow: "hidden",
											borderColor: alpha(theme.palette.common.white, 0.16),
											backgroundColor: alpha(theme.palette.common.white, 0.06),
											backdropFilter: "blur(10px)",
											"&::before": {
												content: '""',
												position: "absolute",
												top: 0,
												left: 0,
												right: 0,
												height: 2,
												background: `linear-gradient(90deg, ${alpha(
													theme.palette.common.white,
													0,
												)} 0%, ${alpha(theme.palette.common.white, 0.55)} 50%, ${alpha(
													theme.palette.common.white,
													0,
												)} 100%)`,
											},
											"&:hover": {
												borderColor: alpha(theme.palette.common.white, 0.28),
												backgroundColor: alpha(theme.palette.common.white, 0.085),
											},
										})}
									>
										<CardContent sx={{ p: { xs: 3, sm: 3.5 } }}>
											<Typography variant="h6" color="secondary" sx={{ fontWeight: 800 }}>
												{plan.title}
											</Typography>

											<Typography
												variant="h4"
												color="secondary"
												sx={{ mt: 1, fontWeight: 900, letterSpacing: 0.2 }}
											>
												{plan.price}
											</Typography>

											<Typography
												variant="body2"
												sx={(theme) => ({
													mt: 1,
													color: alpha(theme.palette.common.white, 0.78),
													lineHeight: 1.6,
												})}
											>
												{plan.desc}
											</Typography>

											<Divider
												sx={(theme) => ({
													my: 2,
													borderColor: alpha(theme.palette.common.white, 0.14),
												})}
											/>

											{plan.bullets.map((item, index) => (
												<Typography
													key={index}
													variant="body2"
													sx={(theme) => ({
														color: alpha(theme.palette.common.white, 0.78),
														lineHeight: 1.7,
													})}
												>
													• {item}
												</Typography>
											))}
										</CardContent>
									</Card>
								</Grid>
							))}
						</Grid>
					</Container>
				</Box>

				<Box
					id="sobre"
					component="section"
					sx={(theme) => ({
						...SECTION_SX,
						position: "relative",
						overflow: "hidden",
						color: theme.palette.common.white,
						background:
							"radial-gradient(circle at 25% 30%, rgba(120, 60, 200, 0.35), transparent 40%),radial-gradient(circle at 75% 70%, rgba(40, 10, 80, 0.5), transparent 50%),linear-gradient(120deg,#0f0a25 0%,#191230 30%,#2f1550 60%,#4a1c6d 85%,#7c3aed 100%)",
						"&::before": {
							content: '""',
							position: "absolute",
							inset: 0,
							background: `linear-gradient(180deg, ${alpha(
								theme.palette.common.black,
								0.2,
							)} 0%, ${alpha(theme.palette.common.black, 0.5)} 100%)`,
							pointerEvents: "none",
						},
						"& > *": {
							position: "relative",
							zIndex: 1,
						},
					})}
				>
					<Container maxWidth="lg" sx={{ pt: { xs: 0, sm: 0, md: 3, lg: 7, xl: 9 } }}>
						<Typography
							variant="h4"
							color="secondary"
							sx={{ fontWeight: 800, letterSpacing: 0.2 }}
						>
							Sobre nós
						</Typography>
						<Typography
							variant="body1"
							color="secondary"
							sx={{ mt: 1, opacity: 0.9, maxWidth: 760 }}
						>
							O PetGen nasceu para simplificar a gestão e dar mais previsibilidade ao
							seu dia a dia.
						</Typography>

						<Grid container spacing={2} sx={{ mt: 1 }}>
							<Grid item xs={12}>
								<Card
									sx={(theme) => ({
										borderColor: alpha(theme.palette.common.white, 0.16),
										backgroundColor: alpha(theme.palette.common.white, 0.06),
										backdropFilter: "blur(10px)",
										overflow: "hidden",
									})}
								>
									<Grid container spacing={0} alignItems="center">
										<Grid
											item
											xs={12}
											md={9}
											sx={{
												pt: 1,
												pb: 2,
												pl: 4,
												pr: 5,
											}}
										>
											<Typography
												variant="body2"
												sx={(theme) => ({
													mt: 1,
													color: alpha(theme.palette.common.white, 0.78),
													lineHeight: 1.8,
													fontSize: { xs: "0.95rem", sm: "1rem" },
												})}
											>
												O Pet Control nasceu com o propósito de facilitar a vida de quem ama, cuida e
												administra pets. Nosso sistema foi desenvolvido para oferecer uma solução
												completa de gerenciamento de informações, cuidados e rotinas dos animais,
												unindo praticidade, organização e tecnologia em um só lugar.
											</Typography>
											<Typography
												variant="body2"
												sx={(theme) => ({
													mt: 1.5,
													color: alpha(theme.palette.common.white, 0.78),
													lineHeight: 1.8,
													fontSize: { xs: "0.95rem", sm: "1rem" },
												})}
											>
												Com uma interface simples e intuitiva, o Pet Control permite registrar dados
												dos pets, acompanhar vacinas, consultas, alimentação, medicamentos e
												agendamentos, além de gerar relatórios e lembretes automáticos.
											</Typography>
											<Typography
												variant="body2"
												sx={(theme) => ({
													mt: 1.5,
													color: alpha(theme.palette.common.white, 0.78),
													lineHeight: 1.8,
													fontSize: { xs: "0.95rem", sm: "1rem" },
												})}
											>
												Seja você tutor, clínica veterinária, pet shop ou hotel para animais, o Pet
												Control foi pensado para tornar o cuidado com os pets mais eficiente e humano.
											</Typography>
											<Typography
												variant="body2"
												sx={(theme) => ({
													mt: 1.5,
													color: alpha(theme.palette.common.white, 0.78),
													lineHeight: 1.8,
													fontSize: { xs: "0.95rem", sm: "1rem" },
												})}
											>
												Nosso compromisso é garantir mais tempo para o que realmente importa: o bem-estar
												dos animais. Com o Pet Control, você tem controle total e seus pets, todo o
												carinho que merecem. 💙
											</Typography>
										</Grid>
										<Grid
											item
											xs={12}
											md={3}
											sx={{
												position: "relative",
												display: "flex",
												alignItems: "stretch",
												minHeight: { xs: 400, sm: 350, md: 400 },
											}}
										>
											<Box
												sx={{
													position: "relative",
													width: "100%",
													flex: 1,
													minHeight: { xs: 400, sm: 350, md: 400 },
													marginTop: 5
												}}
											>
												<Image
													src="/lading-page-enterprise.png"
													alt="Equipe e estrutura do Pet Control"
													fill
													sizes="(min-width: 900px) 360px, 100vw"
													style={{ objectFit: "cover", padding: 0 }}
												/>
											</Box>
										</Grid>
									</Grid>
								</Card>
							</Grid>
						</Grid>
					</Container>
				</Box>

				<Box
					component="footer"
					sx={(theme) => ({
						py: { xs: 4, sm: 5 },
						borderTop: 1,
						borderColor: "divider",
						backgroundColor: "#251034",
						color: theme.palette.common.white,
					})}
				>
					<Container maxWidth="lg">
						<Grid container spacing={2} alignItems="center">
							<Grid item xs={12} md={4}>
								<Typography variant="h6" sx={{ fontWeight: 800 }}>
									PetGen
								</Typography>
								<Typography
									variant="body2"
									sx={(theme) => ({ color: alpha(theme.palette.common.white, 0.75) })}
								>
									Gerenciamento de pets em um só lugar.
								</Typography>
							</Grid>
							<Grid item xs={12} md={8}>
								<Box
									sx={{
										display: "flex",
										gap: 1,
										justifyContent: { xs: "flex-start", md: "flex-end" },
										flexWrap: "wrap",
									}}
								>
									{NAV_ITEMS.map((item) => (
										<Button
											key={item.href}
											component="a"
											href={item.href}
											color="inherit"
											size="small"
											sx={(theme) => ({
												textTransform: "none",
												fontWeight: 600,
												color: alpha(theme.palette.common.white, 0.85),
												"&:hover": {
													backgroundColor: alpha(theme.palette.common.white, 0.08),
												},
											})}
										>
											{item.label}
										</Button>
									))}
								</Box>
							</Grid>
						</Grid>

						<Divider
							sx={(theme) => ({
								my: 2,
								borderColor: alpha(theme.palette.common.white, 0.14),
							})}
						/>
						<Typography
							variant="body2"
							sx={(theme) => ({ color: alpha(theme.palette.common.white, 0.7) })}
						>
							© {new Date().getFullYear()} PetGen. Todos os direitos reservados.
						</Typography>
					</Container>
				</Box>
			</Box >
		</Box >
	);
}