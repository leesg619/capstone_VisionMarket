import React,{useState,useEffect }  from 'react';
import { Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';

const MyContent = props => {

    const [NextPage, setNextPage] = useState(1);

    //나의 정보 -> 리뷰관리하기, 개인정보수정, 배송지 변경, 카드 및 계좌등록
    const ButtonHandlerA = (e) => {
        e.preventDefault()
        setNextPage(2)
       
    }

    const ButtonHandler = (e) => {
        if(NextPage !== 1){
            e.preventDefault()
            setNextPage(1)
        } else {
            setNextPage(NextPage)
        }
    }
    
    if(NextPage === 1){
        return (
            <div>
            <br />
            <br />
            <Grid container spacing={2} justify="center">
                <Grid item xs={10} sm = {3} >
                <Button 
                fullWidth
                variant="contained" 
                color="primary" 
                style={{height:'80px', fontSize:'20px', backgroundColor: '#505050', color: 'white'}}
                type="submit"
                href='order'>
                나의 쇼핑
                </Button>
                </Grid>
                <Grid item xs={10} sm = {3} >
                <Button 
                fullWidth 
                variant="contained" 
                color="primary" 
                style={{height:'80px', fontSize:'20px', backgroundColor: '#505050', color: 'white'}}
                type="submit"
                href='pointPage'
                >
                나의 혜택
                </Button>
                </Grid>
                <Grid item xs={10} sm = {3} >
                <form onSubmit = {ButtonHandlerA}>
                <Button 
                fullWidth 
                variant="contained" 
                style={{height:'80px', fontSize:'20px', backgroundColor: '#505050', color: 'white'}}
                type="submit"
                >
                나의 정보
                </Button>
                </form>
                </Grid>
            </Grid>
            </div>
        )} else if(NextPage === 2) {
            return (
                <div>
                <br />
                <br />
                <Grid container spacing={2} justify="center">
                    <Grid item xs={10} sm = {3} >
                    <Button 
                    fullWidth
                    variant="contained" 
                    color="primary" 
                    style={{height:'80px', fontSize:'20px', backgroundColor: '#505050', color: 'white'}}
                    href='reviewPage'
                    >
                    리뷰관리
                    </Button>
                    </Grid>
                    <Grid item xs={10} sm = {3} >
                    <Button 
                    fullWidth 
                    variant="contained" 
                    color="primary" 
                    style={{height:'80px', fontSize:'20px', backgroundColor: '#505050', color: 'white'}}
                    href='privacy'
                    >
                    개인정보수정
                    </Button>
                    </Grid>
                    <Grid item xs={10} sm = {3} >
                    <Button 
                    fullWidth 
                    variant="contained" 
                    color="primary" 
                    style={{height:'80px', fontSize:'20px', backgroundColor: '#505050', color: 'white'}}
                    href='DeliveryCard'
                    >
                    배송정보변경
                    </Button>
                    </Grid>
                    <Grid item xs={10} sm = {3} >
                    <Button 
                    fullWidth 
                    variant="contained" 
                    color="primary" 
                    style={{height:'80px', fontSize:'20px', backgroundColor: '#505050', color: 'white'}}
                    href='card'
                    >
                    카드/계좌등록
                    </Button>
                    </Grid>
                    <Grid item xs={10} sm = {3} >
                    <form onSubmit = {ButtonHandler}>
                    <Button 
                    fullWidth 
                    variant="contained" 
                    color="primary" 
                    style={{height:'80px', fontSize:'20px', backgroundColor: '#505050', color: 'white'}}
                    type="submit"
                    >
                    뒤로
                    </Button>
                    </form>
                    </Grid> 
                </Grid>
                </div>
                )} else {
                    return(
                    <div>error</div>)}}
                                            
export default MyContent;