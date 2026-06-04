import axiosInstance from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import {
	ClienteUsuarioCreateRequestType,
	ClienteUsuarioCreateResponseSchema,
	ClienteUsuarioCreateResponseType,
} from "./cliente-usuario-type";

export default function useClienteUsuarioCadastrar() {
	const mutation = useMutation({
		mutationFn: async ({
			name,
			email,
			password,
		}: ClienteUsuarioCreateRequestType) => {
			const response =
				await axiosInstance.post<ClienteUsuarioCreateResponseType>(
					"/api/users/create",
					{
						name,
						email,
						password,
					},
				);
			return ClienteUsuarioCreateResponseSchema.parse(response.data);
		},
		onError() {
			enqueueSnackbar("Erro ao cadastrar cliente usuário", {
				variant: "error",
			});
		},

		onSuccess() {
			enqueueSnackbar("Cliente usuário cadastrado com sucesso", {
				variant: "success",
			});
		},
	});
	return {
		clienteUsuarioCadastrar: mutation.mutateAsync,
		clienteUsuarioCadastrarIsLoading: mutation.isPending,
		clienteUsuarioCadastrarError: mutation.error,
	};
}
