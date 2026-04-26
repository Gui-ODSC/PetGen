"use client";

import { Box, Button, Card, CardContent, Container, Divider, TextField, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

export default function LoginPage() {
    return (
        <Box
            sx={(theme) => ({
                minHeight: "100vh",
                pt: { xs: 10, sm: 12 },
                pb: { xs: 6, sm: 8 },
                color: theme.palette.common.white,
                background:
                    "radial-gradient(circle at 30% 30%, rgba(90, 40, 140, 0.35), transparent 50%), linear-gradient(120deg, #191230, #371650)",
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
                        <TextField
                            fullWidth
                            label="E-mail"
                            type="email"
                            margin="normal"
                            InputLabelProps={{ sx: { color: "secondary.main" } }}
                            sx={(theme) => ({
                                "& .MuiOutlinedInput-root": {
                                    color: theme.palette.common.white,
                                    backgroundColor: alpha(theme.palette.common.white, 0.04),
                                    "& fieldset": { borderColor: alpha(theme.palette.common.white, 0.18) },
                                    "&:hover fieldset": { borderColor: alpha(theme.palette.common.white, 0.28) },
                                    "&.Mui-focused fieldset": { borderColor: alpha(theme.palette.common.white, 0.32) },
                                },
                            })}
                        />
                        <TextField
                            fullWidth
                            label="Senha"
                            type="password"
                            margin="normal"
                            InputLabelProps={{ sx: { color: "secondary.main" } }}
                            sx={(theme) => ({
                                "& .MuiOutlinedInput-root": {
                                    color: theme.palette.common.white,
                                    backgroundColor: alpha(theme.palette.common.white, 0.04),
                                    "& fieldset": { borderColor: alpha(theme.palette.common.white, 0.18) },
                                    "&:hover fieldset": { borderColor: alpha(theme.palette.common.white, 0.28) },
                                    "&.Mui-focused fieldset": { borderColor: alpha(theme.palette.common.white, 0.32) },
                                },
                            })}
                        />

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
                        >
                            Entrar
                        </Button>

                        <Divider sx={(theme) => ({ my: 2.5, borderColor: alpha(theme.palette.common.white, 0.14) })} />

                        <Button
                            fullWidth
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
