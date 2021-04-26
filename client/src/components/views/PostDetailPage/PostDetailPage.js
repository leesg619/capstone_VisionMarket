import { Avatar, Container, CssBaseline, Grid, makeStyles, Typography, Button, Box, Link } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import React, { useState } from 'react'
import { LockOutlined } from '@material-ui/icons'
import CopyrightFooter from '../CopyrightFooter/CopyrightFooter'
import { useDispatch } from 'react-redux'

import { registerUser } from '../../../_action/user_actions'

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop : theme.spacing(8),
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center'
    },
    avatar: {
        marginTop : theme.spacing(1),
        backgroundColor : theme.palette.primary.dark
    },
    form : {
        marginTop : theme.spacing(1),
        width : "100%"
    },
    onSubmit : {
        margin : theme.spacing(3, 0, 2)
    },
    root: {
        flexGrow: 1,
    },
    media: {
        height: 140,
    },
    container: {
        padding: theme.spacing(9),
    }
}))

export default function PostDetailPage(props) {
    const classes = useStyles()
    const dispatch = useDispatch();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
    <Container component='main' maxWidth="lg" className={classes.container}>
        <CssBaseline />
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
        <Paper className={classes.root} >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Item One" />
                    <Tab label="Item Twoff" />
                    <Tab label="Item Three" />
                </Tabs>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Share
                        </Button>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
            </Card>
            </Paper>
        </Typography>
        
        <Grid container spacing={12}>
        <Grid item sm={12}>

        </Grid>
          <Grid item sm={12}>
            <Paper className={classes.paper}>Content 1</Paper>
          </Grid>

        </Grid>


    </Container>
    )
}



/*
export default function RegisterPage(props) {
    const classes = useStyles()

    const dispatch = useDispatch();
    const [FormErrorMessage, setFormErrorMessage] = useState("")

    

    

    return (
        <Container component='main' maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <form className={classes.form} onSubmit={formik.handleSubmit} noValidate>
                    <Grid container spacing={2}>
                        
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin='normal'
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error = {formik.touched.firstName && Boolean(formik.errors.firstName)}
                                helperText = {formik.touched.firstName && formik.errors.firstName}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="normal"
                                autoComplete="lname"
                                name="lastName"
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                autoFocus
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error = {formik.touched.lastName && Boolean(formik.errors.lastName)}
                                helperText = {formik.touched.lastName && formik.errors.lastName}
                            /> 
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="email"
                                name="email"
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                autoFocus
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error = {formik.touched.email && Boolean(formik.errors.email)}
                                helperText= {formik.touched.email && formik.errors.email}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                autoComplete="current-password"
                                name="password"
                                variant="outlined"
                                required
                                fullWidth
                                id="password"
                                label="Password"
                                type='password'
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error = {formik.touched.password && Boolean(formik.errors.password)}
                                helperText = {formik.touched.password && formik.errors.password}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                autoComplete="confirm-password"
                                name="confirmPassword"
                                variant="outlined"
                                required
                                fullWidth
                                id="confirmPassword"
                                label="Confirm Password"
                                type='password'
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error = {formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                helperText = {formik.touched.confirmPassword && formik.errors.confirmPassword}
                            />
                        </Grid>
                    </Grid>
                    {FormErrorMessage && (
                        <label ><p style={{ color: '#ff0000bf', fontSize: '0.7rem', border: '1px solid', padding: '1rem', borderRadius: '10px' }}>{FormErrorMessage}</p></label>

                    )}
                    <Button
                        className={classes.onSubmit}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={formik.isSubmitting}
                        onSubmit={formik.handleSubmit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                이미 가입하셨나요? Sign In
                            </Link>
                        </Grid>
                    </Grid>

                </form>
            </div>
            <Box mt={5}>
                <CopyrightFooter />
            </Box>
        </Container>
    )
}
*/