import Button from '@mui/material/Button'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    startBtn: {
        ...theme.typography.tab,
        // fontFamily: 'Raleway !important',
        fontSize: '18px !important',
        minWidth: '0 !important',
        letterSpacing: 'normal !important',
        padding: '10px 20px !important',
        color: '#fff',
        // marginLeft: '0em',
        marginRight: '23px !important',
        // borderRadius: 30,
        borderRadius: 100,
        height: '60 !important',
        marginBottom: '1em !important',
        width: '200 !important',
        background: 'linear-gradient(145deg, #1b8cd8, #1776b6) !important',
        // boxShadow: '5px 5px 10px #d6d6d6,-5px -5px 10px #ffffff !important',
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        },
    },
}))

export default function CustomButton({ text, icon, ...rest }) {
    const classes = useStyles()
    return (
        <Button component={Link} className={classes.startBtn} {...rest}>
            {text}
            <span>
                {icon ? (
                    <img src={icon} height={'40px'} width={'40px'} alt="" />
                ) : null}
            </span>
        </Button>
    )
}
