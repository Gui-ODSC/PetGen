import { useMutation } from "@tanstack/react-query";
import {
	ClienteUsuarioLoginResponseType,
	ClienteUsuarioLoginRequestType,
	ClienteUsuarioLoginResponseSchema,
} from "./cliente-usuario-type";
import axiosInstance from "@/lib/axios";
import { enqueueSnackbar } from "notistack";

export default function useClienteUsuarioLogin() {
	const mutation = useMutation({
		mutationFn: async ({
			email,
			password,
		}: ClienteUsuarioLoginRequestType) => {
			const response =
				await axiosInstance.post<ClienteUsuarioLoginResponseType>(
					"/api/users/login",
					{
						email,
						password,
					},
				);

			return ClienteUsuarioLoginResponseSchema.parse(response.data);
		},
		onError() {
			enqueueSnackbar("Erro ao fazer login!", { variant: "error" });
		},
		onSuccess() {
			enqueueSnackbar("Login realizado com sucesso!", {
				variant: "success",
			});
		},
	});
	return {
		clienteUsuarioLogin: mutation.mutateAsync,
		clienteUsuarioLoginIsLoading: mutation.isPending,
		clienteUsuarioLoginError: mutation.error,
	};
}
