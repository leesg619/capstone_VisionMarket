import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { loginUser } from '../../../_action/user_actions'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import CopyrightFooter from '../CopyrightFooter/CopyrightFooter';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.dark,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function Login(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const rememeberLocal = localStorage.getItem('rememberE') ? true : false;

    const [rememberE, setrememberE] = useState(rememeberLocal)
    const [FormErrorMessage, setFormErrorMessage] = useState("")

    const handleRemember = () => {
        setrememberE(!rememberE)
    }

    const initialEamil = localStorage.getItem('rememberE') ? localStorage.getItem('rememberE') : '';

    const validateionSchema = Yup.object().shape({
        email: Yup.string("Email을 입력해주세요.").email("올바른 Email 형식으로 써주세요.").required("Email이 필요합니다."),
        password: Yup.string("Paaword를 입력해주세요").min(6, "패스워드는 최소 6자 이상입니다.").required("로그인 시에는 패스워드가 필요합니다.")
    })

    const formik = useFormik({
        initialValues: {
            email: initialEamil,
            password: ''
        },
        validationSchema: validateionSchema,
        onSubmit : ((values, { setSubmitting }) => {
            setTimeout(() => {
                let dataToSubmit = {
                    email: values.email,
                    password: values.password
                }

                dispatch(loginUser(dataToSubmit))
                    .then(response => {
                        if (response.payload.loginSuccess) {
                            window.localStorage.setItem('userId', response.payload.userId);
                            if (rememberE === true) {
                                window.localStorage.setItem('rememberE', values.email)
                            }
                            else {
                                window.localStorage.removeItem('rememberE')
                            }
                            props.history.push('/')
                        }
                        else {
                            setFormErrorMessage('Email 혹은 Password를 확인해주세요')
                        }
                    }).catch(err => {
                        setFormErrorMessage('Email 혹은 Password를 확인하세요.')
                        setTimeout(() => {
                            setFormErrorMessage('')
                        }, 3000);
                    });
                setSubmitting(false)
            }, 500);
        })
    })

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
          </Typography>
                <form className={classes.form} onSubmit={formik.handleSubmit} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={formik.errors.email && formik.touched.email ? 'input-text error' : 'input-text'}
                        autoFocus
                    />
                    {formik.errors.email && formik.touched.email && (
                        <div style={{color : 'red'}} className="input-text">{formik.errors.email}</div>
                    )}
                    <TextField
                        variant="outlined"  
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={formik.errors.password && formik.touched.password ? 'input-text error' : 'input-text'}
                        autoComplete="current-password"
                    />
                    {formik.errors.password && formik.touched.password && (
                        <div style={{color : 'red'}} className="input-text">{formik.errors.password}</div>
                    )}
                    <FormControlLabel
                        control={<Checkbox id="rememberE" onChange={handleRemember} checked={rememberE} color="primary" />}
                        label="Remember me"
                    />
                    {FormErrorMessage && (
                        <label ><p style={{ color: '#ff0000bf', fontSize: '0.7rem', border: '1px solid', padding: '1rem', borderRadius: '10px' }}>{FormErrorMessage}</p></label>

                    )}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={formik.isSubmitting}
                        onSubmit={formik.handleSubmit}
                    >
                        Sign In
            </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <CopyrightFooter />
            </Box>
        </Container>
    );
}