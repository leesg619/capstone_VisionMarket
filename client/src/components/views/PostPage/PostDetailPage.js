import { Avatar, Container, CssBaseline, Grid, makeStyles, Typography, ButtonBase, Box, Button, List, ListItem, ListItemText, Divider, InputLabel, MenuItem, FormHelperText, FormControl, Select } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import React, { useState } from 'react'
import { LockOutlined } from '@material-ui/icons'
import CopyrightFooter from '../CopyrightFooter/CopyrightFooter'
import { useDispatch } from 'react-redux'

import { registerUser } from '../../../_action/user_actions'

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import StarIcon from '@material-ui/icons/Star';

import stussy from './img/stussy.jpg';
import ex1 from './img/1.jpg'
import ex2 from './img/2.jpg'
import ex0 from './img/0.png'
import ex4 from './img/4.png'
//image json파일로 만들어서 코드 map 사용, 빼서 사용하면 일일이 하나씩 import할필요없음

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
    onSubmit : {
        margin : theme.spacing(3, 0, 2)
    },
    root: {
        flexGrow: 1,
    },
    container: {
        padding: theme.spacing(9),
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100vh',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
    },
}))

export default function PostDetailPage(props) {
    const classes = useStyles()
    const dispatch = useDispatch();

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [size, setSize] = React.useState('');
    const handleSizeChange = (event) => {
        setSize(event.target.value);
    };

    return (
    <Container component='main' maxWidth="lg" className={classes.container}>
        <CssBaseline />
        <Typography component="div" style={{height: '100vh' }}>

        <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={stussy} />
              </ButtonBase>
            </Grid>
            <Grid item xs={6} md={6}>
                <Typography component="h1" variant ="h4" > Basic Stussy TEE </Typography>
                <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />  900개의 상품 리뷰
                <Divider />
                <List component="nav" >
                <ListItem><ListItemText primary="59,000원" /></ListItem>
                <ListItem><ListItemText primary="Stussy Korea" /></ListItem>
                <ListItem><ListItemText primary="Black" /></ListItem>
                </List>

                <FormControl required className={classes.formControl}>
                    <InputLabel id="demo-simple-select-required-label">Size</InputLabel>
                    <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    value= {size}
                    onChange={handleSizeChange}
                    className={classes.selectEmpty}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"S"}>S</MenuItem>
                    <MenuItem value={"M"}>M</MenuItem>
                    <MenuItem value={"L"}>L</MenuItem>
                    <MenuItem value={"XL"}>XL</MenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                    <Box component="span" m={1}><Button /></Box>
                    <TextField
                        id="standard-number"
                        label="Number*"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                    }}
                    />
                    <Box component="span" m={1}><Button /></Box>
                    <Button variant="outlined" color="primary">장바구니</Button>
                    <Box component="span" m={1}><Button /></Box>
                    <Button variant="outlined" color="secondary">구매하기</Button>
            </FormControl>
  
            </Grid>

        </Grid>
        
            
        <Paper className={classes.root} >
          <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
          >
          <Tab label="상품 상세" />
          <Tab label="상품 리뷰" />
          <Tab label="배송/교환/반품안내" />
          </Tabs>
        </Paper>
        <Box component="span" m={1}><Button /></Box>
        <Box width="100%"><img className={classes.img} alt="complex" src={ex0} /></Box>
        <Box width="100%"><img className={classes.img} alt="complex" src={ex4} /></Box>
        <Box width="100%"><img className={classes.img} alt="complex" src={ex1} /></Box>
        <Box width="100%"><img className={classes.img} alt="complex" src={ex2} /></Box>
        

        </Typography>
        
        

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