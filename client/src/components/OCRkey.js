export const NaverOCR_KEY = "https://85db3bce72a7459d8cf672cb9af18928.apigw.ntruss.com/custom/v1/8263/ed7588280ddea2b1a1c8a51aefee5fb96e21e0d40267c0857bb5da8acd6de97f/general"

/*  OCR 이미지 날리는 방식
{
    "images": [
      {
        "format": "jpeg",
        "name": "medium",
        "data": null,
        "url": "https://thumbnail8.coupangcdn.com/thumbnails/remote/q89/image/retail/images/615119903589168-4faaa5f6-1722-4ee1-bd1b-d210cf45d900.jpg"
      }
    ],
    "lang": "ko",
    "requestId": "string",
    "resultType": "string",
    "timestamp": {{$timestamp}},
    "version": "V1"
}

이미지 쿼리를 날리고 나서 해당 이미지 OCR로 return 받았을때의 데이터

1. 

{
    "version": "V1",
    "requestId": "string",
    "timestamp": 1621675763743,
    "images": [
        {
            "uid": "c2fdb0ffc64e4da0bdd62cae4aa5c583",
            "name": "medium",
            "inferResult": "SUCCESS",
            "message": "SUCCESS",
            "validationResult": {
                "result": "NO_REQUESTED"
            },
            "fields": [
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 72.0,
                                "y": 18.0
                            },
                            {
                                "x": 189.0,
                                "y": 18.0
                            },
                            {
                                "x": 189.0,
                                "y": 72.0
                            },
                            {
                                "x": 72.0,
                                "y": 72.0
                            }
                        ]
                    },
                    "inferText": "담터",
                    "inferConfidence": 0.9163
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1489.0,
                                "y": 26.0
                            },
                            {
                                "x": 1535.0,
                                "y": 26.0
                            },
                            {
                                "x": 1535.0,
                                "y": 39.0
                            },
                            {
                                "x": 1489.0,
                                "y": 39.0
                            }
                        ]
                    },
                    "inferText": "안전관리인증",
                    "inferConfidence": 0.9008
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 410.0,
                                "y": 33.0
                            },
                            {
                                "x": 462.0,
                                "y": 33.0
                            },
                            {
                                "x": 462.0,
                                "y": 56.0
                            },
                            {
                                "x": 410.0,
                                "y": 56.0
                            }
                        ]
                    },
                    "inferText": "제품명",
                    "inferConfidence": 0.9972
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 495.0,
                                "y": 33.0
                            },
                            {
                                "x": 571.0,
                                "y": 33.0
                            },
                            {
                                "x": 571.0,
                                "y": 57.0
                            },
                            {
                                "x": 495.0,
                                "y": 57.0
                            }
                        ]
                    },
                    "inferText": "둥굴레차",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 799.0,
                                "y": 33.0
                            },
                            {
                                "x": 873.0,
                                "y": 33.0
                            },
                            {
                                "x": 873.0,
                                "y": 57.0
                            },
                            {
                                "x": 799.0,
                                "y": 57.0
                            }
                        ]
                    },
                    "inferText": "용기(포장)",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 883.0,
                                "y": 33.0
                            },
                            {
                                "x": 979.0,
                                "y": 33.0
                            },
                            {
                                "x": 979.0,
                                "y": 56.0
                            },
                            {
                                "x": 883.0,
                                "y": 56.0
                            }
                        ]
                    },
                    "inferText": "여과지-펄프",
                    "inferConfidence": 0.9997
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1490.0,
                                "y": 38.0
                            },
                            {
                                "x": 1535.0,
                                "y": 38.0
                            },
                            {
                                "x": 1535.0,
                                "y": 50.0
                            },
                            {
                                "x": 1490.0,
                                "y": 50.0
                            }
                        ]
                    },
                    "inferText": "HACCP",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 410.0,
                                "y": 58.0
                            },
                            {
                                "x": 480.0,
                                "y": 58.0
                            },
                            {
                                "x": 480.0,
                                "y": 83.0
                            },
                            {
                                "x": 410.0,
                                "y": 83.0
                            }
                        ]
                    },
                    "inferText": "식품유형",
                    "inferConfidence": 0.9992
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 495.0,
                                "y": 58.0
                            },
                            {
                                "x": 555.0,
                                "y": 58.0
                            },
                            {
                                "x": 555.0,
                                "y": 83.0
                            },
                            {
                                "x": 495.0,
                                "y": 83.0
                            }
                        ]
                    },
                    "inferText": "침출차",
                    "inferConfidence": 0.9999
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 799.0,
                                "y": 56.0
                            },
                            {
                                "x": 833.0,
                                "y": 56.0
                            },
                            {
                                "x": 833.0,
                                "y": 76.0
                            },
                            {
                                "x": 799.0,
                                "y": 76.0
                            }
                        ]
                    },
                    "inferText": "재질",
                    "inferConfidence": 0.9999
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 883.0,
                                "y": 54.0
                            },
                            {
                                "x": 1043.0,
                                "y": 54.0
                            },
                            {
                                "x": 1043.0,
                                "y": 76.0
                            },
                            {
                                "x": 883.0,
                                "y": 76.0
                            }
                        ]
                    },
                    "inferText": "내포장-폴리프로필렌",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1045.0,
                                "y": 54.0
                            },
                            {
                                "x": 1080.0,
                                "y": 54.0
                            },
                            {
                                "x": 1080.0,
                                "y": 76.0
                            },
                            {
                                "x": 1045.0,
                                "y": 76.0
                            }
                        ]
                    },
                    "inferText": "코팅",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1083.0,
                                "y": 54.0
                            },
                            {
                                "x": 1136.0,
                                "y": 54.0
                            },
                            {
                                "x": 1136.0,
                                "y": 79.0
                            },
                            {
                                "x": 1083.0,
                                "y": 79.0
                            }
                        ]
                    },
                    "inferText": "종이제",
                    "inferConfidence": 0.9999
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 49.0,
                                "y": 97.0
                            },
                            {
                                "x": 89.0,
                                "y": 97.0
                            },
                            {
                                "x": 89.0,
                                "y": 120.0
                            },
                            {
                                "x": 49.0,
                                "y": 120.0
                            }
                        ]
                    },
                    "inferText": "진한",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 92.0,
                                "y": 97.0
                            },
                            {
                                "x": 165.0,
                                "y": 97.0
                            },
                            {
                                "x": 165.0,
                                "y": 120.0
                            },
                            {
                                "x": 92.0,
                                "y": 120.0
                            }
                        ]
                    },
                    "inferText": "구수함이",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 170.0,
                                "y": 97.0
                            },
                            {
                                "x": 228.0,
                                "y": 97.0
                            },
                            {
                                "x": 228.0,
                                "y": 120.0
                            },
                            {
                                "x": 170.0,
                                "y": 120.0
                            }
                        ]
                    },
                    "inferText": "가득한",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 231.0,
                                "y": 97.0
                            },
                            {
                                "x": 306.0,
                                "y": 97.0
                            },
                            {
                                "x": 306.0,
                                "y": 120.0
                            },
                            {
                                "x": 231.0,
                                "y": 120.0
                            }
                        ]
                    },
                    "inferText": "둥굴레와",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 310.0,
                                "y": 97.0
                            },
                            {
                                "x": 349.0,
                                "y": 97.0
                            },
                            {
                                "x": 349.0,
                                "y": 121.0
                            },
                            {
                                "x": 310.0,
                                "y": 121.0
                            }
                        ]
                    },
                    "inferText": "현미",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 411.0,
                                "y": 85.0
                            },
                            {
                                "x": 464.0,
                                "y": 85.0
                            },
                            {
                                "x": 464.0,
                                "y": 108.0
                            },
                            {
                                "x": 411.0,
                                "y": 108.0
                            }
                        ]
                    },
                    "inferText": "내용량",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 496.0,
                                "y": 85.0
                            },
                            {
                                "x": 535.0,
                                "y": 85.0
                            },
                            {
                                "x": 535.0,
                                "y": 107.0
                            },
                            {
                                "x": 496.0,
                                "y": 107.0
                            }
                        ]
                    },
                    "inferText": "120",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 535.0,
                                "y": 85.0
                            },
                            {
                                "x": 588.0,
                                "y": 85.0
                            },
                            {
                                "x": 588.0,
                                "y": 110.0
                            },
                            {
                                "x": 535.0,
                                "y": 110.0
                            }
                        ]
                    },
                    "inferText": "g(1.2",
                    "inferConfidence": 0.9988
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 587.0,
                                "y": 86.0
                            },
                            {
                                "x": 608.0,
                                "y": 86.0
                            },
                            {
                                "x": 608.0,
                                "y": 111.0
                            },
                            {
                                "x": 587.0,
                                "y": 111.0
                            }
                        ]
                    },
                    "inferText": "g",
                    "inferConfidence": 0.9992
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 603.0,
                                "y": 83.0
                            },
                            {
                                "x": 627.0,
                                "y": 83.0
                            },
                            {
                                "x": 627.0,
                                "y": 110.0
                            },
                            {
                                "x": 603.0,
                                "y": 110.0
                            }
                        ]
                    },
                    "inferText": "X",
                    "inferConfidence": 0.7823
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 626.0,
                                "y": 85.0
                            },
                            {
                                "x": 708.0,
                                "y": 85.0
                            },
                            {
                                "x": 708.0,
                                "y": 108.0
                            },
                            {
                                "x": 626.0,
                                "y": 108.0
                            }
                        ]
                    },
                    "inferText": "100티백)",
                    "inferConfidence": 0.9976
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 799.0,
                                "y": 103.0
                            },
                            {
                                "x": 870.0,
                                "y": 103.0
                            },
                            {
                                "x": 870.0,
                                "y": 128.0
                            },
                            {
                                "x": 799.0,
                                "y": 128.0
                            }
                        ]
                    },
                    "inferText": "주의사항",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 799.0,
                                "y": 82.0
                            },
                            {
                                "x": 854.0,
                                "y": 82.0
                            },
                            {
                                "x": 854.0,
                                "y": 104.0
                            },
                            {
                                "x": 799.0,
                                "y": 104.0
                            }
                        ]
                    },
                    "inferText": "사용상",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 883.0,
                                "y": 103.0
                            },
                            {
                                "x": 938.0,
                                "y": 103.0
                            },
                            {
                                "x": 938.0,
                                "y": 128.0
                            },
                            {
                                "x": 883.0,
                                "y": 128.0
                            }
                        ]
                    },
                    "inferText": "있으니",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 883.0,
                                "y": 81.0
                            },
                            {
                                "x": 937.0,
                                "y": 81.0
                            },
                            {
                                "x": 937.0,
                                "y": 103.0
                            },
                            {
                                "x": 883.0,
                                "y": 103.0
                            }
                        ]
                    },
                    "inferText": "뜨거운",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 938.0,
                                "y": 81.0
                            },
                            {
                                "x": 959.0,
                                "y": 81.0
                            },
                            {
                                "x": 959.0,
                                "y": 103.0
                            },
                            {
                                "x": 938.0,
                                "y": 103.0
                            }
                        ]
                    },
                    "inferText": "물",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 940.0,
                                "y": 103.0
                            },
                            {
                                "x": 1029.0,
                                "y": 103.0
                            },
                            {
                                "x": 1029.0,
                                "y": 128.0
                            },
                            {
                                "x": 940.0,
                                "y": 128.0
                            }
                        ]
                    },
                    "inferText": "주의하시기",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 961.0,
                                "y": 81.0
                            },
                            {
                                "x": 1032.0,
                                "y": 81.0
                            },
                            {
                                "x": 1032.0,
                                "y": 103.0
                            },
                            {
                                "x": 961.0,
                                "y": 103.0
                            }
                        ]
                    },
                    "inferText": "사용으로",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1030.0,
                                "y": 103.0
                            },
                            {
                                "x": 1105.0,
                                "y": 103.0
                            },
                            {
                                "x": 1105.0,
                                "y": 127.0
                            },
                            {
                                "x": 1030.0,
                                "y": 127.0
                            }
                        ]
                    },
                    "inferText": "바랍니다.",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1034.0,
                                "y": 81.0
                            },
                            {
                                "x": 1070.0,
                                "y": 81.0
                            },
                            {
                                "x": 1070.0,
                                "y": 103.0
                            },
                            {
                                "x": 1034.0,
                                "y": 103.0
                            }
                        ]
                    },
                    "inferText": "컵이",
                    "inferConfidence": 0.9998
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1073.0,
                                "y": 81.0
                            },
                            {
                                "x": 1127.0,
                                "y": 81.0
                            },
                            {
                                "x": 1127.0,
                                "y": 103.0
                            },
                            {
                                "x": 1073.0,
                                "y": 103.0
                            }
                        ]
                    },
                    "inferText": "뜨거울",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1126.0,
                                "y": 78.0
                            },
                            {
                                "x": 1151.0,
                                "y": 78.0
                            },
                            {
                                "x": 1151.0,
                                "y": 107.0
                            },
                            {
                                "x": 1126.0,
                                "y": 107.0
                            }
                        ]
                    },
                    "inferText": "수",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1243.0,
                                "y": 90.0
                            },
                            {
                                "x": 1314.0,
                                "y": 90.0
                            },
                            {
                                "x": 1314.0,
                                "y": 114.0
                            },
                            {
                                "x": 1243.0,
                                "y": 114.0
                            }
                        ]
                    },
                    "inferText": "둥굴레차",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1315.0,
                                "y": 90.0
                            },
                            {
                                "x": 1367.0,
                                "y": 90.0
                            },
                            {
                                "x": 1367.0,
                                "y": 113.0
                            },
                            {
                                "x": 1315.0,
                                "y": 113.0
                            }
                        ]
                    },
                    "inferText": "맛있게",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1371.0,
                                "y": 90.0
                            },
                            {
                                "x": 1422.0,
                                "y": 90.0
                            },
                            {
                                "x": 1422.0,
                                "y": 113.0
                            },
                            {
                                "x": 1371.0,
                                "y": 113.0
                            }
                        ]
                    },
                    "inferText": "마시는",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1425.0,
                                "y": 92.0
                            },
                            {
                                "x": 1460.0,
                                "y": 92.0
                            },
                            {
                                "x": 1460.0,
                                "y": 113.0
                            },
                            {
                                "x": 1425.0,
                                "y": 113.0
                            }
                        ]
                    },
                    "inferText": "방법",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 33.0,
                                "y": 117.0
                            },
                            {
                                "x": 365.0,
                                "y": 110.0
                            },
                            {
                                "x": 367.0,
                                "y": 218.0
                            },
                            {
                                "x": 36.0,
                                "y": 225.0
                            }
                        ]
                    },
                    "inferText": "둥굴레차",
                    "inferConfidence": 0.9999
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 410.0,
                                "y": 114.0
                            },
                            {
                                "x": 462.0,
                                "y": 114.0
                            },
                            {
                                "x": 462.0,
                                "y": 136.0
                            },
                            {
                                "x": 410.0,
                                "y": 136.0
                            }
                        ]
                    },
                    "inferText": "제조원",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 496.0,
                                "y": 117.0
                            },
                            {
                                "x": 527.0,
                                "y": 117.0
                            },
                            {
                                "x": 527.0,
                                "y": 136.0
                            },
                            {
                                "x": 496.0,
                                "y": 136.0
                            }
                        ]
                    },
                    "inferText": "F1:",
                    "inferConfidence": 0.9997
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 527.0,
                                "y": 115.0
                            },
                            {
                                "x": 621.0,
                                "y": 115.0
                            },
                            {
                                "x": 621.0,
                                "y": 138.0
                            },
                            {
                                "x": 527.0,
                                "y": 138.0
                            }
                        ]
                    },
                    "inferText": "(주)다송식품/",
                    "inferConfidence": 0.9992
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 623.0,
                                "y": 115.0
                            },
                            {
                                "x": 676.0,
                                "y": 115.0
                            },
                            {
                                "x": 676.0,
                                "y": 138.0
                            },
                            {
                                "x": 623.0,
                                "y": 138.0
                            }
                        ]
                    },
                    "inferText": "경기도",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 677.0,
                                "y": 115.0
                            },
                            {
                                "x": 730.0,
                                "y": 115.0
                            },
                            {
                                "x": 730.0,
                                "y": 140.0
                            },
                            {
                                "x": 677.0,
                                "y": 140.0
                            }
                        ]
                    },
                    "inferText": "광주시",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 731.0,
                                "y": 115.0
                            },
                            {
                                "x": 783.0,
                                "y": 115.0
                            },
                            {
                                "x": 783.0,
                                "y": 138.0
                            },
                            {
                                "x": 731.0,
                                "y": 138.0
                            }
                        ]
                    },
                    "inferText": "오포읍",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 496.0,
                                "y": 136.0
                            },
                            {
                                "x": 563.0,
                                "y": 136.0
                            },
                            {
                                "x": 563.0,
                                "y": 158.0
                            },
                            {
                                "x": 496.0,
                                "y": 158.0
                            }
                        ]
                    },
                    "inferText": "머루숯길",
                    "inferConfidence": 0.9975
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 564.0,
                                "y": 136.0
                            },
                            {
                                "x": 623.0,
                                "y": 136.0
                            },
                            {
                                "x": 623.0,
                                "y": 158.0
                            },
                            {
                                "x": 564.0,
                                "y": 158.0
                            }
                        ]
                    },
                    "inferText": "81번길",
                    "inferConfidence": 0.9996
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 626.0,
                                "y": 136.0
                            },
                            {
                                "x": 649.0,
                                "y": 136.0
                            },
                            {
                                "x": 649.0,
                                "y": 157.0
                            },
                            {
                                "x": 626.0,
                                "y": 157.0
                            }
                        ]
                    },
                    "inferText": "12",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 799.0,
                                "y": 131.0
                            },
                            {
                                "x": 854.0,
                                "y": 131.0
                            },
                            {
                                "x": 854.0,
                                "y": 153.0
                            },
                            {
                                "x": 799.0,
                                "y": 153.0
                            }
                        ]
                    },
                    "inferText": "보관상",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 883.0,
                                "y": 131.0
                            },
                            {
                                "x": 973.0,
                                "y": 131.0
                            },
                            {
                                "x": 973.0,
                                "y": 153.0
                            },
                            {
                                "x": 883.0,
                                "y": 153.0
                            }
                        ]
                    },
                    "inferText": "직사광선을",
                    "inferConfidence": 0.9999
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 977.0,
                                "y": 131.0
                            },
                            {
                                "x": 1032.0,
                                "y": 131.0
                            },
                            {
                                "x": 1032.0,
                                "y": 153.0
                            },
                            {
                                "x": 977.0,
                                "y": 153.0
                            }
                        ]
                    },
                    "inferText": "피하여",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1034.0,
                                "y": 131.0
                            },
                            {
                                "x": 1090.0,
                                "y": 131.0
                            },
                            {
                                "x": 1090.0,
                                "y": 154.0
                            },
                            {
                                "x": 1034.0,
                                "y": 154.0
                            }
                        ]
                    },
                    "inferText": "통풍이",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1093.0,
                                "y": 131.0
                            },
                            {
                                "x": 1148.0,
                                "y": 131.0
                            },
                            {
                                "x": 1148.0,
                                "y": 153.0
                            },
                            {
                                "x": 1093.0,
                                "y": 153.0
                            }
                        ]
                    },
                    "inferText": "잘되는",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1207.0,
                                "y": 125.0
                            },
                            {
                                "x": 1286.0,
                                "y": 125.0
                            },
                            {
                                "x": 1286.0,
                                "y": 147.0
                            },
                            {
                                "x": 1207.0,
                                "y": 147.0
                            }
                        ]
                    },
                    "inferText": "1티백(1.2",
                    "inferConfidence": 0.9979
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1284.0,
                                "y": 127.0
                            },
                            {
                                "x": 1322.0,
                                "y": 124.0
                            },
                            {
                                "x": 1323.0,
                                "y": 147.0
                            },
                            {
                                "x": 1285.0,
                                "y": 150.0
                            }
                        ]
                    },
                    "inferText": "g)을",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1325.0,
                                "y": 127.0
                            },
                            {
                                "x": 1360.0,
                                "y": 127.0
                            },
                            {
                                "x": 1360.0,
                                "y": 147.0
                            },
                            {
                                "x": 1325.0,
                                "y": 147.0
                            }
                        ]
                    },
                    "inferText": "컵에",
                    "inferConfidence": 0.9999
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1362.0,
                                "y": 125.0
                            },
                            {
                                "x": 1399.0,
                                "y": 125.0
                            },
                            {
                                "x": 1399.0,
                                "y": 149.0
                            },
                            {
                                "x": 1362.0,
                                "y": 149.0
                            }
                        ]
                    },
                    "inferText": "넣은",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1397.0,
                                "y": 124.0
                            },
                            {
                                "x": 1422.0,
                                "y": 124.0
                            },
                            {
                                "x": 1422.0,
                                "y": 150.0
                            },
                            {
                                "x": 1397.0,
                                "y": 150.0
                            }
                        ]
                    },
                    "inferText": "후",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1421.0,
                                "y": 125.0
                            },
                            {
                                "x": 1472.0,
                                "y": 125.0
                            },
                            {
                                "x": 1472.0,
                                "y": 147.0
                            },
                            {
                                "x": 1421.0,
                                "y": 147.0
                            }
                        ]
                    },
                    "inferText": "뜨거운",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1472.0,
                                "y": 124.0
                            },
                            {
                                "x": 1497.0,
                                "y": 124.0
                            },
                            {
                                "x": 1497.0,
                                "y": 150.0
                            },
                            {
                                "x": 1472.0,
                                "y": 150.0
                            }
                        ]
                    },
                    "inferText": "물",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 496.0,
                                "y": 158.0
                            },
                            {
                                "x": 527.0,
                                "y": 158.0
                            },
                            {
                                "x": 527.0,
                                "y": 178.0
                            },
                            {
                                "x": 496.0,
                                "y": 178.0
                            }
                        ]
                    },
                    "inferText": "F2:",
                    "inferConfidence": 0.9999
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 528.0,
                                "y": 157.0
                            },
                            {
                                "x": 606.0,
                                "y": 157.0
                            },
                            {
                                "x": 606.0,
                                "y": 179.0
                            },
                            {
                                "x": 528.0,
                                "y": 179.0
                            }
                        ]
                    },
                    "inferText": "허브앤티/",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 606.0,
                                "y": 157.0
                            },
                            {
                                "x": 676.0,
                                "y": 157.0
                            },
                            {
                                "x": 676.0,
                                "y": 181.0
                            },
                            {
                                "x": 606.0,
                                "y": 181.0
                            }
                        ]
                    },
                    "inferText": "경상남도",
                    "inferConfidence": 0.9999
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 677.0,
                                "y": 157.0
                            },
                            {
                                "x": 730.0,
                                "y": 157.0
                            },
                            {
                                "x": 730.0,
                                "y": 182.0
                            },
                            {
                                "x": 677.0,
                                "y": 182.0
                            }
                        ]
                    },
                    "inferText": "함양군",
                    "inferConfidence": 0.9999
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 731.0,
                                "y": 157.0
                            },
                            {
                                "x": 783.0,
                                "y": 157.0
                            },
                            {
                                "x": 783.0,
                                "y": 179.0
                            },
                            {
                                "x": 731.0,
                                "y": 179.0
                            }
                        ]
                    },
                    "inferText": "함양읍",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 799.0,
                                "y": 152.0
                            },
                            {
                                "x": 869.0,
                                "y": 152.0
                            },
                            {
                                "x": 869.0,
                                "y": 175.0
                            },
                            {
                                "x": 799.0,
                                "y": 175.0
                            }
                        ]
                    },
                    "inferText": "주의사항",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 883.0,
                                "y": 153.0
                            },
                            {
                                "x": 940.0,
                                "y": 153.0
                            },
                            {
                                "x": 940.0,
                                "y": 178.0
                            },
                            {
                                "x": 883.0,
                                "y": 178.0
                            }
                        ]
                    },
                    "inferText": "서늘한",
                    "inferConfidence": 0.9997
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 941.0,
                                "y": 153.0
                            },
                            {
                                "x": 997.0,
                                "y": 153.0
                            },
                            {
                                "x": 997.0,
                                "y": 178.0
                            },
                            {
                                "x": 941.0,
                                "y": 178.0
                            }
                        ]
                    },
                    "inferText": "장소에",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1001.0,
                                "y": 153.0
                            },
                            {
                                "x": 1112.0,
                                "y": 153.0
                            },
                            {
                                "x": 1112.0,
                                "y": 177.0
                            },
                            {
                                "x": 1001.0,
                                "y": 177.0
                            }
                        ]
                    },
                    "inferText": "보관하십시오.",
                    "inferConfidence": 0.9996
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1198.0,
                                "y": 149.0
                            },
                            {
                                "x": 1225.0,
                                "y": 149.0
                            },
                            {
                                "x": 1225.0,
                                "y": 171.0
                            },
                            {
                                "x": 1198.0,
                                "y": 171.0
                            }
                        ]
                    },
                    "inferText": "(약",
                    "inferConfidence": 0.9998
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1228.0,
                                "y": 152.0
                            },
                            {
                                "x": 1261.0,
                                "y": 152.0
                            },
                            {
                                "x": 1261.0,
                                "y": 171.0
                            },
                            {
                                "x": 1228.0,
                                "y": 171.0
                            }
                        ]
                    },
                    "inferText": "100",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1264.0,
                                "y": 152.0
                            },
                            {
                                "x": 1315.0,
                                "y": 152.0
                            },
                            {
                                "x": 1315.0,
                                "y": 171.0
                            },
                            {
                                "x": 1264.0,
                                "y": 171.0
                            }
                        ]
                    },
                    "inferText": "mL)을",
                    "inferConfidence": 0.9965
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1316.0,
                                "y": 149.0
                            },
                            {
                                "x": 1389.0,
                                "y": 149.0
                            },
                            {
                                "x": 1389.0,
                                "y": 171.0
                            },
                            {
                                "x": 1316.0,
                                "y": 171.0
                            }
                        ]
                    },
                    "inferText": "붓습니다.",
                    "inferConfidence": 0.9989
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1393.0,
                                "y": 152.0
                            },
                            {
                                "x": 1442.0,
                                "y": 152.0
                            },
                            {
                                "x": 1442.0,
                                "y": 171.0
                            },
                            {
                                "x": 1393.0,
                                "y": 171.0
                            }
                        ]
                    },
                    "inferText": "1~2분",
                    "inferConfidence": 0.9999
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1444.0,
                                "y": 149.0
                            },
                            {
                                "x": 1481.0,
                                "y": 149.0
                            },
                            {
                                "x": 1481.0,
                                "y": 171.0
                            },
                            {
                                "x": 1444.0,
                                "y": 171.0
                            }
                        ]
                    },
                    "inferText": "경과",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1479.0,
                                "y": 147.0
                            },
                            {
                                "x": 1504.0,
                                "y": 147.0
                            },
                            {
                                "x": 1504.0,
                                "y": 174.0
                            },
                            {
                                "x": 1479.0,
                                "y": 174.0
                            }
                        ]
                    },
                    "inferText": "후",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 495.0,
                                "y": 178.0
                            },
                            {
                                "x": 580.0,
                                "y": 178.0
                            },
                            {
                                "x": 580.0,
                                "y": 202.0
                            },
                            {
                                "x": 495.0,
                                "y": 202.0
                            }
                        ]
                    },
                    "inferText": "이은농공길",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 581.0,
                                "y": 178.0
                            },
                            {
                                "x": 608.0,
                                "y": 178.0
                            },
                            {
                                "x": 608.0,
                                "y": 199.0
                            },
                            {
                                "x": 581.0,
                                "y": 199.0
                            }
                        ]
                    },
                    "inferText": "45",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 805.0,
                                "y": 192.0
                            },
                            {
                                "x": 809.0,
                                "y": 192.0
                            },
                            {
                                "x": 809.0,
                                "y": 197.0
                            },
                            {
                                "x": 805.0,
                                "y": 197.0
                            }
                        ]
                    },
                    "inferText": "-",
                    "inferConfidence": 0.7405
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 812.0,
                                "y": 184.0
                            },
                            {
                                "x": 833.0,
                                "y": 184.0
                            },
                            {
                                "x": 833.0,
                                "y": 204.0
                            },
                            {
                                "x": 812.0,
                                "y": 204.0
                            }
                        ]
                    },
                    "inferText": "이",
                    "inferConfidence": 0.9995
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 834.0,
                                "y": 184.0
                            },
                            {
                                "x": 890.0,
                                "y": 184.0
                            },
                            {
                                "x": 890.0,
                                "y": 206.0
                            },
                            {
                                "x": 834.0,
                                "y": 206.0
                            }
                        ]
                    },
                    "inferText": "제품은",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 892.0,
                                "y": 184.0
                            },
                            {
                                "x": 954.0,
                                "y": 184.0
                            },
                            {
                                "x": 954.0,
                                "y": 206.0
                            },
                            {
                                "x": 892.0,
                                "y": 206.0
                            }
                        ]
                    },
                    "inferText": "복숭아,",
                    "inferConfidence": 0.9999
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 956.0,
                                "y": 184.0
                            },
                            {
                                "x": 1001.0,
                                "y": 184.0
                            },
                            {
                                "x": 1001.0,
                                "y": 207.0
                            },
                            {
                                "x": 956.0,
                                "y": 207.0
                            }
                        ]
                    },
                    "inferText": "대두,",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1002.0,
                                "y": 184.0
                            },
                            {
                                "x": 1029.0,
                                "y": 184.0
                            },
                            {
                                "x": 1029.0,
                                "y": 206.0
                            },
                            {
                                "x": 1002.0,
                                "y": 206.0
                            }
                        ]
                    },
                    "inferText": "밀,",
                    "inferConfidence": 0.9906
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1032.0,
                                "y": 184.0
                            },
                            {
                                "x": 1086.0,
                                "y": 184.0
                            },
                            {
                                "x": 1086.0,
                                "y": 206.0
                            },
                            {
                                "x": 1032.0,
                                "y": 206.0
                            }
                        ]
                    },
                    "inferText": "메밀을",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1089.0,
                                "y": 184.0
                            },
                            {
                                "x": 1144.0,
                                "y": 184.0
                            },
                            {
                                "x": 1144.0,
                                "y": 206.0
                            },
                            {
                                "x": 1089.0,
                                "y": 206.0
                            }
                        ]
                    },
                    "inferText": "사용한",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1204.0,
                                "y": 174.0
                            },
                            {
                                "x": 1255.0,
                                "y": 174.0
                            },
                            {
                                "x": 1255.0,
                                "y": 195.0
                            },
                            {
                                "x": 1204.0,
                                "y": 195.0
                            }
                        ]
                    },
                    "inferText": "티백을",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1257.0,
                                "y": 174.0
                            },
                            {
                                "x": 1291.0,
                                "y": 174.0
                            },
                            {
                                "x": 1291.0,
                                "y": 195.0
                            },
                            {
                                "x": 1257.0,
                                "y": 195.0
                            }
                        ]
                    },
                    "inferText": "수회",
                    "inferConfidence": 0.9999
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1294.0,
                                "y": 174.0
                            },
                            {
                                "x": 1330.0,
                                "y": 174.0
                            },
                            {
                                "x": 1330.0,
                                "y": 195.0
                            },
                            {
                                "x": 1294.0,
                                "y": 195.0
                            }
                        ]
                    },
                    "inferText": "흔든",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1332.0,
                                "y": 174.0
                            },
                            {
                                "x": 1353.0,
                                "y": 174.0
                            },
                            {
                                "x": 1353.0,
                                "y": 195.0
                            },
                            {
                                "x": 1332.0,
                                "y": 195.0
                            }
                        ]
                    },
                    "inferText": "후",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1354.0,
                                "y": 174.0
                            },
                            {
                                "x": 1421.0,
                                "y": 174.0
                            },
                            {
                                "x": 1421.0,
                                "y": 196.0
                            },
                            {
                                "x": 1354.0,
                                "y": 196.0
                            }
                        ]
                    },
                    "inferText": "건져내고",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1424.0,
                                "y": 174.0
                            },
                            {
                                "x": 1496.0,
                                "y": 174.0
                            },
                            {
                                "x": 1496.0,
                                "y": 196.0
                            },
                            {
                                "x": 1424.0,
                                "y": 196.0
                            }
                        ]
                    },
                    "inferText": "드십시오.",
                    "inferConfidence": 0.9998
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 410.0,
                                "y": 209.0
                            },
                            {
                                "x": 478.0,
                                "y": 209.0
                            },
                            {
                                "x": 478.0,
                                "y": 231.0
                            },
                            {
                                "x": 410.0,
                                "y": 231.0
                            }
                        ]
                    },
                    "inferText": "유통전문",
                    "inferConfidence": 0.9997
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 495.0,
                                "y": 209.0
                            },
                            {
                                "x": 623.0,
                                "y": 207.0
                            },
                            {
                                "x": 623.0,
                                "y": 231.0
                            },
                            {
                                "x": 495.0,
                                "y": 232.0
                            }
                        ]
                    },
                    "inferText": "(주)담터에프엔비/",
                    "inferConfidence": 0.9984
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 623.0,
                                "y": 209.0
                            },
                            {
                                "x": 692.0,
                                "y": 209.0
                            },
                            {
                                "x": 692.0,
                                "y": 232.0
                            },
                            {
                                "x": 623.0,
                                "y": 232.0
                            }
                        ]
                    },
                    "inferText": "전라남도",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 692.0,
                                "y": 207.0
                            },
                            {
                                "x": 747.0,
                                "y": 207.0
                            },
                            {
                                "x": 747.0,
                                "y": 232.0
                            },
                            {
                                "x": 692.0,
                                "y": 232.0
                            }
                        ]
                    },
                    "inferText": "순천시",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 801.0,
                                "y": 207.0
                            },
                            {
                                "x": 854.0,
                                "y": 207.0
                            },
                            {
                                "x": 854.0,
                                "y": 229.0
                            },
                            {
                                "x": 801.0,
                                "y": 229.0
                            }
                        ]
                    },
                    "inferText": "제품과",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 856.0,
                                "y": 206.0
                            },
                            {
                                "x": 894.0,
                                "y": 206.0
                            },
                            {
                                "x": 894.0,
                                "y": 231.0
                            },
                            {
                                "x": 856.0,
                                "y": 231.0
                            }
                        ]
                    },
                    "inferText": "같은",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 894.0,
                                "y": 207.0
                            },
                            {
                                "x": 995.0,
                                "y": 207.0
                            },
                            {
                                "x": 995.0,
                                "y": 229.0
                            },
                            {
                                "x": 894.0,
                                "y": 229.0
                            }
                        ]
                    },
                    "inferText": "제조시설에서",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1000.0,
                                "y": 206.0
                            },
                            {
                                "x": 1069.0,
                                "y": 206.0
                            },
                            {
                                "x": 1069.0,
                                "y": 229.0
                            },
                            {
                                "x": 1000.0,
                                "y": 229.0
                            }
                        ]
                    },
                    "inferText": "제조하고",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1072.0,
                                "y": 206.0
                            },
                            {
                                "x": 1144.0,
                                "y": 206.0
                            },
                            {
                                "x": 1144.0,
                                "y": 229.0
                            },
                            {
                                "x": 1072.0,
                                "y": 229.0
                            }
                        ]
                    },
                    "inferText": "있습니다.",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 410.0,
                                "y": 229.0
                            },
                            {
                                "x": 463.0,
                                "y": 229.0
                            },
                            {
                                "x": 463.0,
                                "y": 252.0
                            },
                            {
                                "x": 410.0,
                                "y": 252.0
                            }
                        ]
                    },
                    "inferText": "판매원",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 495.0,
                                "y": 229.0
                            },
                            {
                                "x": 548.0,
                                "y": 229.0
                            },
                            {
                                "x": 548.0,
                                "y": 252.0
                            },
                            {
                                "x": 495.0,
                                "y": 252.0
                            }
                        ]
                    },
                    "inferText": "승주읍",
                    "inferConfidence": 0.9999
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 549.0,
                                "y": 229.0
                            },
                            {
                                "x": 602.0,
                                "y": 229.0
                            },
                            {
                                "x": 602.0,
                                "y": 252.0
                            },
                            {
                                "x": 549.0,
                                "y": 252.0
                            }
                        ]
                    },
                    "inferText": "승주로",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 603.0,
                                "y": 231.0
                            },
                            {
                                "x": 671.0,
                                "y": 231.0
                            },
                            {
                                "x": 671.0,
                                "y": 250.0
                            },
                            {
                                "x": 603.0,
                                "y": 250.0
                            }
                        ]
                    },
                    "inferText": "538-46",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 805.0,
                                "y": 238.0
                            },
                            {
                                "x": 810.0,
                                "y": 238.0
                            },
                            {
                                "x": 810.0,
                                "y": 243.0
                            },
                            {
                                "x": 805.0,
                                "y": 243.0
                            }
                        ]
                    },
                    "inferText": "·",
                    "inferConfidence": 0.9012
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 812.0,
                                "y": 229.0
                            },
                            {
                                "x": 833.0,
                                "y": 229.0
                            },
                            {
                                "x": 833.0,
                                "y": 250.0
                            },
                            {
                                "x": 812.0,
                                "y": 250.0
                            }
                        ]
                    },
                    "inferText": "본",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 834.0,
                                "y": 229.0
                            },
                            {
                                "x": 888.0,
                                "y": 229.0
                            },
                            {
                                "x": 888.0,
                                "y": 252.0
                            },
                            {
                                "x": 834.0,
                                "y": 252.0
                            }
                        ]
                    },
                    "inferText": "제품은",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 891.0,
                                "y": 229.0
                            },
                            {
                                "x": 1013.0,
                                "y": 229.0
                            },
                            {
                                "x": 1013.0,
                                "y": 252.0
                            },
                            {
                                "x": 891.0,
                                "y": 252.0
                            }
                        ]
                    },
                    "inferText": "공정거래위원회",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1016.0,
                                "y": 229.0
                            },
                            {
                                "x": 1052.0,
                                "y": 229.0
                            },
                            {
                                "x": 1052.0,
                                "y": 252.0
                            },
                            {
                                "x": 1016.0,
                                "y": 252.0
                            }
                        ]
                    },
                    "inferText": "고시",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1057.0,
                                "y": 229.0
                            },
                            {
                                "x": 1144.0,
                                "y": 229.0
                            },
                            {
                                "x": 1144.0,
                                "y": 252.0
                            },
                            {
                                "x": 1057.0,
                                "y": 252.0
                            }
                        ]
                    },
                    "inferText": "소비자분쟁",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1319.0,
                                "y": 241.0
                            },
                            {
                                "x": 1385.0,
                                "y": 241.0
                            },
                            {
                                "x": 1385.0,
                                "y": 264.0
                            },
                            {
                                "x": 1319.0,
                                "y": 264.0
                            }
                        ]
                    },
                    "inferText": "밀봉포장",
                    "inferConfidence": 0.9998
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 801.0,
                                "y": 252.0
                            },
                            {
                                "x": 884.0,
                                "y": 252.0
                            },
                            {
                                "x": 884.0,
                                "y": 275.0
                            },
                            {
                                "x": 801.0,
                                "y": 275.0
                            }
                        ]
                    },
                    "inferText": "해결기준에",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 887.0,
                                "y": 252.0
                            },
                            {
                                "x": 922.0,
                                "y": 252.0
                            },
                            {
                                "x": 922.0,
                                "y": 274.0
                            },
                            {
                                "x": 887.0,
                                "y": 274.0
                            }
                        ]
                    },
                    "inferText": "의거",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 924.0,
                                "y": 253.0
                            },
                            {
                                "x": 961.0,
                                "y": 253.0
                            },
                            {
                                "x": 961.0,
                                "y": 274.0
                            },
                            {
                                "x": 924.0,
                                "y": 274.0
                            }
                        ]
                    },
                    "inferText": "교환",
                    "inferConfidence": 0.9995
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 963.0,
                                "y": 253.0
                            },
                            {
                                "x": 998.0,
                                "y": 253.0
                            },
                            {
                                "x": 998.0,
                                "y": 274.0
                            },
                            {
                                "x": 963.0,
                                "y": 274.0
                            }
                        ]
                    },
                    "inferText": "또는",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1001.0,
                                "y": 251.0
                            },
                            {
                                "x": 1070.0,
                                "y": 253.0
                            },
                            {
                                "x": 1069.0,
                                "y": 277.0
                            },
                            {
                                "x": 1000.0,
                                "y": 274.0
                            }
                        ]
                    },
                    "inferText": "보상받을",
                    "inferConfidence": 0.9999
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1070.0,
                                "y": 253.0
                            },
                            {
                                "x": 1091.0,
                                "y": 253.0
                            },
                            {
                                "x": 1091.0,
                                "y": 274.0
                            },
                            {
                                "x": 1070.0,
                                "y": 274.0
                            }
                        ]
                    },
                    "inferText": "수",
                    "inferConfidence": 0.9999
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1093.0,
                                "y": 252.0
                            },
                            {
                                "x": 1143.0,
                                "y": 252.0
                            },
                            {
                                "x": 1143.0,
                                "y": 275.0
                            },
                            {
                                "x": 1093.0,
                                "y": 275.0
                            }
                        ]
                    },
                    "inferText": "있습니",
                    "inferConfidence": 0.9999
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1207.0,
                                "y": 256.0
                            },
                            {
                                "x": 1247.0,
                                "y": 256.0
                            },
                            {
                                "x": 1247.0,
                                "y": 268.0
                            },
                            {
                                "x": 1207.0,
                                "y": 268.0
                            }
                        ]
                    },
                    "inferText": "몸담터",
                    "inferConfidence": 0.7902
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 410.0,
                                "y": 257.0
                            },
                            {
                                "x": 478.0,
                                "y": 257.0
                            },
                            {
                                "x": 478.0,
                                "y": 279.0
                            },
                            {
                                "x": 410.0,
                                "y": 279.0
                            }
                        ]
                    },
                    "inferText": "원재료명",
                    "inferConfidence": 0.9997
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 495.0,
                                "y": 257.0
                            },
                            {
                                "x": 637.0,
                                "y": 257.0
                            },
                            {
                                "x": 637.0,
                                "y": 281.0
                            },
                            {
                                "x": 495.0,
                                "y": 281.0
                            }
                        ]
                    },
                    "inferText": "둥굴레(중국산)70",
                    "inferConfidence": 0.9999
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 637.0,
                                "y": 259.0
                            },
                            {
                                "x": 667.0,
                                "y": 259.0
                            },
                            {
                                "x": 667.0,
                                "y": 282.0
                            },
                            {
                                "x": 637.0,
                                "y": 282.0
                            }
                        ]
                    },
                    "inferText": "%,",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1319.0,
                                "y": 261.0
                            },
                            {
                                "x": 1365.0,
                                "y": 261.0
                            },
                            {
                                "x": 1365.0,
                                "y": 284.0
                            },
                            {
                                "x": 1319.0,
                                "y": 284.0
                            }
                        ]
                    },
                    "inferText": "티백을",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1361.0,
                                "y": 261.0
                            },
                            {
                                "x": 1394.0,
                                "y": 261.0
                            },
                            {
                                "x": 1394.0,
                                "y": 284.0
                            },
                            {
                                "x": 1361.0,
                                "y": 284.0
                            }
                        ]
                    },
                    "inferText": "자동",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1390.0,
                                "y": 261.0
                            },
                            {
                                "x": 1422.0,
                                "y": 261.0
                            },
                            {
                                "x": 1422.0,
                                "y": 285.0
                            },
                            {
                                "x": 1390.0,
                                "y": 285.0
                            }
                        ]
                    },
                    "inferText": "밀봉",
                    "inferConfidence": 0.9998
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1418.0,
                                "y": 261.0
                            },
                            {
                                "x": 1476.0,
                                "y": 261.0
                            },
                            {
                                "x": 1476.0,
                                "y": 284.0
                            },
                            {
                                "x": 1418.0,
                                "y": 284.0
                            }
                        ]
                    },
                    "inferText": "포장하여",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 495.0,
                                "y": 282.0
                            },
                            {
                                "x": 603.0,
                                "y": 282.0
                            },
                            {
                                "x": 603.0,
                                "y": 306.0
                            },
                            {
                                "x": 495.0,
                                "y": 306.0
                            }
                        ]
                    },
                    "inferText": "현미(국산)30",
                    "inferConfidence": 0.9999
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 603.0,
                                "y": 284.0
                            },
                            {
                                "x": 626.0,
                                "y": 284.0
                            },
                            {
                                "x": 626.0,
                                "y": 306.0
                            },
                            {
                                "x": 603.0,
                                "y": 306.0
                            }
                        ]
                    },
                    "inferText": "%",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 801.0,
                                "y": 275.0
                            },
                            {
                                "x": 826.0,
                                "y": 275.0
                            },
                            {
                                "x": 826.0,
                                "y": 299.0
                            },
                            {
                                "x": 801.0,
                                "y": 299.0
                            }
                        ]
                    },
                    "inferText": "다.",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 835.0,
                                "y": 275.0
                            },
                            {
                                "x": 904.0,
                                "y": 275.0
                            },
                            {
                                "x": 904.0,
                                "y": 297.0
                            },
                            {
                                "x": 835.0,
                                "y": 297.0
                            }
                        ]
                    },
                    "inferText": "원재료에",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 906.0,
                                "y": 275.0
                            },
                            {
                                "x": 943.0,
                                "y": 275.0
                            },
                            {
                                "x": 943.0,
                                "y": 297.0
                            },
                            {
                                "x": 906.0,
                                "y": 297.0
                            }
                        ]
                    },
                    "inferText": "의한",
                    "inferConfidence": 0.9997
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 945.0,
                                "y": 275.0
                            },
                            {
                                "x": 997.0,
                                "y": 275.0
                            },
                            {
                                "x": 997.0,
                                "y": 297.0
                            },
                            {
                                "x": 945.0,
                                "y": 297.0
                            }
                        ]
                    },
                    "inferText": "침전물",
                    "inferConfidence": 0.9996
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1000.0,
                                "y": 275.0
                            },
                            {
                                "x": 1036.0,
                                "y": 275.0
                            },
                            {
                                "x": 1036.0,
                                "y": 297.0
                            },
                            {
                                "x": 1000.0,
                                "y": 297.0
                            }
                        ]
                    },
                    "inferText": "또는",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1037.0,
                                "y": 275.0
                            },
                            {
                                "x": 1107.0,
                                "y": 275.0
                            },
                            {
                                "x": 1107.0,
                                "y": 297.0
                            },
                            {
                                "x": 1037.0,
                                "y": 297.0
                            }
                        ]
                    },
                    "inferText": "부유물이",
                    "inferConfidence": 0.9999
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1109.0,
                                "y": 275.0
                            },
                            {
                                "x": 1144.0,
                                "y": 275.0
                            },
                            {
                                "x": 1144.0,
                                "y": 297.0
                            },
                            {
                                "x": 1109.0,
                                "y": 297.0
                            }
                        ]
                    },
                    "inferText": "생길",
                    "inferConfidence": 0.9999
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1208.0,
                                "y": 282.0
                            },
                            {
                                "x": 1289.0,
                                "y": 282.0
                            },
                            {
                                "x": 1289.0,
                                "y": 309.0
                            },
                            {
                                "x": 1208.0,
                                "y": 309.0
                            }
                        ]
                    },
                    "inferText": "둥굴레차",
                    "inferConfidence": 0.9999
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1319.0,
                                "y": 279.0
                            },
                            {
                                "x": 1351.0,
                                "y": 279.0
                            },
                            {
                                "x": 1351.0,
                                "y": 302.0
                            },
                            {
                                "x": 1319.0,
                                "y": 302.0
                            }
                        ]
                    },
                    "inferText": "차의",
                    "inferConfidence": 0.9965
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1347.0,
                                "y": 279.0
                            },
                            {
                                "x": 1379.0,
                                "y": 279.0
                            },
                            {
                                "x": 1379.0,
                                "y": 302.0
                            },
                            {
                                "x": 1347.0,
                                "y": 302.0
                            }
                        ]
                    },
                    "inferText": "맛과",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1375.0,
                                "y": 279.0
                            },
                            {
                                "x": 1407.0,
                                "y": 279.0
                            },
                            {
                                "x": 1407.0,
                                "y": 302.0
                            },
                            {
                                "x": 1375.0,
                                "y": 302.0
                            }
                        ]
                    },
                    "inferText": "향이",
                    "inferConfidence": 0.9999
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1403.0,
                                "y": 279.0
                            },
                            {
                                "x": 1458.0,
                                "y": 279.0
                            },
                            {
                                "x": 1458.0,
                                "y": 302.0
                            },
                            {
                                "x": 1403.0,
                                "y": 302.0
                            }
                        ]
                    },
                    "inferText": "오랫동안",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1454.0,
                                "y": 279.0
                            },
                            {
                                "x": 1525.0,
                                "y": 279.0
                            },
                            {
                                "x": 1525.0,
                                "y": 302.0
                            },
                            {
                                "x": 1454.0,
                                "y": 302.0
                            }
                        ]
                    },
                    "inferText": "보존됩니다.",
                    "inferConfidence": 0.9996
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 798.0,
                                "y": 296.0
                            },
                            {
                                "x": 823.0,
                                "y": 296.0
                            },
                            {
                                "x": 823.0,
                                "y": 324.0
                            },
                            {
                                "x": 798.0,
                                "y": 324.0
                            }
                        ]
                    },
                    "inferText": "수",
                    "inferConfidence": 0.9999
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 822.0,
                                "y": 297.0
                            },
                            {
                                "x": 876.0,
                                "y": 297.0
                            },
                            {
                                "x": 876.0,
                                "y": 321.0
                            },
                            {
                                "x": 822.0,
                                "y": 321.0
                            }
                        ]
                    },
                    "inferText": "있으나",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 877.0,
                                "y": 297.0
                            },
                            {
                                "x": 945.0,
                                "y": 297.0
                            },
                            {
                                "x": 945.0,
                                "y": 320.0
                            },
                            {
                                "x": 877.0,
                                "y": 320.0
                            }
                        ]
                    },
                    "inferText": "이물질이",
                    "inferConfidence": 0.9999
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 948.0,
                                "y": 297.0
                            },
                            {
                                "x": 1018.0,
                                "y": 297.0
                            },
                            {
                                "x": 1018.0,
                                "y": 320.0
                            },
                            {
                                "x": 948.0,
                                "y": 320.0
                            }
                        ]
                    },
                    "inferText": "아니므로",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1020.0,
                                "y": 297.0
                            },
                            {
                                "x": 1090.0,
                                "y": 297.0
                            },
                            {
                                "x": 1090.0,
                                "y": 321.0
                            },
                            {
                                "x": 1020.0,
                                "y": 321.0
                            }
                        ]
                    },
                    "inferText": "안심하고",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1091.0,
                                "y": 299.0
                            },
                            {
                                "x": 1143.0,
                                "y": 299.0
                            },
                            {
                                "x": 1143.0,
                                "y": 320.0
                            },
                            {
                                "x": 1091.0,
                                "y": 320.0
                            }
                        ]
                    },
                    "inferText": "드십시",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 410.0,
                                "y": 318.0
                            },
                            {
                                "x": 481.0,
                                "y": 318.0
                            },
                            {
                                "x": 481.0,
                                "y": 343.0
                            },
                            {
                                "x": 410.0,
                                "y": 343.0
                            }
                        ]
                    },
                    "inferText": "유통기한",
                    "inferConfidence": 0.9999
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 495.0,
                                "y": 318.0
                            },
                            {
                                "x": 534.0,
                                "y": 318.0
                            },
                            {
                                "x": 534.0,
                                "y": 343.0
                            },
                            {
                                "x": 495.0,
                                "y": 343.0
                            }
                        ]
                    },
                    "inferText": "제품",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 531.0,
                                "y": 318.0
                            },
                            {
                                "x": 571.0,
                                "y": 318.0
                            },
                            {
                                "x": 571.0,
                                "y": 343.0
                            },
                            {
                                "x": 531.0,
                                "y": 343.0
                            }
                        ]
                    },
                    "inferText": "상단",
                    "inferConfidence": 0.9999
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 570.0,
                                "y": 318.0
                            },
                            {
                                "x": 609.0,
                                "y": 318.0
                            },
                            {
                                "x": 609.0,
                                "y": 343.0
                            },
                            {
                                "x": 570.0,
                                "y": 343.0
                            }
                        ]
                    },
                    "inferText": "또는",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 609.0,
                                "y": 318.0
                            },
                            {
                                "x": 646.0,
                                "y": 318.0
                            },
                            {
                                "x": 646.0,
                                "y": 343.0
                            },
                            {
                                "x": 609.0,
                                "y": 343.0
                            }
                        ]
                    },
                    "inferText": "측면",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 646.0,
                                "y": 318.0
                            },
                            {
                                "x": 733.0,
                                "y": 318.0
                            },
                            {
                                "x": 733.0,
                                "y": 345.0
                            },
                            {
                                "x": 646.0,
                                "y": 345.0
                            }
                        ]
                    },
                    "inferText": "표기일까지",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 799.0,
                                "y": 321.0
                            },
                            {
                                "x": 826.0,
                                "y": 321.0
                            },
                            {
                                "x": 826.0,
                                "y": 342.0
                            },
                            {
                                "x": 799.0,
                                "y": 342.0
                            }
                        ]
                    },
                    "inferText": "오.",
                    "inferConfidence": 0.9951
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 831.0,
                                "y": 329.0
                            },
                            {
                                "x": 835.0,
                                "y": 329.0
                            },
                            {
                                "x": 835.0,
                                "y": 335.0
                            },
                            {
                                "x": 831.0,
                                "y": 335.0
                            }
                        ]
                    },
                    "inferText": "·",
                    "inferConfidence": 0.8889
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 837.0,
                                "y": 321.0
                            },
                            {
                                "x": 874.0,
                                "y": 321.0
                            },
                            {
                                "x": 874.0,
                                "y": 343.0
                            },
                            {
                                "x": 837.0,
                                "y": 343.0
                            }
                        ]
                    },
                    "inferText": "부정",
                    "inferConfidence": 0.9999
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 877.0,
                                "y": 321.0
                            },
                            {
                                "x": 915.0,
                                "y": 321.0
                            },
                            {
                                "x": 915.0,
                                "y": 343.0
                            },
                            {
                                "x": 877.0,
                                "y": 343.0
                            }
                        ]
                    },
                    "inferText": "·불량",
                    "inferConfidence": 0.8551
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 918.0,
                                "y": 321.0
                            },
                            {
                                "x": 954.0,
                                "y": 321.0
                            },
                            {
                                "x": 954.0,
                                "y": 343.0
                            },
                            {
                                "x": 918.0,
                                "y": 343.0
                            }
                        ]
                    },
                    "inferText": "식품",
                    "inferConfidence": 0.9999
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 955.0,
                                "y": 321.0
                            },
                            {
                                "x": 1011.0,
                                "y": 321.0
                            },
                            {
                                "x": 1011.0,
                                "y": 343.0
                            },
                            {
                                "x": 955.0,
                                "y": 343.0
                            }
                        ]
                    },
                    "inferText": "신고는",
                    "inferConfidence": 0.9999
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1012.0,
                                "y": 321.0
                            },
                            {
                                "x": 1084.0,
                                "y": 321.0
                            },
                            {
                                "x": 1084.0,
                                "y": 343.0
                            },
                            {
                                "x": 1012.0,
                                "y": 343.0
                            }
                        ]
                    },
                    "inferText": "국번없이",
                    "inferConfidence": 0.9999
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1087.0,
                                "y": 321.0
                            },
                            {
                                "x": 1134.0,
                                "y": 321.0
                            },
                            {
                                "x": 1134.0,
                                "y": 342.0
                            },
                            {
                                "x": 1087.0,
                                "y": 342.0
                            }
                        ]
                    },
                    "inferText": "1399",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1319.0,
                                "y": 310.0
                            },
                            {
                                "x": 1385.0,
                                "y": 310.0
                            },
                            {
                                "x": 1385.0,
                                "y": 334.0
                            },
                            {
                                "x": 1319.0,
                                "y": 334.0
                            }
                        ]
                    },
                    "inferText": "면사묶음",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1319.0,
                                "y": 331.0
                            },
                            {
                                "x": 1365.0,
                                "y": 331.0
                            },
                            {
                                "x": 1365.0,
                                "y": 353.0
                            },
                            {
                                "x": 1319.0,
                                "y": 353.0
                            }
                        ]
                    },
                    "inferText": "기존의",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1361.0,
                                "y": 331.0
                            },
                            {
                                "x": 1407.0,
                                "y": 331.0
                            },
                            {
                                "x": 1407.0,
                                "y": 354.0
                            },
                            {
                                "x": 1361.0,
                                "y": 354.0
                            }
                        ]
                    },
                    "inferText": "금속선",
                    "inferConfidence": 0.9999
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1403.0,
                                "y": 331.0
                            },
                            {
                                "x": 1436.0,
                                "y": 331.0
                            },
                            {
                                "x": 1436.0,
                                "y": 354.0
                            },
                            {
                                "x": 1403.0,
                                "y": 354.0
                            }
                        ]
                    },
                    "inferText": "대신",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1433.0,
                                "y": 331.0
                            },
                            {
                                "x": 1478.0,
                                "y": 331.0
                            },
                            {
                                "x": 1478.0,
                                "y": 353.0
                            },
                            {
                                "x": 1433.0,
                                "y": 353.0
                            }
                        ]
                    },
                    "inferText": "면사로",
                    "inferConfidence": 0.9999
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 410.0,
                                "y": 349.0
                            },
                            {
                                "x": 512.0,
                                "y": 349.0
                            },
                            {
                                "x": 512.0,
                                "y": 371.0
                            },
                            {
                                "x": 410.0,
                                "y": 371.0
                            }
                        ]
                    },
                    "inferText": "품목보고번호",
                    "inferConfidence": 0.9985
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 520.0,
                                "y": 350.0
                            },
                            {
                                "x": 556.0,
                                "y": 350.0
                            },
                            {
                                "x": 556.0,
                                "y": 370.0
                            },
                            {
                                "x": 520.0,
                                "y": 370.0
                            }
                        ]
                    },
                    "inferText": "F1:",
                    "inferConfidence": 0.9182
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 555.0,
                                "y": 349.0
                            },
                            {
                                "x": 699.0,
                                "y": 349.0
                            },
                            {
                                "x": 699.0,
                                "y": 371.0
                            },
                            {
                                "x": 555.0,
                                "y": 371.0
                            }
                        ]
                    },
                    "inferText": "2001036841126",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 804.0,
                                "y": 352.0
                            },
                            {
                                "x": 809.0,
                                "y": 352.0
                            },
                            {
                                "x": 809.0,
                                "y": 359.0
                            },
                            {
                                "x": 804.0,
                                "y": 359.0
                            }
                        ]
                    },
                    "inferText": ".",
                    "inferConfidence": 0.6555
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 812.0,
                                "y": 343.0
                            },
                            {
                                "x": 908.0,
                                "y": 343.0
                            },
                            {
                                "x": 908.0,
                                "y": 367.0
                            },
                            {
                                "x": 812.0,
                                "y": 367.0
                            }
                        ]
                    },
                    "inferText": "교환문의처:",
                    "inferConfidence": 0.9984
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 909.0,
                                "y": 343.0
                            },
                            {
                                "x": 965.0,
                                "y": 343.0
                            },
                            {
                                "x": 965.0,
                                "y": 368.0
                            },
                            {
                                "x": 909.0,
                                "y": 368.0
                            }
                        ]
                    },
                    "inferText": "구입처",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 966.0,
                                "y": 342.0
                            },
                            {
                                "x": 988.0,
                                "y": 342.0
                            },
                            {
                                "x": 988.0,
                                "y": 370.0
                            },
                            {
                                "x": 966.0,
                                "y": 370.0
                            }
                        ]
                    },
                    "inferText": "및",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 990.0,
                                "y": 345.0
                            },
                            {
                                "x": 1043.0,
                                "y": 345.0
                            },
                            {
                                "x": 1043.0,
                                "y": 367.0
                            },
                            {
                                "x": 990.0,
                                "y": 367.0
                            }
                        ]
                    },
                    "inferText": "대리점",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1319.0,
                                "y": 349.0
                            },
                            {
                                "x": 1403.0,
                                "y": 349.0
                            },
                            {
                                "x": 1403.0,
                                "y": 371.0
                            },
                            {
                                "x": 1319.0,
                                "y": 371.0
                            }
                        ]
                    },
                    "inferText": "묶음처리하여",
                    "inferConfidence": 0.9998
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1399.0,
                                "y": 349.0
                            },
                            {
                                "x": 1432.0,
                                "y": 349.0
                            },
                            {
                                "x": 1432.0,
                                "y": 371.0
                            },
                            {
                                "x": 1399.0,
                                "y": 371.0
                            }
                        ]
                    },
                    "inferText": "더욱",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1430.0,
                                "y": 350.0
                            },
                            {
                                "x": 1496.0,
                                "y": 350.0
                            },
                            {
                                "x": 1496.0,
                                "y": 370.0
                            },
                            {
                                "x": 1430.0,
                                "y": 370.0
                            }
                        ]
                    },
                    "inferText": "위생적이고",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1241.0,
                                "y": 363.0
                            },
                            {
                                "x": 1254.0,
                                "y": 363.0
                            },
                            {
                                "x": 1254.0,
                                "y": 370.0
                            },
                            {
                                "x": 1241.0,
                                "y": 370.0
                            }
                        ]
                    },
                    "inferText": "The",
                    "inferConfidence": 0.6705
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1276.0,
                                "y": 363.0
                            },
                            {
                                "x": 1291.0,
                                "y": 363.0
                            },
                            {
                                "x": 1291.0,
                                "y": 370.0
                            },
                            {
                                "x": 1276.0,
                                "y": 370.0
                            }
                        ]
                    },
                    "inferText": "125",
                    "inferConfidence": 0.704
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 520.0,
                                "y": 371.0
                            },
                            {
                                "x": 556.0,
                                "y": 371.0
                            },
                            {
                                "x": 556.0,
                                "y": 391.0
                            },
                            {
                                "x": 520.0,
                                "y": 391.0
                            }
                        ]
                    },
                    "inferText": "F2:",
                    "inferConfidence": 0.9293
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 555.0,
                                "y": 370.0
                            },
                            {
                                "x": 688.0,
                                "y": 370.0
                            },
                            {
                                "x": 688.0,
                                "y": 392.0
                            },
                            {
                                "x": 555.0,
                                "y": 392.0
                            }
                        ]
                    },
                    "inferText": "200506230054",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 804.0,
                                "y": 375.0
                            },
                            {
                                "x": 810.0,
                                "y": 375.0
                            },
                            {
                                "x": 810.0,
                                "y": 382.0
                            },
                            {
                                "x": 804.0,
                                "y": 382.0
                            }
                        ]
                    },
                    "inferText": "·",
                    "inferConfidence": 0.9706
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 810.0,
                                "y": 367.0
                            },
                            {
                                "x": 908.0,
                                "y": 367.0
                            },
                            {
                                "x": 908.0,
                                "y": 389.0
                            },
                            {
                                "x": 810.0,
                                "y": 389.0
                            }
                        ]
                    },
                    "inferText": "고객상담실:",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 909.0,
                                "y": 368.0
                            },
                            {
                                "x": 1047.0,
                                "y": 368.0
                            },
                            {
                                "x": 1047.0,
                                "y": 389.0
                            },
                            {
                                "x": 909.0,
                                "y": 389.0
                            }
                        ]
                    },
                    "inferText": "080-754-5152",
                    "inferConfidence": 0.9999
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1319.0,
                                "y": 366.0
                            },
                            {
                                "x": 1378.0,
                                "y": 366.0
                            },
                            {
                                "x": 1378.0,
                                "y": 388.0
                            },
                            {
                                "x": 1319.0,
                                "y": 388.0
                            }
                        ]
                    },
                    "inferText": "안전해진",
                    "inferConfidence": 1.0
                },
                {
                    "valueType": "ALL",
                    "boundingPoly": {
                        "vertices": [
                            {
                                "x": 1373.0,
                                "y": 366.0
                            },
                            {
                                "x": 1450.0,
                                "y": 366.0
                            },
                            {
                                "x": 1450.0,
                                "y": 389.0
                            },
                            {
                                "x": 1373.0,
                                "y": 389.0
                            }
                        ]
                    },
                    "inferText": "제품입니다.",
                    "inferConfidence": 1.0
                }
            ]
        }
    ]
}


*/

