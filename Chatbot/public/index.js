var $messages = $('.msg-inbox');
var serverResponse = "wala";

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


try {
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
  }
  catch(e) {
    console.error(e);
    $('.no-browser-support').show();
}

$('#start-record-btn').on('click', function(e) {
    recognition.start();
});

recognition.onresult = (event) => {
    const speechToText = event.results[0][0].transcript;
    document.getElementById("MSG").value = speechToText;
    console.log(speechToText);
    insertMessage();
}

document.getElementById("mymsg").onsubmit = (e) =>{
    e.preventDefault();
    insertMessage();
    console.log("input");
}

$(window).load(function(){
    setTimeout(function(){
        serverMessage("hello i am chatbot of vision market!");
    })
})

function updateScrollbar() {
    $('.msg-page').stop().animate({scrollTop: $('.msg-page')[0].scrollHeight}, 0);
}

function serverMessage(response2){
    if($('.message-input').val() != ''){
        return false;
    }
    var dtText = CalcDate();
    $('.msg-page').append(
    $('<div class="received-chats"><div class="received-chats-img"><img src="user2.jpg"></div><div class="received-msg"><div class="received-msg-inbox"><p>'+response2+'</p><span class="time">'+dtText+'</span></div></div></div>'));
    console.log('***MESSAGE SEND!***');
    speechSynthesis.speak( new SpeechSynthesisUtterance(response2));
    updateScrollbar();
}

function CalcDate()
{
    var dt = new Date();
    var hours = dt.getHours();
    var Minutes = dt.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    Minutes = Minutes < 10 ? '0'+Minutes : Minutes;
    var dtText = `${hours}:${Minutes} ${ampm} | ${monthNames[dt.getMonth()]} ${dt.getDate()}`;
    return dtText;
}

function insertMessage()
{
    msg = $('.message-input').val();
    if($.trim(msg) == ''){
        
        return false;
    }
    console.log("insert");
    var dtText = CalcDate();
    $('.msg-page').append(
    $('<div class="outgoing-chats"> <div class="outgoing-chats-msg"><p>' + msg+ '</p><span class="time">'+ dtText +'</span></div><div class="outgoing-chats-img"><img src="user1.jpg"></div></div></div>' ));
    //fetchmsg();

    $('.message-input').val(null);
    updateScrollbar();
    serverMessage('안녕하세요 음성 테스트입니다.');
}

function fetchmsg(){

    var url = 'http://localhost:5000/send-msg';
     
    const data = new URLSearchParams();
    for (const pair of new FormData(document.getElementById("mymsg"))) {
        data.append(pair[0], pair[1]);
        console.log(pair)
    }

    console.log("abc",data)
    fetch(url, {
        method: 'POST',
        body:data
    }).then(res => res.json())
    .then(response => {
        console.log(response);
        serverMessage(response.Reply);
        speechSynthesis.speak( new SpeechSynthesisUtterance(response.Reply))
    })
        .catch(error => console.error('Error h:', error));
}