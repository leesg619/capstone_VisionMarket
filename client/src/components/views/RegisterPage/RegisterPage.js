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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';


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


    // 라디오
    const [selectedValue, setSelectedValue] = React.useState("10대");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
      
    // 체크박스 
    const [checked, setChecked] = React.useState(true);

    const handleChange2 = (event) => {
          setChecked(event.target.checked);
    };

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
                    <Grid container spacing={2}  alignItems="center" justify="center">
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
                        <Grid item xs={9} sm={10}>
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
                        <Grid item xs={5} sm={6} >
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
                    <p style={{fontSize: '1.0rem'}} >
                    당신의 취향과 프로필을 선택해주세요.<br />
                    스타일의 경우 중복으로 선택할 수 있습니다.<br />
                    </p>
                    </fieldset>
                    </Grid>
                    <Grid item xs={12} >
                    <fieldset>
                        <br />
                    <div style={{fontSize: '1.0rem'}}>[ 나이 ]</div>
                    <RadioGroup row aria-label="position" name="position" defaultValue="top" alignItems="center" justify="center">
                    <FormControlLabel
                    value="10대"
                    control={<Radio color="primary" />}
                    label={<p style={{fontSize : "15px"}}>10대</p>}
                    labelPlacement="10대"
                    alt="10대"
                    />
                    <FormControlLabel
                    value="20대"
                    control={<Radio color="primary" />}
                    label={<p style={{fontSize : "15px"}}>20대</p>}
                    labelPlacement="20대"
                    alt="20대"
                    />
                    <FormControlLabel
                    value="30대"
                    control={<Radio color="primary" />}
                    label={<p style={{fontSize : "15px"}}>30대</p>}
                    labelPlacement="30대"
                    alt="30대"
                    />
                    <FormControlLabel
                    value="40대이상"
                    control={<Radio color="primary" />}
                    label={<p style={{fontSize : "15px"}}>40대이상</p>}
                    labelPlacement="40대이상"
                    alt="40대이상"
                    />
                    </RadioGroup>
                    <hr />
                    <br />
                    <div style={{fontSize: '1.0rem'}}>[ 성별 ]</div>
                    <RadioGroup row aria-label="position" name="position" defaultValue="top" alignItems="center" justify="center">
                    <FormControlLabel
                    value="남자"
                    control={<Radio color="primary" />}
                    label={<p style={{fontSize : "15px"}}>남자</p>}
                    labelPlacement="남자"
                    alt="남자"
                    />
                    <FormControlLabel
                    value="여자"
                    control={<Radio color="primary" />}
                    label={<p style={{fontSize : "15px"}}>여자</p>}
                    labelPlacement="여자"
                    alt="여자"
                    />
                    </RadioGroup>
                    <hr />
                    <br />                    
                    <div style={{fontSize: '1.0rem'}}>[ 키 ]</div>
                    <RadioGroup row aria-label="position" name="position" defaultValue="top" alignItems="center" justify="center">
                    <FormControlLabel
                    value="140"
                    control={<Radio color="primary" />}
                    label={<p style={{fontSize : "15px"}}>150cm 이하</p>}
                    labelPlacement="140"
                    alt="150센티미터이하"
                    />
                    <FormControlLabel
                    value="150"
                    control={<Radio color="primary" />}
                    label={<p style={{fontSize : "15px"}}>150cm</p>}
                    labelPlacement="150"
                    alt="150센티미터"
                    />
                    <FormControlLabel
                    value="160"
                    control={<Radio color="primary" />}
                    label={<p style={{fontSize : "15px"}}>160cm</p>}
                    labelPlacement="160"
                    alt="160센티미터"
                    />
                    <FormControlLabel
                    value="170"
                    control={<Radio color="primary" />}
                    label={<p style={{fontSize : "15px"}}>170cm</p>}
                    labelPlacement="170"
                    alt="170센티미터"
                    />
                    <FormControlLabel
                    value="180"
                    control={<Radio color="primary" />}
                    label={<p style={{fontSize : "15px"}}>180cm</p>}
                    labelPlacement="180"
                    alt="180센티미터"
                    />
                    <FormControlLabel
                    value="190"
                    control={<Radio color="primary" />}
                    label={<p style={{fontSize : "15px"}}>190cm 이상</p>}
                    labelPlacement="190"
                    alt="190센티미터이상"
                    />
                    </RadioGroup>
                    <hr />
                    <br />
                    <div style={{fontSize: '1.0rem'}}>[ 스타일 ]</div>
                    <Checkbox 
                    color="primary" alt="심플"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />심플
                    <Checkbox 
                    color="primary" alt="캐주얼"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />캐주얼
                    <Checkbox 
                    color="primary" alt="시크"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />시크
                    <Checkbox 
                    color="primary" alt="유니크"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />유니크
                    <br />
                    <Checkbox 
                    color="primary" alt="오피스"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />오피스
                    <Checkbox 
                    color="primary" alt="스트릿"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />스트릿
                    <br />
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
