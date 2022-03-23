import {
    IconButton,
    List,
    ListItem,
    ListItemText,
    SwipeableDrawer,
    Tab,
    Tabs,
    Typography,
    useMediaQuery,
} from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import { makeStyles, useTheme } from '@mui/styles'
import Toolbar from '@mui/material/Toolbar'
import MenuIcon from '@mui/icons-material/Menu'
import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/logo.png'
import CustomButton from './CustomButton'

const useStyles = makeStyles((theme) => ({
    appbar: {
        padding: '10px calc(50% - 640px)',
        background: 'transparent !important',
    },
    logo: {
        height: '3em',
        [theme.breakpoints.down('md')]: {
            height: '2em',
        },
    },
    logoContainer: {
        marginLeft: '23px',
        padding: 0,
        '&:hover': {
            backgroundColor: 'transparent',
        },
        marginRight: '1em',
    },
    logoName: {
        textTransform: 'none !important',
        letterSpacing: '1.8 !important',
        fontSize: '1.8em !important',
        marginLeft: '0.3em !important',
    },
    tabContainer: {
        marginRight: 'auto',
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '0.4em',
    },
    button2: {
        ...theme.typography.tab,
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    noDisplay: {
        display: 'none',
    },
    drawerIconContainer: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    drawerIcon: {
        height: '50px',
        width: '50px',
    },
    drawerItemSelected: {
        '&. .MuiListItemText-root': {
            opacity: 1,
        },
    },
    drawerItem: {
        ...theme.typography.tab,
        opacity: 0.7,
    },
    drawer: {
        backgroundColor: theme.palette.common.white,
    },
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '3em',
        [theme.breakpoints.down('md')]: {
            marginBottom: '2em',
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '1.3em',
        },
    },
}))

function Header({ value, setValue, selectedIndex, setSelectedIndex }) {
    const theme = useTheme()
    const classes = useStyles()
    const iOS = false
    const smMatches = useMediaQuery(theme.breakpoints.down('sm'))
    const mdMatches = useMediaQuery(theme.breakpoints.down('md'))
    // const trigger = useScrollTrigger({ disableHysteresis: true })

    const [openDrawer, setOpenDrawer] = useState(false)
    const handleChange = (e, newValue) => {
        setValue(newValue)
    }

    const routes = useMemo(
        () => [
            // {
            //     id: 'r1',
            //     name: 'About',
            //     link: '/about',
            //     activeIndex: 1,
            // },
            // {
            //     id: 'r2',
            //     name: 'Invest',
            //     link: '/invest',
            //     activeIndex: 2,
            // },
            // {
            //     id: 'r3',
            //     name: 'Get Funded',
            //     link: '/get-funded',
            //     activeIndex: 3,
            // },
            // {
            //     id: 'r4',
            //     name: 'News/Events',
            //     link: '/news-events',
            //     activeIndex: 4,
            // },
            // {
            //     id: 'r5',
            //     name: 'Case Studies',
            //     link: '/case-studies',
            //     activeIndex: 5,
            // },
        ],
        []
    )

    useEffect(() => {
        ;[
            ...routes,
            { id: 'r5', name: 'Sign In', link: '/sign-in', activeIndex: 6 },
            {
                id: 'r5',
                name: 'Get Started',
                link: '/start',
                activeIndex: 7,
            },
        ].forEach((route) => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    if (value !== route.activeIndex) {
                        setValue(route.activeIndex)
                        if (
                            route.selectedIndex &&
                            route.selectedIndex !== selectedIndex
                        ) {
                            setSelectedIndex(route.selectedIndex)
                        }
                    }
                    break
                default:
                    break
            }
        })
    }, [routes, selectedIndex, setSelectedIndex, setValue, value])

    const tabs = (
        <React.Fragment>
            <Tabs
                value={value}
                onChange={handleChange}
                className={classes.tabContainer}
                indicatorColor="secondary"
            >
                <Tab className={classes.noDisplay} value={0} />
                {/* <Tab
                    className={classes.tab}
                    component={Link}
                    label="About"
                    to="/about"
                    value={1}
                />
                <Tab
                    className={classes.tab}
                    component={Link}
                    label="Invest"
                    to="/invest"
                    value={2}
                />
                <Tab
                    className={classes.tab}
                    component={Link}
                    label="Get Funded"
                    to="/get-funded"
                    value={3}
                />
                <Tab
                    className={classes.tab}
                    component={Link}
                    label="News/Events"
                    to="/news-events"
                    value={4}
                />
                <Tab
                    className={classes.tab}
                    component={Link}
                    label="Case Studies"
                    to="/case-studies"
                    value={5}
                /> */}
                <Tab className={classes.noDisplay} value={6} />
                <Tab className={classes.noDisplay} value={7} />
            </Tabs>
            {/* <Button
                component={Link}
                to="/sign-in"
                variant="text"
                className={classes.button2}
                onClick={() => setValue(6)}
                style={{ color: '#333' }}
            >
                Sign In
            </Button> */}
            {/* <CustomButton
                component={Link}
                to="/login"
                onClick={() => setValue(7)}
                text="SIGN IN"
                variant="contained"
                style={{
                    boxShadow: 'none',
                    background: 'linear-gradient(145deg, #1b8cd8, #1776b6)',
                    margin: mdMatches ? 0 : '0px 1em',
                    padding: 0,
                    width: 180,
                }}
            /> */}
        </React.Fragment>
    )

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                classes={{ paper: classes.drawer }}
            >
                {/* <div className={classes.toolbarMargin} /> */}
                <List>
                    <ListItem divider button>
                        <Button
                            component={Link}
                            to="/"
                            disableRipple
                            onClick={() => {
                                setValue(0)
                                setOpenDrawer(false)
                            }}
                            className={classes.logoContainer}
                        >
                            {/* <img
                                src={logo}
                                className={classes.logo}
                                alt="company logo"
                            /> */}
                            <Typography className={classes.logoName}>
                                SASS
                            </Typography>
                        </Button>
                    </ListItem>
                    {routes.map((route) => (
                        <ListItem
                            key={`list-${route.id}`}
                            onClick={() => {
                                setOpenDrawer(false)
                                setValue(route.activeIndex)
                            }}
                            divider
                            button
                            classes={{ selected: classes.drawerItemSelected }}
                            selected={value === route.activeIndex}
                            component={Link}
                            to={`${route.link}`}
                        >
                            <ListItemText
                                className={classes.drawerItem}
                                disableTypography
                            >
                                {route.name}
                            </ListItemText>
                        </ListItem>
                    ))}
                    <ListItem
                        onClick={() => {
                            setOpenDrawer(false)
                            setValue(4)
                        }}
                        divider
                        button
                        classes={{
                            root: classes.drawerItemEstimate,
                            selected: classes.drawerItemSelected,
                        }}
                        selected={value === 6}
                        component={Link}
                        to="/sign-in"
                    >
                        {/* <Button className={classes.button2}>Sign in</Button> */}
                    </ListItem>
                    <ListItem
                        onClick={() => {
                            setOpenDrawer(false)
                            setValue(7)
                        }}
                        divider
                        button
                        classes={{
                            root: classes.drawerItemEstimate,
                            selected: classes.drawerItemSelected,
                        }}
                        selected={value === 7}
                        component={Link}
                        to="/start"
                    >
                        <Button
                            className={classes.button2}
                            style={{
                                backgroundColor: theme.palette.common.blue,
                                color: theme.palette.common.white,
                            }}
                        >
                            Get Started
                        </Button>
                    </ListItem>
                </List>
            </SwipeableDrawer>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <AppBar
                position="absolute"
                color="secondary"
                className={classes.appbar}
                elevation={0}
            >
                <Toolbar disableGutters>
                    {smMatches ? (
                        <IconButton
                            className={classes.drawerIconContainer}
                            onClick={() => setOpenDrawer(!openDrawer)}
                            disableRipple
                        >
                            <MenuIcon className={classes.drawerIcon} />
                        </IconButton>
                    ) : null}
                    <Button
                        component={Link}
                        to="/"
                        disableRipple
                        onClick={() => setValue(0)}
                        className={classes.logoContainer}
                    >
                        {/* <img
                            src={logo}
                            className={classes.logo}
                            alt="company logo"
                        /> */}
                        <Typography className={classes.logoName}>
                            SASS
                        </Typography>
                    </Button>
                    {smMatches ? drawer : tabs}
                </Toolbar>
            </AppBar>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    )
}

export default Header
