
function csvToJSON(csv_string){ // 1. 문자열을 줄바꿈으로 구분 => 배열에 저장 
    //const rows = csv_string.split("\r\n"); // 줄바꿈을 \n으로만 구분해야하는 경우, 아래 코드 사용 
    const rows = csv_string.split("\n");

    // 2. 빈 배열 생성: CSV의 각 행을 담을 JSON 객체
    const jsonArray = []; 
        
    const header = ['title', 'image', 'pprice', 'content']; //남자바지,슬랙스,여자바지,티셔츠,후드
    // const header = ['image', 'title', 'pprice] //여자니트,여자옷


    // 4. 내용 행 전체를 객체로 만들어, jsonArray에 담기 ( title, image , pprice)
    // rows.length -1 해주는 이유는 csv특성상 마지막에 \n 추가후 종료하기때문
    for(let i = 0; i < rows.length-1; i++){ 
        
        // 빈 객체 생성: 각 내용 행을 객체로 만들어 담아둘 객체임 
        let obj = {}; 
        
        // 각 내용 행을 콤마로 구분 
        let row = rows[i].split("," , 3); 
        
        // 각 내용행을 {제목1:내용1, 제목2:내용2, ...} 형태의 객체로 생성 
        for(let j=0; j < header.length; j++){
            if(j===2){ //number형 저장
                obj[header[j]] = parseInt(row[j]);
                continue;
            }
            obj[header[j]] = row[j];
            
        } 
        
        // str부분 (쿠팡) 따로 str추출해서 추가함
        const contentIndex= rows[i].indexOf('"[');
        const conStr = rows[i].slice(contentIndex+2, -2)
        obj[header[3]]=conStr
        
        // 각 내용 행의 객체를 jsonArray배열에 담기 
        jsonArray.push(obj); 
    }
    // 5. 완성된 JSON 객체 배열 반환
    return jsonArray; 
    
    // 문자열 형태의 JSON으로 반환할 경우, 아래 코드 사용
    // return JSON.stringify(jsonArray); 

}


const fs = require('fs');

const file_csv = fs.readFileSync('new여자바지.csv');

const string_csv = file_csv.toString();

const arr_json = csvToJSON(string_csv);

// 만든배열을 .json으로 저장하는코드.(파일 : json배열)

// 4. JSON을 문자열로 변환 
const string_json = JSON.stringify(arr_json); 
// 5. file.json 파일로 생성 
fs.writeFileSync('womanPants.json', string_json);

// @@@@ csv 손질 @@@@ 
// 1. ctrl f 로 .jpg,"\n 를 .jpg,  로 바꾸기(대문자까지check)
//   ,...원\n"  을 ^00 으로 바꾸고, 정규식끈다음 ^를 0으로바꿈





