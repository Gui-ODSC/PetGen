import { useMutation } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { api, sanctumApi } from "@/lib/axios";
import { ClienteUsuarioLoginRequestType } from "./auth-types";

export default function useClienteUsuarioLogin() {
	const mutation = useMutation({
		mutationFn: async ({
			email,
			password,
		}: ClienteUsuarioLoginRequestType) => {
			await sanctumApi.get("/sanctum/csrf-cookie");

			const { data } = await api.post("/login", {
				email,
				password,
			});

			return data;
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
