"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Link from "next/link";

const drawerWidth = 240;

// {
// 	[
// 		{ slug: "Profile", title: "Profile", icon: "<InboxIcon />" },
// 		{ slug: "AddBook", title: "Add Book", icon: "" },
// 		{ slug: "AddTransaction", title: "Add Transaction", icon: "" },
// 		{ slug: "GetMember", title: "Get Member", icon: "MailIcon" },
// 		{ slug: "AddMember", title: "Add Member", icon: "" },
// 		{ slug: "Return", title: "Return", icon: "" },
// 	].map((text, index) => (
// 		<ListItem
// 			key={text.slug}
// 			disablePadding
// 		>
// 			<ListItemButton>
// 				<ListItemIcon>
// 					{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
// 				</ListItemIcon>
// 				{/* <ListItemText primary={text} /> */}

// 				<Link href={`/home/${text.slug}`}>{text.title}</Link>
// 			</ListItemButton>
// 		</ListItem>
// 	));
// }

function HomeLayout({ children }) {
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position='fixed'
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
			>
				<Toolbar>
					<Typography
						variant='h6'
						noWrap
						component='div'
					>
						Library Management System
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				variant='permanent'
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: {
						width: drawerWidth,
						boxSizing: "border-box",
					},
				}}
			>
				<Toolbar />
				<Box sx={{ overflow: "auto" }}>
					<List>
						<ListItem>
							<ListItemButton>
								<ListItemIcon>
									<InboxIcon />
								</ListItemIcon>
								<Link href='/home/profile'>Profile</Link>
							</ListItemButton>
						</ListItem>
						<Divider
							component='li'
							role='separator'
						></Divider>
						<ListItem>
							<ListItemButton>
								<ListItemIcon>
									<InboxIcon />
								</ListItemIcon>
								<Link href='/home/addbook'>Add Book</Link>
							</ListItemButton>
						</ListItem>
						<Divider
							component='li'
							role='separator'
						></Divider>

						<ListItem>
							<ListItemButton>
								<ListItemIcon>
									<InboxIcon />
								</ListItemIcon>
								<Link href='/home/addtransaction'>Issue Book</Link>
							</ListItemButton>
						</ListItem>

						<ListItem>
							<ListItemButton>
								<ListItemIcon>
									<InboxIcon />
								</ListItemIcon>
								<Link href='/home/getmember'>Get Member</Link>
							</ListItemButton>
						</ListItem>
						<ListItem>
							<ListItemButton>
								<ListItemIcon>
									<InboxIcon />
								</ListItemIcon>
								<Link href='/home/addmember'>Add Member</Link>
							</ListItemButton>
						</ListItem>
						<ListItem>
							<ListItemButton>
								<ListItemIcon>
									<InboxIcon />
								</ListItemIcon>
								<Link href='/home/return'>Return</Link>
							</ListItemButton>
						</ListItem>
					</List>
					<Divider />
					<List>
						{["Logout"].map((text, index) => (
							<ListItem
								key={text}
								disablePadding
							>
								<ListItemButton>
									<ListItemIcon>
										{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
									</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Box>
			</Drawer>
			<Box
				component='main'
				sx={{ flexGrow: 1, p: 3 }}
			>
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
}

export default HomeLayout;
