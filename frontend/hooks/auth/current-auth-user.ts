import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export default function useCurrentClienteUsuario() {
	return useQuery({
		queryKey: ["current-cliente-usuario"],
		queryFn: async () => {
			const response = await api.get("/me");
			return response.data;
		},
		retry: false,
	});
}
