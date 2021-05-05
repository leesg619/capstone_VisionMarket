import React,{useState}  from 'react';
import { Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';


const Content = props => {
    const [NextPage, setNextPage] = useState(1);

    //장애물품 -> 보조도구/생활용품
    const ButtonHandlerA = (e) => {
        e.preventDefault()
        setNextPage(2)
    } 

    //공용패션 -> 티셔츠/맨투맨/후드티 등
    const ButtonHandlerB = (e) => {
        e.preventDefault()
        setNextPage(3)
    }

    //남성패션 -> 의류/속옷/잠옷 등
    const ButtonHandlerC = (e) => {
        e.preventDefault()
        setNextPage(4)
    }

    //여성패션 -> 의류/속옷/잠옷
    const ButtonHandlerD = (e) => {
        e.preventDefault()
        setNextPage(5)
    }

    const ButtonHandler = (e) => {
        if(NextPage !== 1){
            e.preventDefault()
            setNextPage(1)
        } else {
            setNextPage(NextPage)
            // 카테고리 페이지가 1일 경우 메인페이지랑 연결
        }
    }

    if(NextPage === 1){
        return (
            <div>
            <br />
            <br />
            <Grid container spacing={2} justify="center">
                <Grid item xs={10} sm = {3} >
                <form onSubmit = {ButtonHandlerA}>
                <Button 
                fullWidth
                variant="contained" 
                color="primary" 
                style={{height:'80px', fontSize:'20px'}}
                type="submit">
                장애물품
                </Button>
                </form>
                </Grid>
                <Grid item xs={10} sm = {3} >
                <form onSubmit = {ButtonHandlerB}>
                <Button 
                fullWidth 
                variant="contained" 
                color="primary" 
                style={{height:'80px', fontSize:'20px'}}
                type="submit">
                공용패션
                </Button>
                </form>
                </Grid>
                <Grid item xs={10} sm = {3} >
                <form onSubmit = {ButtonHandlerC}>
                <Button 
                fullWidth 
                variant="contained" 
                color="primary" 
                style={{height:'80px', fontSize:'20px'}}
                type="submit">
                남성패션
                </Button>
                </form>
                </Grid>
                <Grid item xs={10} sm = {3} >
                <form onSubmit = {ButtonHandlerD}>
                <Button 
                fullWidth 
                variant="contained" 
                color="primary" 
                style={{height:'80px', fontSize:'20px'}}
                type="submit">
                여성패션
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
                    style={{height:'80px', fontSize:'20px'}}
                    >
                    보조도구
                    </Button>
                    </Grid>
                    <Grid item xs={10} sm = {3} >
                    <Button 
                    fullWidth 
                    variant="contained" 
                    color="primary" 
                    style={{height:'80px', fontSize:'20px'}}>
                    생활용품
                    </Button>
                    </Grid>
                    <Grid item xs={10} sm = {3} >
                    <form onSubmit = {ButtonHandler}>
                    <Button 
                    fullWidth 
                    variant="contained" 
                    color="primary" 
                    style={{height:'80px', fontSize:'20px'}}
                    type="submit"
                    >
                    뒤로
                    </Button>
                    </form>
                    </Grid> 
                </Grid>
                </div>
                )} else if(NextPage === 3) {
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
                            style={{height:'80px', fontSize:'20px'}}
                            >
                            티셔츠
                            </Button>
                            </Grid>
                            <Grid item xs={10} sm = {3} >
                            <Button 
                            fullWidth 
                            variant="contained" 
                            color="primary" 
                            style={{height:'80px', fontSize:'20px'}}>
                            맨투맨<br />
                            /후드티
                            </Button>
                            </Grid>
                            <Grid item xs={10} sm = {3} >
                            <Button 
                            fullWidth 
                            variant="contained" 
                            color="primary" 
                            style={{height:'80px', fontSize:'20px'}}>
                            셔츠
                            </Button>
                            </Grid>
                            <Grid item xs={10} sm = {3} >
                            <Button 
                            fullWidth 
                            variant="contained" 
                            color="primary" 
                            style={{height:'80px', fontSize:'20px'}}>
                            바지
                            </Button>
                            </Grid>
                            <Grid item xs={10} sm = {3} >
                            <Button 
                            fullWidth 
                            variant="contained" 
                            color="primary" 
                            style={{height:'80px', fontSize:'20px'}}>
                            운동복
                            </Button>
                            </Grid>
                            <Grid item xs={10} sm = {3} >
                            <Button 
                            fullWidth 
                            variant="contained" 
                            color="primary" 
                            style={{height:'80px', fontSize:'20px'}}>
                            니트류
                            </Button>
                            </Grid>
                            <Grid item xs={10} sm = {3} >
                            <Button 
                            fullWidth 
                            variant="contained" 
                            color="primary" 
                            style={{height:'80px', fontSize:'20px'}}>
                            아우터
                            </Button>
                            </Grid>
                            <Grid item xs={10} sm = {3} >
                            <Button 
                            fullWidth 
                            variant="contained" 
                            color="primary" 
                            style={{height:'80px', fontSize:'20px'}}>
                            커플룩
                            </Button>
                            </Grid>
                            <Grid item xs={10} sm = {3} >
                            <form onSubmit = {ButtonHandler}>
                            <Button 
                            fullWidth 
                            variant="contained" 
                            color="primary" 
                            style={{height:'80px', fontSize:'20px'}}
                            type="submit"
                            >
                            뒤로
                            </Button>
                            </form>
                            </Grid> 
                        </Grid>
                        </div>
                        )}
                        else if(NextPage === 4) {
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
                                    style={{height:'80px', fontSize:'20px'}}
                                    >
                                    의류
                                    </Button>
                                    </Grid>
                                    <Grid item xs={10} sm = {3} >
                                    <Button 
                                    fullWidth 
                                    variant="contained" 
                                    color="primary" 
                                    style={{height:'80px', fontSize:'20px'}}>
                                    속옷/잠옷
                                    </Button>
                                    </Grid>
                                    <Grid item xs={10} sm = {3} >
                                    <Button 
                                    fullWidth 
                                    variant="contained" 
                                    color="primary" 
                                    style={{height:'80px', fontSize:'20px'}}>
                                    신발
                                    </Button>
                                    </Grid>
                                    <Grid item xs={10} sm = {3} >
                                    <Button 
                                    fullWidth 
                                    variant="contained" 
                                    color="primary" 
                                    style={{height:'80px', fontSize:'20px'}}>
                                    잡화
                                    </Button>
                                    </Grid>
                                    <Grid item xs={10} sm = {3} >
                                    <form onSubmit = {ButtonHandler}>
                                    <Button 
                                    fullWidth 
                                    variant="contained" 
                                    color="primary" 
                                    style={{height:'80px', fontSize:'20px'}}
                                    type="submit"
                                    >
                                    뒤로
                                    </Button>
                                    </form>
                                    </Grid> 
                                </Grid>
                                </div>
                                )} else if(NextPage === 5) {
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
                                            style={{height:'80px', fontSize:'20px'}}
                                            >
                                            의류
                                            </Button>
                                            </Grid>
                                            <Grid item xs={10} sm = {3} >
                                            <Button 
                                            fullWidth 
                                            variant="contained" 
                                            color="primary" 
                                            style={{height:'80px', fontSize:'20px'}}>
                                            속옷/잠옷
                                            </Button>
                                            </Grid>
                                            <Grid item xs={10} sm = {3} >
                                            <Button 
                                            fullWidth 
                                            variant="contained" 
                                            color="primary" 
                                            style={{height:'80px', fontSize:'20px'}}>
                                            신발
                                            </Button>
                                            </Grid>
                                            <Grid item xs={10} sm = {3} >
                                            <Button 
                                            fullWidth 
                                            variant="contained" 
                                            color="primary" 
                                            style={{height:'80px', fontSize:'20px'}}>
                                            가방/잡화
                                            </Button>
                                            </Grid>
                                            <Grid item xs={10} sm = {3} >
                                            <form onSubmit = {ButtonHandler}>
                                            <Button 
                                            fullWidth 
                                            variant="contained" 
                                            color="primary" 
                                            style={{height:'80px', fontSize:'20px'}}
                                            type="submit"
                                            >
                                            뒤로
                                            </Button>
                                            </form>
                                            </Grid> 
                                        </Grid>
                                        </div>
                                        )}else {
                                            return(
                                            <div>error</div>
                                            )}}
                                            
export default Content;