SC.initialize({
  client_id: 'YOUR_CLIENT_ID',
  redirect_uri: 'http://example.com/callback'
});

// initiate auth popup
SC.connect().then(function() {
  return SC.get('/me');
}).then(function(me) {
  alert('Hello, ' + me.username);
});


$(document).ready(function() {
    SC.stream('/tracks/293', function(sound) {
        $('#playpause').click(function(e) {
            e.preventDefault();
            sound.start();
        });
        $('#previous').click(function(e) {
            e.preventDefault();
            sound.stop();
        });
        $('#next').click(function(e) {
            e.preventDefault();
            sound.stop();
        });
    });
});



// var location = 0;
// var playlistSize = 0;
// var isPlay = false;
// var track = '';
// var numPlaylist = [];
// var playlist = [];
// var currentPlayer;
//
// var previous = document.getElementById('previous');
// var next = document.getElementById('next');
// var playpause = document.getElementById('playpause');
//
// var previous.onclick = function() {
//   if (location == 0) {
//     location = playlistSize;
//   }
//   else {
//     location--;
//   }
// }
// var next.onclick = playNext;
//
// var playpause.onclick = function() {
//   if (isPlay == true) {
//     //change image to pause myImage.setAttribute ('src','images/firefox2.png');
//     //pause music
//     pause();
//   }
//   else {
//     // change image to play and play
//     play();
//   }
// }
//
// SC.get('/users/id/favorites').then(function(??)
//   playlistSize = ??.length;
//   numPlaylist = Array.apply(null, Array(playlistSize)).map(function (_, i) {return i;}); //get range of numbers from 0 to playlistsize
//   numPlaylist = shuffle(numPlaylist);
// });
//
// // getting list of favorites SC.get(/users/{id}/favorites)
// //get # number of songs in favorites users/public_favorites_count
// //make an array containing full number of those 1, 2 ... #-of-favs
// //shuffle that array
// //for i in array //need to figure out this process - recursive???
//   //SC.stream('/favorites/i') or SC.get('/user/183/tracks')
//   //wait until song is over
// for (var i=0; i<playlistSize; i++){
//
// }
// function pause(){
//   if (currentPlayer) {
//     currentPlayer.pause();
//   }
// }
// function play(){
//   if (currentPlayer) {
//     currentPlayer.play();
//   }
// }
// 
//
// SC.stream('/tracks/293').then(function(player){
//   player.play();
//   player.on('finish', playNext);
// });
//
// function playNext(){
//   if (location == playlistSize) {
//     location = 0;
//   }
//   else {
//     location++;
//   }
// }
//
// function shuffle(array) {
//   var currentIndex = array.length, temporaryValue, randomIndex;
//
//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {
//
//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//
//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//
//   return array;
// }

// SC.connect().then(function() {
//    SC.put('/me', {
//      user: { description: 'I am using the SoundCloud API!' }
//    });
// });
