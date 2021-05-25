import { Button, Card, CardActions, CardContent, ButtonGroup, Grid, makeStyles, Typography } from '@material-ui/core'
import { CancelScheduleSend } from '@material-ui/icons';
import React, { useState } from 'react'

const useStyles = makeStyles({
    root: {
      marginBottom: 10,
    },
  });

export default function ReviewedCard(props){
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (e) => {
        console.log(e.currentTarget.value)
        setOpen(false);
    }
    const review = props.review;
    // const [content, setContent] =useState(review.content)
    // const [title, setTitle] = useState(review.title)

    return(
        <Card className={classes.root} elevation={3}>
        <CardContent>
                <Grid container spacing={1}>
                <Grid item xs={12} sm={9}>
                    <Grid container justify='center'>   
                    <Grid item xs={4} sm={2}>
                        <img src={props.image} />
                    </Grid>
                    <Grid item xs={8} sm={10}>
                            <Typography style={{marginBottom: '12px'}}>
                              {props.title}
                            </Typography>
                            <Typography >
                                {
                                    props.content ?
                                    props.content:
                                    "음성리뷰"
                                }
                            </Typography>
                    </Grid> 
                    </Grid>     
                </Grid>
                <Grid item xs={12} sm={3}>
                <CardActions >
                <ButtonGroup
                    orientation="vertical"
                    fullWidth
                >
                    <Button style={{fontSize:'1rem'}}>수정</Button>
                    <Button style={{fontSize:'1rem'}}>삭제</Button>
                </ButtonGroup>
                </CardActions>
                </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}