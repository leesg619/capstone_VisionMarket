import { Box, Button, Container,  Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

export default function RefundWB(){

    const useStyles = makeStyles({
        paper:{
            width: "100%",
            height: "100%"
        },
        root:{
            marginBottom: 0,
        },
        BoxComponent:{
            height:'80px',
            backgroundColor:'#EFEDED',
            color:'#000000',
            justifyContent:'center',
            alignItems:'center',
            display:'flex'
        }
    })
    const bankNum = '214351351231'
    const classes = useStyles();

    return(
        

        <Container>
            <Grid container style={{textAlign:'center'}} className={classes.root} spacing={0} justify="center">
                <Grid item xs={12} sm={3} >
                    <Box border={1} borderRight={0} className={classes.BoxComponent}>
                        <Typography variant="h6">
                            무통장환불 계좌정보
                        </Typography> 
                    </Box>
                    
                </Grid>
                <Grid item xs={12} sm={7} >
                <Box border={1} className={classes.BoxComponent}>
                    <Typography variant="h6">
                        {
                            bankNum=='' ? '계좌를 등록해주세요' : bankNum
                        }
                    </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={2}>
                <Box border={1} borderLeft={0} className={classes.BoxComponent}>
                    <Button variant="outlined">
                        {
                            bankNum=='' ? '계좌 등록' : '계좌 변경'
                        }
                    </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )

}
