import { ClienteUsuarioCreateRequestType } from "@/hooks/cliente-usuario/cliente-usuario-type";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { alpha, Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";

const fieldStyles = {
	InputLabelProps: {
		sx: {
			color: "secondary.main",
			"&.Mui-focused": {
				color: "secondary.main",
			},
			"&.MuiInputLabel-shrink": {
				color: "secondary.main",
			},
		},
	},
	sx: (theme: { palette: { common: { white: string } } }) => ({
		"& .MuiOutlinedInput-root": {
			color: theme.palette.common.white,
			backgroundColor: alpha(theme.palette.common.white, 0.04),
			"& fieldset": { borderColor: alpha(theme.palette.common.white, 0.18) },
			"&:hover fieldset": { borderColor: alpha(theme.palette.common.white, 0.28) },
			"&.Mui-focused fieldset": { borderColor: alpha(theme.palette.common.white, 0.32) },
		},
	}),
};

export default function ClienteUsuarioForm({
	control, errors
}: {
	control: Control<ClienteUsuarioCreateRequestType>,
	errors: FieldErrors<ClienteUsuarioCreateRequestType>
}) {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<Grid>
			<Controller
				name="name"
				control={control}
				render={({ field }) => (
					<TextField

						fullWidth
						label="Nome"
						margin="normal"
						error={!!errors.name}
						helperText={errors.name?.message}
						{...fieldStyles}
						{...field}
					/>
				)}
			/>
			<Controller
				name="email"
				control={control}
				render={({ field }) => (
					<TextField
						fullWidth
						label="E-mail"
						type="email"
						margin="normal"
						error={!!errors.email}
						helperText={errors.email?.message}
						{...fieldStyles}
						{...field}
					/>
				)}
			/>
			<Controller
				name="password"
				control={control}
				render={({ field }) => (
					<TextField
						fullWidth
						label="Senha"
						type={showPassword ? 'text' : 'password'}
						margin="normal"
						error={!!errors.password}
						helperText={errors.password?.message}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										color="secondary"
										onClick={() => setShowPassword(!showPassword)}
										onMouseDown={() => setShowPassword(!showPassword)}
									>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							)
						}}
						{...fieldStyles}
						{...field}
					/>
				)}
			/>
		</Grid>
	);
}