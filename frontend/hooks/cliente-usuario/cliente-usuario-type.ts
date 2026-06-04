import z from "zod";

// Schemas

export const ClienteUsuarioCreateRequestSchema = z.object({
	name: z.string().min(1, "O nome é obrigatório"),
	email: z.string().min(1, "O e-mail é obrigatório").email("E-mail inválido"),
	password: z
		.string()
		.min(6, "A senha deve conter no mínimo 6 caracteres")
		.regex(
			/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
			"A senha deve conter letras maiúsculas, minúsculas, números e símbolos",
		),
});

export const ClienteUsuarioCreateResponseSchema = z.object({
	message: z.string(),
	data: z.object({
		id: z.string(),
		name: z.string(),
		email: z.string(),
	}),
});

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

export const ClienteUsuarioLoginResponseSchema = z.object({
	token: z.string(),
});

// Frontend Request Type

export type ClienteUsuarioLoginRequestType = z.infer<
	typeof ClienteUsuarioLoginRequestSchema
>;

export type ClienteUsuarioCreateRequestType = z.infer<
	typeof ClienteUsuarioCreateRequestSchema
>;

// Backend Response Type

export type ClienteUsuarioLoginResponseType = z.infer<
	typeof ClienteUsuarioLoginResponseSchema
>;

export type ClienteUsuarioCreateResponseType = z.infer<
	typeof ClienteUsuarioCreateResponseSchema
>;
