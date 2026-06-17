import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export default function useCurrentClienteUsuario() {
	const query = useQuery({
		queryKey: ["current-cliente-usuario"],
		queryFn: async () => {
			const { data } = await api.get("users/me");
			return data;
		},
		retry: false,
	});

	return {
		currentClienteUsuario: query.data,
		currentClienteUsuarioIsLoading: query.isLoading,
		currentClienteUsuarioError: query.error,
	};
}
