"use client";

import useCurrentClienteUsuario from "@/hooks/auth/current-auth-user";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PetsRoundedIcon from "@mui/icons-material/PetsRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import {
	Avatar,
	Box,
	Button,
	Chip,
	Divider,
	Grid,
	Paper,
	Stack,
	Typography,
} from "@mui/material";
import Image from "next/image";

export default function PerfilPage() {
	const interests = ["Adoção responsável", "Passeios ao ar livre", "Treinamento positivo", "Pet friendly"];
	const petsByCategory = [
		{ category: "Pássaros", names: ["Betina", "Roberto"] },
		{ category: "Cães", names: ["Agnaldo"] },
	];

	const totalPets = petsByCategory.reduce((total, group) => total + group.names.length, 0);

	const highlights = [
		{ label: "Pets que possui", value: String(totalPets), icon: <PetsRoundedIcon sx={{ color: "#ffd66b" }} /> },
		{ label: "Conexões", value: "184", icon: <FavoriteRoundedIcon sx={{ color: "#ff8ca8" }} /> },
		{ label: "Avaliação", value: "4.9", icon: <StarRoundedIcon sx={{ color: "#7be0c3" }} /> },
	];

	const { currentClienteUsuario, currentClienteUsuarioIsLoading } = useCurrentClienteUsuario();

	return (
		<Box>
			{currentClienteUsuarioIsLoading ? (
				<Box display="flex" justifyContent="center" alignItems="center" height="60vh">
					<Typography variant="h6" color="rgba(255,255,255,0.72)">
						Carregando perfil...
					</Typography>
				</Box>
			) : (

				<Paper
					elevation={0}
					sx={{
						maxWidth: 1180,
						mx: "auto",
						borderRadius: 6,
						overflow: "hidden",
						background: "linear-gradient(180deg, rgba(17,16,23,0.96) 0%, rgba(37,34,53,0.92) 100%)",
						border: "1px solid rgba(255,255,255,0.08)",
						boxShadow: "0 24px 80px rgba(0, 0, 0, 0.32)",
					}}
				>
					<Box
						sx={{
							position: "relative",
							height: { xs: 190, md: 280 },
							background:
								"linear-gradient(135deg, rgba(255,214,107,0.26) 0%, rgba(123,224,195,0.22) 45%, rgba(17,16,23,0.1) 100%)",
						}}
					>
						<Box
							sx={{
								position: "absolute",
								inset: 0,
								backdropFilter: "blur(6px)",
								background:
									"linear-gradient(180deg, rgba(17,16,23,0.12) 0%, rgba(17,16,23,0.78) 100%)",
							}}
						/>
						<Box sx={{ position: "absolute", inset: 0, opacity: 0.18 }}>
							<Image src="/lading-page-enterprise.png" alt="Capa do perfil" fill style={{ objectFit: "cover" }} />
						</Box>
					</Box>

					<Box sx={{ px: { xs: 2.5, md: 5 }, pb: { xs: 3, md: 5 }, mt: { xs: -7, md: -9 }, position: "relative" }}>
						<Grid container spacing={4} alignItems="flex-start">
							<Grid item xs={12} lg={8}>
								<Stack direction={{ xs: "column", sm: "row" }} spacing={3} alignItems={{ xs: "flex-start", sm: "flex-end" }}>
									<Box sx={{ position: "relative" }}>
										<Avatar
											src="/lading-page-enterprise.png"
											alt="Foto do usuário"
											sx={{
												width: { xs: 112, md: 156 },
												height: { xs: 112, md: 156 },
												border: "4px solid rgba(255,255,255,0.9)",
												boxShadow: "0 16px 40px rgba(0,0,0,0.35)",
											}}
										/>
										<Box
											sx={{
												position: "absolute",
												right: 6,
												bottom: 10,
												width: 18,
												height: 18,
												borderRadius: "50%",
												backgroundColor: "#7be0c3",
												border: "3px solid #111017",
											}}
										/>
									</Box>

									<Stack spacing={1.2} sx={{ pt: { xs: 0, sm: 2 } }}>
										<Stack direction={{ xs: "column", md: "row" }} spacing={1.5} alignItems={{ xs: "flex-start", md: "center" }}>
											<Typography variant="h3" sx={{ fontWeight: 700 }} color={"secondary.main"}>
												{currentClienteUsuario.name}
											</Typography>
											<Chip
												icon={<WorkspacePremiumRoundedIcon />}
												label="Perfil verificado"
												sx={{
													backgroundColor: "rgba(255,214,107,0.16)",
													color: "#ffe08a",
													border: "1px solid rgba(255,214,107,0.26)",
													"& .MuiChip-icon": { color: "#ffe08a" },
												}}
											/>
										</Stack>
										<Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap>
											<LocationOnRoundedIcon sx={{ fontSize: 18, color: "rgba(255,255,255,0.72)" }} />
											<Typography color="rgba(255,255,255,0.72)">Belo Horizonte, MG</Typography>
											<Divider orientation="vertical" flexItem sx={{ borderColor: "rgba(255,255,255,0.12)" }} />
											<Typography color="rgba(255,255,255,0.72)">Membro desde 2024</Typography>
										</Stack>
										<Typography sx={{ maxWidth: 680, color: "rgba(255,255,255,0.84)", lineHeight: 1.7 }}>
											Cuidadora apaixonada por animais, conectando lares e histórias com uma rotina focada em adoção consciente, bem-estar e muito carinho.
										</Typography>
									</Stack>
								</Stack>
							</Grid>

							<Grid item xs={12} lg={4}>
								<Stack direction={{ xs: "column", sm: "row", lg: "column" }} spacing={2} justifyContent="flex-end" sx={{ height: "100%" }}>
									<Button
										variant="contained"
										startIcon={<EditRoundedIcon />}
										sx={{
											borderRadius: 999,
											px: 3,
											py: 1.4,
											background: "linear-gradient(135deg, #ffe08a 0%, #ffb86d 100%)",
											color: "#1b142b",
											fontWeight: 700,
											boxShadow: "0 12px 30px rgba(255, 184, 109, 0.28)",
											"&:hover": {
												background: "linear-gradient(135deg, #ffe8a9 0%, #ffc27f 100%)",
											},
										}}
									>
										Editar perfil
									</Button>
									<Button
										variant="outlined"
										sx={{
											borderRadius: 999,
											px: 3,
											py: 1.4,
											color: "white",
											borderColor: "rgba(255,255,255,0.2)",
											"&:hover": {
												borderColor: "rgba(255,255,255,0.45)",
												backgroundColor: "rgba(255,255,255,0.04)",
											},
										}}
									>
										Compartilhar
									</Button>
								</Stack>
							</Grid>
						</Grid>

						<Grid container spacing={2} sx={{ mt: { xs: 2, md: 3 } }}>
							{highlights.map((item) => (
								<Grid item xs={12} md={4} key={item.label}>
									<Paper
										elevation={0}
										sx={{
											p: 2.5,
											borderRadius: 4,
											backgroundColor: "rgba(255,255,255,0.04)",
											border: "1px solid rgba(255,255,255,0.08)",
										}}
									>
										<Stack direction="row" justifyContent="space-between" alignItems="center">
											<Box>
												<Typography color="rgba(255,255,255,0.65)" fontSize={14}>
													{item.label}
												</Typography>
												<Typography variant="h4" sx={{ mt: 0.8, fontWeight: 700 }}>
													{item.value}
												</Typography>
											</Box>
											{item.icon}
										</Stack>
									</Paper>
								</Grid>
							))}
						</Grid>

						<Grid container spacing={3} sx={{ mt: { xs: 1, md: 2 } }}>
							<Grid item xs={12} md={7}>
								<Stack spacing={3}>
									<Paper
										elevation={0}
										sx={{
											p: { xs: 2.5, md: 3 },
											borderRadius: 4,
											backgroundColor: "rgba(255,255,255,0.04)",
											border: "1px solid rgba(255,255,255,0.08)",
										}}
									>
										<Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
											Sobre mim
										</Typography>
										<Typography color="rgba(255,255,255,0.74)" sx={{ lineHeight: 1.8 }}>
											Nos fins de semana, acompanho feiras de adoção, produzo conteúdos rápidos sobre cuidados com cães e gatos e mantenho uma rede ativa de apoio para tutores de primeira viagem.
										</Typography>
										<Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 2.5 }}>
											{interests.map((interest) => (
												<Chip
													key={interest}
													label={interest}
													sx={{
														backgroundColor: "rgba(123,224,195,0.12)",
														color: "#c5fff0",
														border: "1px solid rgba(123,224,195,0.18)",
													}}
												/>
											))}
										</Stack>
									</Paper>

									<Paper
										elevation={0}
										sx={{
											p: { xs: 2.5, md: 3 },
											borderRadius: 4,
											backgroundColor: "rgba(255,255,255,0.04)",
											border: "1px solid rgba(255,255,255,0.08)",
										}}
									>
										<Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
											Pets que possui
										</Typography>
										<Grid container spacing={2}>
											{petsByCategory.map((group) => (
												<Grid item xs={12} md={6} key={group.category}>
													<Paper
														elevation={0}
														sx={{
															p: 2.5,
															borderRadius: 3,
															backgroundColor: "rgba(255,255,255,0.03)",
															border: "1px solid rgba(255,255,255,0.06)",
															height: "100%",
														}}
													>
														<Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
															{group.category}
														</Typography>
														<Stack spacing={1}>
															{group.names.map((name) => (
																<Typography key={name} color="rgba(255,255,255,0.78)" sx={{ pl: 1.5 }}>
																	{name}
																</Typography>
															))}
														</Stack>
													</Paper>
												</Grid>
											))}
										</Grid>
									</Paper>
								</Stack>
							</Grid>

							<Grid item xs={12} md={5}>
								<Paper
									elevation={0}
									sx={{
										p: { xs: 2.5, md: 3 },
										borderRadius: 4,
										backgroundColor: "rgba(255,255,255,0.04)",
										border: "1px solid rgba(255,255,255,0.08)",
										height: "100%",
									}}
								>
									<Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
										Destaques recentes
									</Typography>
									<Stack spacing={2}>
										<Paper elevation={0} sx={{ p: 2, borderRadius: 3, backgroundColor: "rgba(255,255,255,0.03)" }}>
											<Typography fontWeight={600}>Nova adoção concluída</Typography>
											<Typography color="rgba(255,255,255,0.68)" sx={{ mt: 0.5 }}>
												Luna encontrou um novo lar depois de 18 dias de acompanhamento.
											</Typography>
										</Paper>
										<Paper elevation={0} sx={{ p: 2, borderRadius: 3, backgroundColor: "rgba(255,255,255,0.03)" }}>
											<Typography fontWeight={600}>Guia publicado</Typography>
											<Typography color="rgba(255,255,255,0.68)" sx={{ mt: 0.5 }}>
												Checklist rápido para preparar a casa antes da chegada do pet.
											</Typography>
										</Paper>
									</Stack>
								</Paper>
							</Grid>
						</Grid>
					</Box>
				</Paper>
			)}
		</Box>
	);
}