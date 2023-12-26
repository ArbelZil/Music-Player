// code below in comment didn't work for some reason all the buttons were applied to the last song in the loop.
//didnt remove it to ask you for an explanation why it didnt work.
/*document.addEventListener('DOMContentLoaded', function(){
    for(var i=0; i<2;i++)
    {
        var playbtn = document.querySelector('.play.song_'+(i+1));
        var pausebtn = document.querySelector('.pause.song_'+(i+1));
        var rewindbtn = document.querySelector('.rewind.song_'+(i+1));
        var seekbar = document.getElementById('seekbar'+(i+1));
        var audio = document.getElementById('audio'+(i+1));
        document.querySelector('.play.song_'+(i+1))
        .addEventListener('click', playSong('audio'+(i+1)));

    
        pausebtn.addEventListener('click', function(){
            if(!audio.puased)
            {
                audio.pause();
            }
        })
    
        rewindbtn.addEventListener('click',function(){
            audio.currentTime = 0;
            audio.pause();
        })
    
        audio.addEventListener('timeupdate',function(){
            const value = (audio.currentTime / audio.duration) * 100;
            seekbar.value = value;
        })
    
        seekbar.addEventListener('input', function () {
            const seekValue = (seekbar.value / 100) * audio.duration;
            audio.currentTime = seekValue;
          });
    }
    function playSong(audioid)
    {
        var audio = document.getElementById(audioid);
        if(audio.paused){
            audio.play();
        }
    }
})
*/
document.addEventListener('DOMContentLoaded', function(){
    //list of all the button in the order of them in the html
    var playbtn = document.querySelectorAll('.play');
    var pausebtn = document.querySelectorAll('.pause');
    var rewindbtn = document.querySelectorAll('.rewind');
    var seekbar = document.querySelectorAll('.seekbar');
    var audio = document.querySelectorAll('.audio');
    var volumebar = document.querySelectorAll('.volume-slider');
    console.log(playbtn.length);
    for(var i=0;i< playbtn.length;i++)
    {
        // Use an IIFE (Immediately Invoked Function Expression) to create a closure
        // I haved used it because the code above didnt make a closure for some reason and all the button were applied to the last
        // iteration of the loop
        (function(i)// start of IIFE
        {
            //play
            playbtn[i].addEventListener('click', function(){
                var Allaudio = document.getElementsByTagName('audio');
                for(var j=0; j<Allaudio.length;j++)
                {
                    if(!Allaudio[j].paused)
                    {
                        Allaudio[j].pause();
                    }
                }
                if(audio[i].paused){
                    audio[i].play();
                }
            });
            //pause
            pausebtn[i].addEventListener('click', function(){
                if(!audio[i].puased)
                {
                    audio[i].pause();
                }
            });
            //rewind
            rewindbtn[i].addEventListener('click',function(){
                audio[i].currentTime = 0;
                audio[i].pause();
            });
            //updating the slider when the song plays
            audio[i].addEventListener('timeupdate',function(){
                const value = (audio[i].currentTime / audio[i].duration) * 100;
                seekbar[i].value = value;
            });
            //using the slider to change the time of the song
            seekbar[i].addEventListener('input', function () {
                const seekValue = (seekbar[i].value / 100) * audio[i].duration;
                audio[i].currentTime = seekValue;
            });
            //changing the audio
            volumebar[i].addEventListener('input', function(){
                audio[i].volume = volumebar[i].value;
            })
        })(i);//end of IIFE
    }
});