import { Box, Button, Card, CardContent, Container, Divider, Grid, Input, makeStyles, TextField, Typography } from '@material-ui/core'
import React, { useState, useEffect, useCallback } from 'react'
import Rating from '@material-ui/lab/Rating';
import axios from 'axios'
const useStyles = makeStyles({
    root: {
      height: 180,
      minHeight: 180,
      marginBottom: 10,
    },
    pos: {
      marginBottom: 12,
    },
    BoxComponent:{
        justifyContent:'center',
        alignItems:'center',
        display:'flex',
        margin:'auto'
    },
    InputBoxComponent:{
        height:'240px',
        justifyContent:'center',
        alignItems:'center',
        display:'flex'
    }
  });

export default function ReviewVoiceWrite(props){
    const classes = useStyles();

    const [value, setValue] = React.useState(2); //별점
    const [FilePath, setFilePath] = useState("");
    const [post, setPost] = useState({});
    const userId=localStorage.getItem('userId');
    const postId = props.match.params.postId;

    const handleChangeFilePath = (event) => {
        setFilePath(event.currentTarget.value)
    }
    

    useEffect(() => {
        axios.post('/api/post/getPost', {postId:postId})
        .then(response => {
            console.log(response.data.post)
            setPost(response.data.post)
        })
    }, [])

    const onSubmit = (event) => {
        event.preventDefault();

        if (post === null || FilePath === "") {
            return alert('Please first fill all the fields')
        }

        const variables = {
            author: userId,
            post: post._id,
            filepath: FilePath,
            voice: true,
            star: value
        }

        axios.post('/api/review/uploadReview', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Review Uploaded Successfully')
                    props.history.push('/order')
                } else {
                    alert('Failed to upload review')
                }
            })

    }

    //음성녹음용
    const [stream, setStream] = useState();
    const [media, setMedia] = useState();
    const [onRec, setOnRec] = useState(true);
    const [source, setSource] = useState();
    const [analyser, setAnalyser] = useState();
    const [audioUrl, setAudioUrl] = useState();
    const [file, setFile] = useState();
    const onRecAudio = () => {
        // 음원정보를 담은 노드를 생성하거나 음원을 실행또는 디코딩 시키는 일을 한다
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        
        // 자바스크립트를 통해 음원의 진행상태에 직접접근에 사용된다.
        const analyser = audioCtx.createScriptProcessor(0, 1, 1);
        setAnalyser(analyser);
    
        function makeSound(stream) {
          // 내 컴퓨터의 마이크나 다른 소스를 통해 발생한 오디오 스트림의 정보를 보여준다.
          const source = audioCtx.createMediaStreamSource(stream);
          setSource(source);
          
          // AudioBufferSourceNode 연결
          source.connect(analyser);
          analyser.connect(audioCtx.destination);
        }
        
        // 마이크 사용 권한 획득 후 녹음 시작
        navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
          const mediaRecorder = new MediaRecorder(stream);
          mediaRecorder.start();
          setStream(stream);
          setMedia(mediaRecorder);
          makeSound(stream);
        
        analyser.onaudioprocess = function (e) {
            // 10초) 지나면 자동으로 음성 저장 및 녹음 중지
            if (e.playbackTime > 10) {
              stream.getAudioTracks().forEach(function (track) {
                track.stop();
              });
              mediaRecorder.stop();
              // 메서드가 호출 된 노드 연결 해제
              analyser.disconnect();
              audioCtx.createMediaStreamSource(stream).disconnect();
    
              mediaRecorder.ondataavailable = function (e) {
                setAudioUrl(e.data);
                setOnRec(true);
              };
            } else {// 음성 녹음이 시작됐을 때 onRec state값을 false로 변경
              setOnRec(false);
            }
          };
        });
      };

    const offRecAudio = () => {
        // dataavailable 이벤트로 Blob 데이터에 대한 응답을 받을 수 있음
        media.ondataavailable = function (e) {
          setAudioUrl(e.data);
          setOnRec(true);
        };
    
        // 모든 트랙에서 stop()을 호출해 오디오 스트림을 정지
        stream.getAudioTracks().forEach(function (track) {
          track.stop();
        });
    
        // 미디어 캡처 중지
        media.stop();
        
        // 메서드가 호출 된 노드 연결 해제
        analyser.disconnect();
        source.disconnect();
      };

      const onSubmitAudioFile = useCallback(() => {
        if (audioUrl) {
          console.log(URL.createObjectURL(audioUrl)); // 출력된 링크에서 녹음된 오디오 확인 가능
        }
        // File 생성자를 사용해 파일로 변환
        const sound = new File([audioUrl], "soundBlob.m4a", { lastModified: new Date().getTime(), type: "audio/mpeg" });
        console.log(sound); // File 정보 출력
        setFile(sound);


        //곧바로 multer로 저장시키고 filepath잡아주기
        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        formData.append("file", sound)
        
        axios.post('/api/review/uploadfiles', formData, config)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data);

                    setFilePath(response.data.filePath)

                    let variable = {
                        filePath: response.data.filePath,
                        fileName: response.data.fileName
                    }

                } else{
                    alert('음성 업로드를 실패하였습니다.');
                }
            })

    }, [audioUrl]);
        
    return(
        <div>
        <Container style={{paddingTop:'2%'}}>
        <Card className={classes.root} elevation={3}>
            <CardContent>
                <Grid container>
                <Grid item xs={12} sm={9}>
                    <Grid container>   
                    <Grid item xs={3} sm={3}>
                        <img src={post.image}/>
                    </Grid>
                    <Grid item xs={9} sm={9}>
                            <Typography style={{marginBottom: '12px'}}>
                                {post.title}
                            </Typography>
                            <Typography className={classes.pos}>
                                2021년 04월 27일 배송완료
                            </Typography>
                    </Grid>
                    </Grid>     
                </Grid>
                </Grid>
            </CardContent>
        </Card>
        <br/>
        <Divider/>
        <br/>
        <form encType='multipart/form-data'>
        <Box component="fieldset" mb={3} borderColor="transparent" className={classes.BoxComponent}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography component="legend">[ 별점 ]</Typography>
                    <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    />
                </Grid>
            </Grid>
        </Box>
        <Divider/>
        <Box className={classes.InputBoxComponent}>
            <Grid container>
                <Grid item xs={12}>
                  <Box style={{display:'flex'}}>
                    <Button onClick={onRec ? onRecAudio : offRecAudio}>녹음하기</Button>
                    <Button onClick={onSubmitAudioFile}>음성 확인</Button>
                   
                    <Input
                    onChange={handleChangeFilePath}
                    value={FilePath}
                    />

                  </Box>
                </Grid>
            </Grid>
        </Box>
        <Divider/>
        <Box className={classes.BoxComponent}>
            <Button onClick={onSubmit}variant="outlined" style={{fontSize:'1.2rem', width:'120px', marginTop:'20px', marginBottom:'20px'}}>등록하기</Button>
        </Box>
        </form>
        </Container>
        
        </div>
    )
}