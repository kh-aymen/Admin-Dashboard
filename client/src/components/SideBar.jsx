import React, { useState, useEffect } from "react"
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material"
import {
    SettingsOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,
    PublicOutlined,
    PointOfSaleOutlined,
    TodayOutlined,
    CalendarMonthOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    PieChartOutlined,
} from "@mui/icons-material"
import { useNavigate, useLocation } from "react-router-dom"
import FlexBetween from "./FlexBetween"
import ProfileImage from '../assets/ProfileImage.jpg'


const navItems = [
    {
        text: "Dashboard",
        icon: <HomeOutlined />,
    },
    {
        text: "Client Facing",
        icon: null,
    },
    {
        text: "Products",
        icon: <ShoppingCartOutlined />,
    },
    {
        text: "Customers",
        icon: <Groups2Outlined />,
    },
    {
        text: "Transactions",
        icon: <ReceiptLongOutlined />,
    },
    {
        text: "Geography",
        icon: <PublicOutlined />,
    },
    {
        text: "Sales",
        icon: null,
    },
    {
        text: "Overview",
        icon: <PointOfSaleOutlined />,
    },
    {
        text: "Daily",
        icon: <TodayOutlined />,
    },
    {
        text: "Monthly",
        icon: <CalendarMonthOutlined />,
    },
    {
        text: "Breakdown",
        icon: <PieChartOutlined />,
    },
    {
        text: "Management",
        icon: null,
    },
    {
        text: "Admin",
        icon: <AdminPanelSettingsOutlined />,
    },
    {
        text: "Performance",
        icon: <TrendingUpOutlined />,
    },
]

const SideBar = ({
    isNonMobile,
    drawerWidth,
    isSideBarOpen,
    setIsSideBarOpen,
}) => {
    const { pathname } = useLocation()
    const [active, setActive] = useState("")
    const navigate = useNavigate()
    const theme = useTheme()

    useEffect(() => {
        setActive(pathname.substring())
    }, [pathname])

    return (
        <Box component='nav'>
            {isSideBarOpen && (
                <Drawer
                    open={isSideBarOpen}
                    onClose={() => setIsSideBarOpen(false)}
                    variant="permanent"
                    anchor="left"
                    sx={{
                        width: drawerWidth,
                        "& .MuiDrawer-paper": {
                            color: theme.palette.secondary[200],
                            bgcolor: theme.palette.background.alt,
                            boxSizing: "border-box",
                            borderWidth: isNonMobile ? 0 : "2px",
                            width: drawerWidth
                        }
                    }}
                >
                    <Box width='100%'>
                        <Box m='1.5rem 2rem 2rem 3rem'>
                            <FlexBetween color={theme.palette.secondary.main}>
                                <Box display='flex' alignItems='center' gap='0.5rem'>
                                    <Typography variant="h4" fontWeight='bold'>
                                        ECOMVISION
                                    </Typography>
                                </Box>
                                {!isNonMobile && (
                                    <IconButton onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
                                        <ChevronLeft />
                                    </IconButton>
                                )}
                            </FlexBetween>
                        </Box>
                        <List>

                        </List>
                    </Box>
                </Drawer>
            )}
        </Box>
    )
}

export default SideBar