import { useMediaQuery } from '@mui/material'
import Grid from '@mui/material/Grid'
import { makeStyles, useTheme } from '@mui/styles'
import Typography from '@mui/material/Typography'
import React from 'react'
import SideBlob from './assets/SideBlob.js'
import SideBubble from './assets/SideBubble.js'
import manInvestor from './assets/manInvestor.svg'
import rocket from './assets/rocket.svg'
import LandingHeroImage from './assets/landing-page-hero.svg'
import CustomButton from './CustomButton'

const useStyles = makeStyles((theme) => ({
    hero: {
        position: 'relative',
        top: -50,
        maxWidth: '40em',
        minWidth: '29em',
        marginTop: '4em',
        marginLeft: '10%',
        '&>img': {
            width: '80%',
            height: '80%',
            [theme.breakpoints.down('xs')]: {
                // margin: 'auto',
                padding: '0 68px',
                width: '70%',
                height: '70%',
            },
        },
    },
    buttonContainer: {
        marginTop: '1em',
    },
    learnBtnHero: {
        borderColor: theme.palette.common.blue,
        color: theme.palette.common.blue,
        borderWidth: 2,
        textTransform: 'none',
        borderRadius: 50,
        fontWeight: 'bold',
        fontSize: '0.9rem',
        height: 45,
        width: 145,
    },
    mainContainer: {
        marginTop: '5em',
        [theme.breakpoints.down('md')]: {
            marginTop: '3em',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '2em',
        },
    },
    heroTextContainer: {
        minWidth: '21.5em',
        marginLeft: '1em',
        [theme.breakpoints.down('xs')]: {
            marginRight: '2em',
        },
    },
    wave: {
        position: 'absolute',
        top: 0,
        right: 0,
        margin: 0,
        padding: 0,
        opacity: 0.7,
        zIndex: -1,
        [theme.breakpoints.down('md')]: {
            opacity: 0.2,
        },
    },
    wave2: {
        position: 'absolute',
        top: 250,
        left: 0,
        margin: 0,
        padding: 0,
        opacity: 1,
        [theme.breakpoints.down('md')]: {
            opacity: 0.6,
        },
        zIndex: -1,
    },
    curve: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        '&>path': {
            fill: '#fff',
        },
    },
    heroItems: {
        marginBottom: '10em',
    },
    heroItems2: {
        marginBottom: '5em',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '0em',
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '0',
        },
    },
    heroItems4: {
        marginBottom: '6em',
    },
    dash: {
        marginTop: '0.8em',
        width: '70px',
        border: `1px solid ${theme.palette.common.blue}`,
        borderRadius: 5,
    },
    highlight: {
        fontSize: 36,
        color: '#383838',
        marginBottom: 30,
    },
    highlightMargin: {
        margin: '0 2em',
    },
    announceAll: {
        border: `1px solid ${theme.palette.common.blue}`,
        color: theme.palette.common.blue,
        padding: '1em',
        fontSize: 14,
        fontWeight: 600,
        marginTop: 24,
        borderRadius: 4,
        width: '13em',
        cursor: 'pointer',
        '&:hover': {
            background: theme.palette.common.blue,
            color: '#fff',
        },
    },
}))

export default function LandingPage() {
    const classes = useStyles()
    const theme = useTheme()
    const lgMatches = useMediaQuery(theme.breakpoints.only('lg'))
    const mdMatches = useMediaQuery(theme.breakpoints.only('md'))
    const smMatches = useMediaQuery(theme.breakpoints.only('sm'))
    const xsMatches = useMediaQuery(theme.breakpoints.down('xs'))

    const bgWidth = lgMatches
        ? '1000'
        : mdMatches
        ? '800'
        : smMatches
        ? '695'
        : '1098'
    const bgHeight = lgMatches
        ? '984'
        : mdMatches
        ? '800'
        : smMatches
        ? '680'
        : '1024'

    const smWidth = lgMatches
        ? '180mm'
        : mdMatches
        ? '150mm'
        : smMatches
        ? '120mm'
        : '180mm'
    const smHeight = lgMatches
        ? '267mm'
        : mdMatches
        ? '237mm'
        : smMatches
        ? '207mm'
        : '267mm'

    return (
        <>
            <div className={classes.wave}>
                {xsMatches ? null : (
                    <SideBlob width={bgWidth} height={bgHeight} />
                )}
            </div>
            {/* --------------------------------------------------------------------------------------------------------------------------- */}
            <Grid
                container
                direction="column"
                justifyContent="center"
                // alignItems="center"
                className={classes.mainContainer}
            >
                <Grid item className={classes.heroItems}>
                    <Grid
                        container
                        justify="flex-end"
                        alignItems="center"
                        direction="row"
                    >
                        <Grid sm item className={classes.heroTextContainer}>
                            <Grid container direction="column">
                                <section className={classes.wave2}>
                                    {xsMatches ? null : (
                                        <SideBubble
                                            width={smWidth}
                                            height={smHeight}
                                        />
                                    )}
                                </section>
                                <Typography variant="h2" align="center">
                                    You Run The Business, <br />
                                    We help you How to Run It.
                                </Typography>
                                <br />
                                <Typography variant="subtitle1" align="center">
                                    Business Management Consultant
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                justify="center"
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                className={classes.buttonContainer}
                            >
                                <Grid item>
                                    <CustomButton
                                        variant="contained"
                                        disableElevation
                                        text="SASS"
                                        to="/main-app"
                                        icon={rocket}
                                    />
                                </Grid>
                                {/* <Grid item>
                                    <CustomButton
                                        variant="contained"
                                        disableElevation
                                        text="For Investor"
                                        to="/investor"
                                        icon={manInvestor}
                                    />
                                </Grid> */}
                            </Grid>
                        </Grid>
                        <Grid sm item className={classes.hero}>
                            <img
                                src={LandingHeroImage}
                                height={'98%'}
                                width={'98%'}
                                alt="startupimage"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
