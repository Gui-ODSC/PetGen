import { Avatar, Box, Grid, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import ClienteUsuarioDialogConfirmLogout from '../auth/ClienteUsuarioDialogConfirmLogout';
import { useRouter } from 'next/navigation';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';

export default function BaseAppBar() {

	const options = {
		'Perfil': <AccountCircleIcon />,
		'Configurações': <SettingsIcon />,
		'Ajuda': <HelpIcon />,
		'Sair': <LogoutIcon />
	};

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [openDialogConfirmLogout, setOpenDialogConfirmLogout] = useState(false);

	const router = useRouter();

	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = (option?: string) => {
		setAnchorEl(null);

		if (option === 'Sair') {
			setOpenDialogConfirmLogout(true);
		} else if (option === 'Perfil') {
			router.push('/perfil');
		} else if (option === 'Configurações') {
			router.push('/configuracoes');
		} else if (option === 'Ajuda') {
			router.push('/ajuda');
		}
	};

	return (
		<AppBar position="fixed" sx={{ backgroundColor: "#111017", height: 64, justifyContent: "center" }} elevation={5}>
			<Grid sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", pt: 1, pb: 1, pr: 2, pl: 2 }} >
				<Box display={"flex"} alignItems={"center"} justifyContent={"start"}>
					<IconButton size='small' sx={{ p: 0 }}>
						<MenuIcon color='secondary' />
					</IconButton>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
					<Grid>
						<Tooltip title="Abrir configurações">
							<IconButton onClick={handleClick} sx={{ p: 0 }}>
								<Avatar alt="Remy Sharp" sx={{ border: 1, borderColor: "white" }} src="/lading-page-enterprise.png" />
							</IconButton>
						</Tooltip>
						<Menu
							id="demo-positioned-menu"
							aria-labelledby="demo-positioned-button"
							anchorEl={anchorEl}
							open={open}
							onClose={() => handleClose()}
							slotProps={{
								paper: {
									elevation: 0,
									sx: {
										overflow: 'visible',
										filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
										bgcolor: '#111017',
										color: 'white',
										mt: 1.5,
										'& .MuiAvatar-root': {
											width: 32,
											height: 32,
											ml: -0.5,
											mr: 1,
										},
										'&::before': {
											content: '""',
											display: 'block',
											position: 'absolute',
											top: 0,
											right: 14,
											width: 10,
											height: 10,
											bgcolor: '#111017',
											transform: 'translateY(-50%) rotate(45deg)',
											zIndex: 0,
										},
									}
								},
							}}
							transformOrigin={{ horizontal: 'right', vertical: 'top' }}
							anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
						>
							{Object.entries(options).map(([key, icon]) => (
								<MenuItem
									key={key}
									onClick={() => handleClose(key)}
									sx={{
										color: "white",
										borderRadius: 1,
										transition: "background-color 0.2s ease",
										"&:hover": {
											bgcolor: "#252235",
										},
									}}
								>
									<Grid display={"flex"} alignItems={"center"} gap={1}>
										{icon}
										<Typography fontSize={14}>{key}</Typography>
									</Grid>
								</MenuItem>
							))}
						</Menu>
					</Grid>
				</Box>
			</Grid >
			<ClienteUsuarioDialogConfirmLogout
				open={openDialogConfirmLogout}
				onClose={() => setOpenDialogConfirmLogout(false)}
			/>
		</AppBar >
	);
}