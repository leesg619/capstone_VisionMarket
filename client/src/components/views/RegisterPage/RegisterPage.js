import { Container, CssBaseline, Grid, makeStyles, Typography, Button, Box, Link } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import React, { useState } from 'react'
import CopyrightFooter from '../CopyrightFooter/CopyrightFooter'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { registerUser } from '../../../_action/user_actions'
import HearingIcon from '@material-ui/icons/Hearing';
import Checkbox from '@material-ui/core/Checkbox';

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

    // 페이지 넘어가는 부분
    const [NextPage, setNextPage] = useState(1);

    const ButtonHandler = (e) => {
        if(NextPage !== 4){
            e.preventDefault()
            setNextPage(NextPage+1)
        } else {
            setNextPage(NextPage)
            // 페이지가 4일 경우(===메인으로 돌아가기, 쇼핑창)
        }
    }

    const ButtonHandler2 = (e) => {
        if(NextPage !== 1){
            e.preventDefault()
            setNextPage(NextPage-1)
        } else {
            setNextPage(NextPage)
            // 페이지 1일 경우 뒤로(===메인으로돌아가기, 로그인창) 
        }
    }

    // 체크박스 
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    const validationSchema = Yup.object({
        name : Yup.string().required("이름을 입력해주세요."),
        birth : Yup.string().min(8, "생년월일은 8자로 입력해주세요.").required("생년월일이 필요합니다."),
        id : Yup.string().required('아이디가 필요합니다.'),
        password : Yup.string().min(4, "Password는 최소 4자 이상이여야 합니다.").required('password가 필요합니다.'),
        confirmPassword : Yup.string().oneOf([Yup.ref('password'), null], 'Password는 서로 일치해야합니다.').required('Password 확인란에 Password를 입력해주세요.')   
    })

    const formik = useFormik({

        initialValues : {
            name : "",
            birth : "",
            id : "",
            password : "",
            confirmPassword : ""
        },
        validationSchema : validationSchema,
        onSubmit : ((values, {setSubmitting}) => {
            setTimeout(() => {
                let dataToSubmit = {
                    name : values.name,
                    birth : values.birth,
                    id : values.id,
                    password : values.password,
                }
                
                dispatch(registerUser(dataToSubmit))
                .then(response => {
                    if(response.payload.success) {
                        props.history.push('/')
                    }
                    else {
                        setFormErrorMessage("잘못된 형식입니다.")
                    }
                }).catch((err) => {
                    setFormErrorMessage("잘못된 형식입니다.")
                    setTimeout(() => {
                        setFormErrorMessage('')
                    }, 3000);
                })
                setSubmitting(false)
            }, 500)
        })
    })

    if(NextPage === 1) {
        return (
            <Container component='main' maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
            <br />
                <Typography component="h1" variant="h5">
                    Vision Market <HearingIcon fontSize="large"/>
                </Typography>
                {/* <form className={classes.form} onSubmit={formik.handleSubmit} noValidate> */}
                    <Grid container spacing={2}>
                    <Grid item xs={12}> 
                    <fieldset>    
                    <p>
                    지금부터 비전 마켓 회원가입에 대해 안내해 드리겠습니다.<br />
                    회원가입은 순서에 따라 주민번호, 아이디, 비밀번호, 주소 등을 단계별로 입력하신 후,
                    장애인 복지카드 사본은 팩스나 메일로 제출해주셔야 혜택이 적용됩니다.
                    Tap 키를 사용하여 앞으로 이동하며 Tap과 shift키를 사용하여 뒤로 이동할 수 있습니다.<br />
                    </p>
                    </fieldset>
                    </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="name"
                                name="name"
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                label="이름"
                                autoFocus
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error = {formik.touched.name && Boolean(formik.errors.name)}
                                helperText= {formik.touched.name && formik.errors.name}
                                alt="이름입력창"
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                autoComplete="birth"
                                name="birth"
                                variant="outlined"
                                required
                                fullWidth
                                id="birth"
                                label="생년월일(8자리)"
                                type='birth'
                                value={formik.values.birth}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error = {formik.touched.birth && Boolean(formik.errors.birth)}
                                helperText = {formik.touched.birth && formik.errors.birth}
                                alt="생년월일8자리입력창"
                            />
                        </Grid>
                    </Grid>
                    <br />
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                이미 가입하셨나요? 로그인하기
                            </Link>
                        </Grid>
                    </Grid>
                    {FormErrorMessage && (
                        <label ><p style={{ color: '#ff0000bf', fontSize: '0.7rem', border: '1px solid', padding: '1rem', borderRadius: '10px' }}>{FormErrorMessage}</p></label>

                    )}
                    <Grid container spacing={3}>
                    <Grid item xs={6}>
                    <form onSubmit={ButtonHandler2}>
                    <Button
                        className={classes.onSubmit}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={formik.isSubmitting}
                        onSubmit={ButtonHandler2}
                    >
                        메인으로돌아가기
                    </Button>
                    </form>
                    </Grid>
                    <Grid item xs={6}>
                    <form onSubmit={ButtonHandler}>
                    <Button
                        className={classes.onSubmit}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={formik.isSubmitting}
                        onSubmit={ButtonHandler}
                    >
                        다음
                    </Button>
                    </form>
                    </Grid>
                    </Grid>
                {/* </form> */}
            </div>
            <Box mt={5}>
                <CopyrightFooter />
            </Box>
        </Container>
        )} else if(NextPage === 2){
            return (
            <Container component='main' maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
            <br />
                <Typography component="h1" variant="h5">
                    Vision Market <HearingIcon fontSize="large"/>
                </Typography>
                {/* <form className={classes.form} onSubmit={formik.handleSubmit} noValidate> */}
                    <Grid container spacing={2}>
                    <Grid item xs={12} >
                    <fieldset>    
                    <p>
                    지금부터 비전 마켓 회원가입에 대해 안내해 드리겠습니다.<br />
                    회원가입은 순서에 따라 주민번호, 아이디, 비밀번호, 주소 등을 단계별로 입력하신 후,
                    장애인 복지카드 사본은 팩스나 메일로 제출해주셔야 혜택이 적용됩니다.
                    Tap 키를 사용하여 앞으로 이동하며 Tap과 shift키를 사용하여 뒤로 이동할 수 있습니다.<br />
                    </p>
                    </fieldset>
                    </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="id"
                                name="id"
                                variant="outlined"
                                required
                                fullWidth
                                id="id"
                                label="ID"
                                autoFocus
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error = {formik.touched.email && Boolean(formik.errors.email)}
                                helperText= {formik.touched.email && formik.errors.email}
                                alt="아이디입력창"
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
                                alt="비밀번호입력창"
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
                                alt="비밀번호확인입력창"
                            />
                        </Grid>
                    </Grid>
                    <br />
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                이미 가입하셨나요? 로그인하기
                            </Link>
                        </Grid>
                    </Grid>
                    {FormErrorMessage && (
                        <label ><p style={{ color: '#ff0000bf', fontSize: '0.7rem', border: '1px solid', padding: '1rem', borderRadius: '10px' }}>{FormErrorMessage}</p></label>

                    )}
                    <Grid container spacing={3}>
                    <Grid item xs={6}>
                    <form onSubmit={ButtonHandler2}>
                    <Button
                        className={classes.onSubmit}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={formik.isSubmitting}
                        onSubmit={ButtonHandler2}
                    >
                        뒤로
                    </Button>
                    </form>
                    </Grid>
                    <Grid item xs={6}>
                    <form onSubmit={ButtonHandler}>
                    <Button
                        className={classes.onSubmit}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={formik.isSubmitting}
                        onSubmit={ButtonHandler}
                    >
                        다음
                    </Button>
                    </form>
                    </Grid>
                    </Grid>
                {/* </form> */}
            </div>
            <Box mt={5}>
                <CopyrightFooter />
            </Box>
        </Container>
        )} else if(NextPage === 3){
            return(
        <Container component='main' maxWidth="xs" >
            <CssBaseline />
            <div className={classes.paper}>
            <br />
                <Typography component="h1" variant="h5">
                    Vision Market <HearingIcon fontSize="large"/>
                </Typography>
                {/* <form className={classes.form} onSubmit={formik.handleSubmit} noValidate> */}
                    <Grid container spacing={2}  alignItems="center">
                    <Grid item xs={12} >
                    <fieldset>    
                    <p>
                    지금부터 비전 마켓 회원가입에 대해 안내해 드리겠습니다.<br />
                    회원가입은 순서에 따라 주민번호, 아이디, 비밀번호, 주소 등을 단계별로 입력하신 후,
                    장애인 복지카드 사본은 팩스나 메일로 제출해주셔야 혜택이 적용됩니다.
                    Tap 키를 사용하여 앞으로 이동하며 Tap과 shift키를 사용하여 뒤로 이동할 수 있습니다.<br />
                    </p>
                    </fieldset>
                    </Grid>
                        <Grid item xs={10} sm={10}>
                            <TextField
                                autoComplete="address"
                                name="address"
                                variant="outlined"
                                required
                                fullWidth
                                id="address"
                                label="Address"
                                autoFocus
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error = {formik.touched.email && Boolean(formik.errors.email)}
                                helperText= {formik.touched.email && formik.errors.email}
                                alt="주소입력창"
                            /> </Grid>
                            <Grid item xs={2} sm={2}>
                            <Button variant="contained" color="primary" style={{height:'50px', fontSize:'16px'}}>검색</Button>
                        </Grid>
                        <Grid item xs={6} sm={6} >
                            <TextField
                                autoComplete="ph"
                                name="ph"
                                variant="outlined"
                                required
                                fullWidth
                                id="ph"
                                label="PH"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error = {formik.touched.password && Boolean(formik.errors.password)}
                                helperText = {formik.touched.password && formik.errors.password}
                                alt="전화번호입력창"
                            />
                        </Grid>
                        <Grid item xs={4} sm={4} >
                            <TextField
                                autoComplete="CertifiNumber"
                                name="CertifiNumber"
                                variant="outlined"
                                required
                                fullWidth
                                id="CertifiNumber"
                                label="인증번호"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error = {formik.touched.password && Boolean(formik.errors.password)}
                                helperText = {formik.touched.password && formik.errors.password}
                                alt="인증번호입력창"
                            />
                        </Grid>
                        <Grid item xs={2} sm={2}>
                            <Button variant="contained" color="primary" style={{height:'50px', fontSize:'16px'}}>인증</Button>
                        </Grid>
                    </Grid>
                    <br />
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                이미 가입하셨나요? 로그인하기
                            </Link>
                        </Grid>
                    </Grid>
                    {FormErrorMessage && (
                        <label ><p style={{ color: '#ff0000bf', fontSize: '0.7rem', border: '1px solid', padding: '1rem', borderRadius: '10px' }}>{FormErrorMessage}</p></label>

                    )}
                    <Grid container spacing={3}>
                    <Grid item xs={6}>
                    <form onSubmit={ButtonHandler2}>
                    <Button
                        className={classes.onSubmit}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={formik.isSubmitting}
                        onSubmit={ButtonHandler2}
                    >
                        뒤로
                    </Button>
                    </form>
                    </Grid>
                    <Grid item xs={6}>
                    <form onSubmit={ButtonHandler}>
                    <Button
                        className={classes.onSubmit}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={formik.isSubmitting}
                        onSubmit={ButtonHandler}
                    >
                        다음
                    </Button>
                    </form>
                    </Grid>
                    </Grid>
                {/* </form> */}
            </div>
            <Box mt={5}>
                <CopyrightFooter />
            </Box>
        </Container>
            )} else if (NextPage === 4) {
            return(
                <Container component='main' maxWidth="xs" >
                <CssBaseline />
                <div className={classes.paper}>
                <br />
                <Typography component="h1" variant="h5">
                    Vision Market <HearingIcon fontSize="large"/>
                </Typography>
                <br />
                {/* <form className={classes.form} onSubmit={formik.handleSubmit} noValidate> */}
                    <Grid container spacing={2}  alignItems="center" justify="center">
                    <Grid item xs={12} >
                    <fieldset>    
                    <p>
                    당신의 취향과 프로필을 선택해주세요.<br />
                    스타일의 경우 중복으로 선택할 수 있습니다.<br />
                    </p>
                    </fieldset>
                    </Grid>
                    <Grid item xs={12} >
                    <fieldset> 
                    나이<Checkbox 
                    color="primary" alt="10대"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />10대
                    <Checkbox 
                    color="primary" alt="20대"
                    inputProps={{ 'aria-label': 'secondary checkbox' }
                    }
                    />20대
                    <Checkbox 
                    color="primary" alt="30대"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />30대
                    <Checkbox 
                    color="primary" alt="40대이상"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />40대 이상
                    <br />
                    성별<br />
                    키<br />
                    스타일<br />
                    </fieldset>
                    </Grid>
                    </Grid>
                    <br />
                    <Grid container spacing={3}>
                    <Grid item xs={6}>
                    <form onSubmit={ButtonHandler2}>
                    <Button
                        className={classes.onSubmit}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={formik.isSubmitting}
                        onSubmit={ButtonHandler2}
                    >
                        뒤로
                    </Button>
                    </form>
                    </Grid>
                    <Grid item xs={6}>
                    <form onSubmit={ButtonHandler}>
                    <Button
                        className={classes.onSubmit}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={formik.isSubmitting}
                        onSubmit={ButtonHandler}
                    >
                        가입완료
                    </Button>
                    </form>
                    </Grid>
                    </Grid>
                {/* </form> */}
            </div>
            <Box mt={5}>
                <CopyrightFooter />
            </Box>
            </Container>
            )} else {
            return(
                <div> hi </div>
                // 자동 로그인 후 메인 페이지로 이동
            )
        }
}
