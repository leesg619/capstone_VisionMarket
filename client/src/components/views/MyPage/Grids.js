import React, { useEffect } from "react";
import { Grid, Box, Typography, makeStyles, Container, IconButton } from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { useLocation, useHistory } from "react-router";
import Order from "./MyPageComponent/Order";
import Cancel from "./MyPageComponent/Cancel";
import CouponPage from "./MyPageComponent/CouponPage";
import PointPage from "./MyPageComponent/PointPage";
import DeliveryCard from "./MyPageComponent/DeliveryCard"
import ReviewPage from "./MyPageComponent/ReviewPage";
import ReviewWrite from "./MyPageComponent/ReviewWrite";

const useStyles = makeStyles((theme) => ({
    paper: {
        height: 140,
        width: 100,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        paddingTop: 10
    },
    subTitle: {
        fontSize: 20,
        fontWeight: "bold",
        paddingTop: 20
    },
    active: {
        backgroundColor:'#DDDADA'
    },
    IconButtonEf:{
        marginTop:'100'
    },
    BoxComponent:{
        textAlign:'center',
        height:'80px',   
        justifyContent:'center',
        alignItems:'center',
        display:'flex',
        backgroundColor:'#F8F8F8',
        color:"#555555",
        borderColor:'#B6B5B5'

    },
}));

export default (props) => {
    useEffect(()=>{
        const PageMenu = props.match.params.PageMenu;
        console.log(PageMenu);
    }, [props.match.params.PageMenu])

    const classes = useStyles();
    const history = useHistory()
    const location = useLocation()
    const Delivering = 0
    const Coupon = 1
    const point = 1000

    const shopItems = [
        {
            text: '주문목록 / 배송조회',
            path: '/myPage/order'
        },
        {
            text: '취소 / 반품 / 교환 / 환불내역',
            path: '/myPage/cancel-return-exchange'
        },
        {
            text: '리뷰 관리',
            path: '/myPage/review'
        }
    ]

    const effectItems = [
        {
            text: '할인 쿠폰',
            path: '/myPage/discount-coupon'
        },
        {
            text: '적립금',
            path: '/myPage/point'
        }
    ]

    const informItems = [
        {
            text: '개인정보 확인 / 수정',
            path: '/myPage/userModify'
        },
        {
            text: '배송지 관리',
            path: '/myPage/DeliveryPlace'
        }
    ]

    return(
    <>
        
        <Container>
        <Typography componet="h2" variant="h5" gutterBottom>
            마이페이지
        </Typography>
        <Grid container spacing={0}>
        <Grid item xs={6} sm={3}>
            <Box border={1} p={2} className={classes.BoxComponent}>
                <Typography variant="h6" >MyPage</Typography>
            </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
            <Box  border={1} borderLeft={0}  p={2} className={classes.BoxComponent}>
                <IconButton disableRipple color="inherit"
                onClick={() => history.push('/myPage/order')}
                >
                    <Typography variant="h6" >배송중 : {Delivering}개 </Typography>    
                </IconButton>
            </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
            <Box  border={1} borderLeft={0} p={2} className={classes.BoxComponent}>
                <IconButton disableRipple color="inherit" 
                onClick={() => history.push('/myPage/discount-coupon')}
                >
                    <Typography variant="h6" >할인쿠폰 : {Coupon}장 </Typography>
                    
                </IconButton>
            </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
            <Box  border={1} borderLeft={0}  p={2} className={classes.BoxComponent}>
                <IconButton disableRipple color="inherit" 
                onClick={() => history.push('/myPage/point')}
                >
                    <Typography variant="h6" >적립금 : {point}원 </Typography>
                </IconButton>
            </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
            <Box bgcolor="#F8F8F8" border={1} borderTop={0} color="#555555" borderColor="#B6B5B5" p={2}>
            <Typography variant="h5" className={classes.title}>
                My 쇼핑
            </Typography>
            <List component="nav" aria-label="main mailbox folders">
                {shopItems.map(item => (
                    <ListItem 
                    button
                    key={item.text}
                    onClick={() => history.push(item.path)}
                    className={location.pathname === item.path ? classes.active : null}
                    >   
                        <ListItemText primary={item.text}/>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <Typography variant="h5" className={classes.subTitle}>
                My 혜택
            </Typography>
            <List component="nav" aria-label="main mailbox folders">
            {effectItems.map(item => (
                    <ListItem 
                    button
                    key={item.text}
                    onClick={() => history.push(item.path)}
                    className={location.pathname === item.path ? classes.active : null}
                    >   
                        <ListItemText primary={item.text}/>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <Typography variant="h5" className={classes.subTitle}>
                My 정보
            </Typography>
            <List component="nav" aria-label="main mailbox folders">
            {informItems.map(item => (
                    <ListItem 
                    button
                    key={item.text}
                    onClick={() => history.push(item.path)}
                    className={location.pathname === item.path ? classes.active : null}
                    >   
                        <ListItemText primary={item.text}/>
                    </ListItem>
                ))}
            </List>
            </Box>
        </Grid>
        <Grid item xs={12} sm={9}>
            <br/>
                {
                    props.match.params.PageMenu === 'order' ?
                    <Order/> : null
                }
                {
                    props.match.params.PageMenu === 'cancel-return-exchange' ?
                    <Cancel/> : null
                }
                {
                    props.match.params.PageMenu === 'review' ?
                    <ReviewPage/> : null
                }
                {
                    props.match.params.PageMenu === 'review&productId=1' ?
                    <ReviewWrite/> : null
                }
                {
                    props.match.params.PageMenu === 'discount-coupon' ?
                    <CouponPage/> : null
                }
                {
                    props.match.params.PageMenu === 'point' ?
                    <PointPage/> : null
                }
                {
                    props.match.params.PageMenu === 'DeliveryPlace' ?
                    <div>
                        <DeliveryCard/>
                        <DeliveryCard/>
                    </div> : null
                }
                {
                    props.match.params.PageMenu === 'userModify' ?
                    '개인정보 수정 페이지로' : null
                }
        </Grid>
        <Grid item xs={12}>
            <Box bgcolor="#ffffff" color="#000000" p={2} className={classes.BoxComponent}>
                <Typography variant="h6">하단</Typography>
            </Box>
        </Grid>
        </Grid>
        </Container>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

    </>
    );
};
