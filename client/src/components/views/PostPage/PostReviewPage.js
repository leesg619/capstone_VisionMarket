import { Container, CssBaseline, Grid, makeStyles, TextareaAutosize, Input, Typography, ButtonBase, Box, Button, List, ListItem, ListItemText, Divider, InputLabel, MenuItem, FormHelperText, FormControl, Select } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import React, { useState,useEffect, useSelector, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import axios from 'axios'
import Dropzone from 'react-dropzone';

const useStyles = makeStyles((theme) => ({
    
}))

export default function PostReviewPage(props) {
    const classes = useStyles()
    const dispatch = useDispatch();
    const mongoose=require('mongoose');
    const postId = mongoose.Types.ObjectId('609a7ea8e8ffe95ab80c19e2');//props.match.params.postId
    //일반리뷰    
    const [user, setUser] = useState({});
    const [post, setPost] = useState({});
    const [Content, setContent] = useState("");
    const [FilePath, setFilePath] = useState("");

    useEffect(() => {
        axios.get(`api/users/auth`)
        .then(response =>{
            setUser(response.data);
        })
        axios.get(`/api/post/get/posts_by_id?id=${postId}&type=single`)
        .then(response => {
            console.log(response.data.post[0])
            setPost(response.data.post[0])
        })
    }, [])

    const handleChangeContent = (event) => {
        setContent(event.currentTarget.value)
    }
    const handleChangeFilePath = (event) => {
        setFilePath(event.currentTarget.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (post === null || Content === "" ||
            FilePath === "") {
            return alert('Please first fill all the fields')
        }

        const variables = {
            author: user._id,
            post: post._id,
            content: Content,
            filePath: FilePath,
        }

        axios.post('/api/review/uploadReview', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Review Uploaded Successfully')
                    props.history.push('/')
                } else {
                    alert('Failed to upload review')
                }
            })

    }
    
    const onDrop = (files) => {

        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        console.log(files)
        formData.append("file", files[0])

        axios.post('/api/review/uploadfiles', formData, config)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data);

                    setFilePath(response.data.filePath)

                    let variable = {
                        filePath: response.data.filePath,
                        fileName: response.data.fileName
                    }
                    //음성파일 경로로 텍스트리뷰 생성
                    //
                    //axios.post('/api/review/????', variable)
                    //    .then

                } else{
                    alert('음성 업로드를 실패하였습니다.');
                }
            })
        }
    // multer 및 dropzone 이용한 업로드 방식 리뷰
        
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
                    //음성파일 경로로 텍스트리뷰 생성
                    //
                    //axios.post('/api/review/????', variable)
                    //    .then

                } else{
                    alert('음성 업로드를 실패하였습니다.');
                }
            })

    }, [audioUrl]);


        

    return (
        
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                HELLO~${post.title}

                <button onClick={onRec ? onRecAudio : offRecAudio}>녹음</button>
                <button onClick={onSubmitAudioFile}>결과 확인</button>

            </div>

        <form onSubmit={onSubmit} encType='multipart/form-data'>
            
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Dropzone
                    onDrop={onDrop}
                    multiple={false}
                    maxSize={800000000}>
                    {({ getRootProps, getInputProps }) => (
                        <div style={{ width: '300px', height: '240px', border: '1px solid lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            {...getRootProps()}
                        >
                            <input {...getInputProps()} />
                            

                        </div>
                    )}
                </Dropzone>

            </div>
            
            
            <br /><br />
            <label>FilePath</label>
            <Input
                onChange={handleChangeFilePath}
                value={FilePath}
            />
            
            <br /><br />
            <label>Content</label>
            <TextareaAutosize
                aria-label="내용"
                onChange={handleChangeContent}
                value={Content}
            />
            <br /><br />

            <Button type="primary" size="large" onClick={onSubmit}>
                Submit
            </Button>
        </form>
        
        
        </div>

    );
}
