import { Avatar, Container, CssBaseline, Grid, makeStyles, Typography, Button, Box, Link } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import React, { useState } from 'react'
import { LockOutlined } from '@material-ui/icons'
import CopyrightFooter from '../CopyrightFooter/CopyrightFooter'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { registerUser } from '../../../_action/user_actions'

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
    }

}))

export default function RegisterPage(props) {
    const classes = useStyles()

    const dispatch = useDispatch();
    const [FormErrorMessage, setFormErrorMessage] = useState("")

    const validationSchema = Yup.object({
        email : Yup.string().email('Email 형식으로 입력해야합니다.').required('Email이 필요합니다.'),
        password : Yup.string().min(6, "Password는 최소 6자 이상이여야 합니다.").required('password가 필요합니다.'),
        confirmPassword : Yup.string().oneOf([Yup.ref('password'), null], 'Password는 서로 일치해야합니다.').required('Password 확인란에 Paasword를 입력해주세요.'),
        lastName : Yup.string().required('성을 입력해주세요.'),
        firstName : Yup.string().required('이름을 입력해주세요.')
        
    })

    const formik = useFormik({

        initialValues : {
            firstName : "",
            lastName : "",
            email : "",
            password : "",
            confirmPassword : ""
        },
        validationSchema : validationSchema,
        onSubmit : ((values, {setSubmitting}) => {
            setTimeout(() => {
                let dataToSubmit = {
                    email : values.email,
                    password : values.password,
                    lastName : values.lastName,
                    firstName : values.firstName
                }
                
                dispatch(registerUser(dataToSubmit))
                .then(response => {
                    if(response.payload.success) {
                        props.history.push('/')
                    }
                    else {
                        setFormErrorMessage("이미 존재하는 email이거나, 잘못된 형식입니다.")
                    }
                }).catch((err) => {
                    setFormErrorMessage("이미 존재하는 email이거나, 잘못된 형식입니다.")
                    setTimeout(() => {
                        setFormErrorMessage('')
                    }, 3000);
                })
                setSubmitting(false)
            }, 500)
        })
    })


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
