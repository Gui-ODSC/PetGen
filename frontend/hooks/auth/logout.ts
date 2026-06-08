import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";

export default function useLogout() {
	const mutation = useMutation({
		mutationFn: async () => {
			const { data } = await api.post("/logout");
			return data;
		},
		onError() {
			enqueueSnackbar("Erro ao fazer logout!", { variant: "error" });
		},
		onSuccess() {
			enqueueSnackbar("Logout realizado com sucesso!", {
				variant: "success",
			});
		},
	});

	return {
		clienteUsuarioLogout: mutation.mutateAsync,
		clienteUsuarioLogoutIsLoading: mutation.isPending,
		clienteUsuarioLogoutError: mutation.error,
	};
}
