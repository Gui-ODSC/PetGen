import z from "zod";

export const ClienteUsuarioLoginRequestSchema = z.object({
	email: z.string().min(1, "O e-mail é obrigatório").email("E-mail inválido"),
	password: z
		.string()
		.min(6, "A senha deve conter no mínimo 6 caracteres")
		.regex(
			/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
			"A senha deve conter letras maiúsculas, minúsculas, números e símbolos",
		),
});

export type ClienteUsuarioLoginRequestType = z.infer<
	typeof ClienteUsuarioLoginRequestSchema
>;
