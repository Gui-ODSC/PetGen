import axios, { InternalAxiosRequestConfig } from "axios";

function getCookie(name: string): string | undefined {
	if (typeof document === "undefined") return undefined;

	return document.cookie
		.split("; ")
		.find((row) => row.startsWith(`${name}=`))
		?.split("=")[1];
}

const baseConfig = {
	withCredentials: true,
	xsrfCookieName: "XSRF-TOKEN",
	xsrfHeaderName: "X-XSRF-TOKEN",
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
};

export const api = axios.create({
	baseURL: "http://localhost:8080/api",
	...baseConfig,
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
	if (typeof window === "undefined") return config;

	const token = getCookie("XSRF-TOKEN");

	if (token) {
		config.headers.set("X-XSRF-TOKEN", decodeURIComponent(token));
	}

	return config;
});

export const sanctumApi = axios.create({
	baseURL: "http://localhost:8080",
	...baseConfig,
});
