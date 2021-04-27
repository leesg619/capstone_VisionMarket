import { Box, Button, Card, CardContent, Container, Dialog, DialogActions, DialogContent, DialogContentText, Divider, Grid, Input, makeStyles, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'

const useStyles = makeStyles({
    root: {
      minWidth: 200,
      height: 180,
      minHeight: 180,
      marginBottom: 10,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    pos: {
      marginBottom: 12,
    },
    BoxComponent:{
        height:'80px',
        backgroundColor:'#ffffff',
        color:'#000000',
        justifyContent:'center',
        alignItems:'center',
        display:'flex'
    },
    InputBoxComponent:{
        height:'240px',
        backgroundColor:'#ffffff',
        color:'#000000',
        justifyContent:'center',
        alignItems:'center',
        display:'flex'
    }
  });

export default function CancelCard(){
    const classes = useStyles();
    // 모달창
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (e) => {
        console.log(e.currentTarget.value)
        setOpen(false);
    }

    return(
        <div>
        <Container>
        <Card className={classes.root} elevation={3}>
            <CardContent>
                <Grid container>
                <Grid item xs={12} sm={9}>
                    <Dialog
                        open={handleClickOpen}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        {/* <DialogTitle id="alert-dialog-title">{"숨기기한 구매후기는 복구할 수 없으며 추후 작성이 불가능합니다.이 상품을 숨기시겠습니까?"}</DialogTitle> */}
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            숨기기한 구매후기는 복구할 수 없으며 추후 작성이 불가능합니다. 이 상품을 숨기시겠습니까?
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} value='removeNo' color="primary">
                                아니오
                            </Button>
                            <Button onClick={handleClose} value='removeYes' color="primary" autoFocus>
                                네
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Grid container>   
                    <Grid item xs={3} sm={3}>
                        <img src="https://thumbnail6.coupangcdn.com/thumbnails/remote/120x120ex/image/retail/images/2019/12/28/10/7/01178ffe-33c8-4019-bc71-27a4fc55e8d6.jpg" />
                    </Grid>
                    <Grid item xs={9} sm={9}>
                            <Typography style={{marginBottom: '12px'}}>
                                에프씨팩토리 에브리데이 클린미세먼지 방역마스트 [kf94 50개], 1팩 50매입 주문내역 길게 적기
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                2021.04.27 배송
                            </Typography>
                    </Grid>
                    </Grid>     
                    
                    
                </Grid>
                <Grid item xs={12} sm={3}>              
                </Grid>
                </Grid>
            </CardContent>
        </Card>
        <br/>
        <Divider/>
        <Box className={classes.BoxComponent}>
            <Grid container>
                <Grid item xs={12} sm={2} style={{justifyContent:'center', display:'flex', alignItems:'center'}}>
                    점수
                </Grid>
                <Grid item xs={12} sm={10}>
                    <Input placeholder="점수" inputProps={{ 'aria-label': 'description' }} />
                </Grid>
            </Grid>
        </Box>
        <Divider/>
        <Box className={classes.InputBoxComponent}>
            <Grid container>
                <Grid item xs={12} sm={2} style={{justifyContent:'center', display:'flex', alignItems:'center'}}>
                    구매후기
                </Grid>
                <Grid item xs={12} sm={10}>
                <Box style={{display:'flex'}}>
                    <TextField
                    id="outlined-multiline-static"
                    label="구매후기"
                    multiline
                    rows={8}
                    variant="outlined"
                    style={{ width:'700px',maxWidth:'700px'}}
                />
                    </Box>
                
                </Grid>
            </Grid>
        </Box>
        <Divider/>
        <Box className={classes.BoxComponent}>
            <Grid container>
                <Grid item xs={12} sm={2} style={{justifyContent:'center', display:'flex', alignItems:'center'}}>
                    한줄 리뷰
                </Grid>
                <Grid item xs={12} sm={10}>
                    
                    <Box style={{display:'flex'}}>
                    <Input placeholder="한줄 리뷰" inputProps={{ 'aria-label': 'description' }} style={{width:'700px', maxWidth:'700px'}} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
        <Divider/>
        <Box className={classes.BoxComponent}>
            
            <Button variant="outlined" style={{width:'100px', marginTop:'20px', marginBottom:'20px'}}>등록하기</Button>
        </Box>

        </Container>
        
        </div>
    )
}