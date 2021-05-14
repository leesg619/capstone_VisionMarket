import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { loginUser } from '../../../_action/user_actions';
import HearingIcon from '@material-ui/icons/Hearing';

import { useFormik } from 'formik'
import * as Yup from 'yup'
import CopyrightFooter from '../CopyrightFooter/CopyrightFooter';

const useStyles = makeStyles((theme) => ({
    root : {
        paddingTop : theme.spacing(25)
    },
    paper: {
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

    const initialId = localStorage.getItem('rememberE') ? localStorage.getItem('rememberE') : '';

    const validateionSchema = Yup.object().shape({
        id: Yup.string("").required("ID를 입력해주세요."),
        password: Yup.string("").required("Paaword를 입력해주세요.")
    })

    const formik = useFormik({
        initialValues: {
            id: initialId,
            password: ''
        },
        validationSchema: validateionSchema,
        onSubmit : ((values, { setSubmitting }) => {
            setTimeout(() => {
                let dataToSubmit = {
                    email: values.id,
                    password: values.password
                }

                dispatch(loginUser(dataToSubmit))
                    .then(response => {
                        if (response.payload.loginSuccess) {
                            window.localStorage.setItem('userId', response.payload.userId);
                            if (rememberE === true) {
                                window.localStorage.setItem('rememberE', values.id)
                            }
                            else {
                                window.localStorage.removeItem('rememberE')
                            }
                            props.history.push('/')
                        }
                        else {
                            setFormErrorMessage('ID 혹은 Password를 확인해주세요.')
                        }
                    }).catch(err => {
                        setFormErrorMessage('ID 혹은 Password를 확인하세요.')
                        setTimeout(() => {
                            setFormErrorMessage('')
                        }, 3000);
                    });
                setSubmitting(false)
            }, 500);
        })
    })

    return (
        <Container className={classes.root} component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                
                <Typography component="h1" variant="h5">
                    Vision Market <HearingIcon fontSize="large"/> <br />
                    당신의 비전을 들려주세요.
                </Typography>
                
                <form className={classes.form} onSubmit={formik.handleSubmit} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="id"
                        label="ID"
                        name="id"
                        value={formik.values.id}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={formik.errors.id && formik.touched.ud ? 'input-text error' : 'input-text'}
                        autoFocus
                        alt="아이디입력창"
                    />
                    {formik.errors.id && formik.touched.id && (
                        <div style={{color : 'red'}} className="input-text">{formik.errors.id}</div>
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
                        alt="비밀번호입력창"
                    />
                    {formik.errors.password && formik.touched.password && (
                        <div style={{color : 'red'}} className="input-text">{formik.errors.password}</div>
                    )}
                    <FormControlLabel
                        control={<Checkbox id="rememberE" onChange={handleRemember} checked={rememberE} color="primary" />}
                        label="아이디 저장" alt ="아이디저장"
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
                        alt="로그인"
                    >
                        로그인
            </Button>
                    <Grid container>
                    <Grid item >
                            <Link href="#" variant="body2" alt="아이디찾기">
                                아이디 찾기
                            </Link>
                            <br/>
                            <Link href="#" variant="body2" alt="비밀번호찾기">
                                비밀번호 찾기
                            </Link>
                        </Grid>
                        <Grid item xs>

                        </Grid>
                        <Grid item>
                            <Link href="/register" variant="body2" alt="회원가입">
                                회원가입
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