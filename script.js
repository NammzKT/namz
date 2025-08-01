// DOM Elements
const homePage = document.getElementById("homePage");
const songDetailPage = document.getElementById("songDetailPage");
const playerPage = document.getElementById("playerPage");
const songListElement = document.getElementById("songList");

const backToHomeFromDetailBtn = document.getElementById(
  "backToHomeFromDetailBtn"
);
const backToHomeBtn = document.getElementById("backToHomeBtn"); // Tombol kembali dari player ke home
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector(
  ".video-background-container"
);
const backgroundVideo = document.getElementById("backgroundVideo");

// Elemen untuk Halaman Detail Lagu (tidak akan langsung digunakan saat klik lagu, tapi tetap di-load)
const detailAlbumArt = document.getElementById("detailAlbumArt");
const detailTrackTitle = document.getElementById("detailTrackTitle");
const detailTrackArtist = document.getElementById("detailTrackArtist");
const detailAlbumName = document.getElementById("detailAlbumName");
const playFromDetailBtn = document.getElementById("playFromDetailBtn"); // Tombol play di halaman detail

const audioPlayer = document.getElementById("audioPlayer");
const albumArtPlayer = document.getElementById("albumArt");
const playerTrackTitle = document.getElementById("playerTrackTitle");
const playerTrackArtist = document.getElementById("playerTrackArtist");
const lyricsContainer = document.getElementById("lyricsContainer");

const playerProgressBarContainer = document.getElementById(
  "playerProgressBarContainer"
);
const playerProgressBar = document.getElementById("playerProgressBar");
const playerCurrentTime = document.getElementById("playerCurrentTime");
const playerTotalDuration = document.getElementById("playerTotalDuration");

const playerPrevBtn = document.getElementById("playerPrevBtn");
const playerPlayPauseBtn = document.getElementById("playerPlayPauseBtn");
const playerNextBtn = document.getElementById("playerNextBtn");
const playerRepeatBtn = document.getElementById("playerRepeatBtn");
const playerShuffleBtn = document.getElementById("playerShuffleBtn");
const playerVolumeSlider = document.getElementById("playerVolumeSlider");
const playerSpeedSlider = document.getElementById("playerSpeedSlider"); // Tambahkan ini
const currentSpeedDisplay = document.getElementById("currentSpeedDisplay"); // Tambahkan ini

// App State
let songs = [
  {
    id: 1,
    title: "Consume",
    artist: "Chase Atlantic",
    album: "Beauty in Death",
    albumArtUrl:
      "https://tse3.mm.bing.net/th?id=OIP.VwivM--7Xx_SmgsqXBLi8AAAAA&pid=Api&P=0&h=220",
    audioSrc: "consume.mp3",
    videoBgSrc: "cons.mp4", // Path video background khusus lagu ini
    // Lirik dengan timestamp dalam detik
    lyrics: [
      { time: 0.8, text: "She said, Careful, or you'll lose it" },
      { time: 4, text: "But, girl, I'm only human," },
      { time: 7, text: "And I know there's a blade where your heart is" },
      { time: 10, text: "And you know how to use it" },
      { time: 13, text: "And you can take my flesh if you want girl" },
      { time: 16, text: "But, baby, don't abuse it (Calm down)" },
      {
        time: 19,
        text: "These voices in my head screaming, Run now (Don't run)",
      },
      { time: 22, text: "I'm praying that they're human" },
      { time: 25, text: "Please understand that I'm trying my hardest" },
      { time: 28, text: "My head's a mess, but I'm trying regardless" },
      { time: 31, text: "Anxiety is one hell of a problem" },
      { time: 34, text: "She's latching onto me, I can't resolve it" },
      { time: 37, text: "It's not right, it's not fair, it's not fair" },
      { time: 41.5, text: "It's not fair, it's not fair, it's not fair" },
      { time: 47, text: "Oh, no, no, no, ooh-ooh" },
    ],
  },
  {
    id: 2,
    title: "Perfect",
    artist: "Ed Sheeran",
    album: "÷ (Divide)",
    albumArtUrl:
      "https://tse4.mm.bing.net/th?id=OIP.TjS4z1jJTsl6K3-ADIXFywHaEK&pid=Api&P=0&h=220",
    audioSrc: "Ed Sheeran - Perfect.mp3",
    videoBgSrc: "prfct_bg.mp4", // Path video background khusus lagu ini
    // Lirik dengan timestamp dalam detik
    lyrics: [
      { time: 2.9, text: "I found a love for me" },
      { time: 10.6, text: "Oh, darlin, just dive right in and follow my lead" },
      { time: 18, text: "I found a girl, beautiful and sweet" },
      { time: 25, text: "I never knew you were the someone waiting for me" },
      { time: 32, text: "'Cause we were just kids when we fell in love" },
      { time: 36.7, text: "Not knowin' what it was" },
      { time: 40.5, text: "I will not give you up this time" },
      { time: 48, text: "But, darlin', just kiss me slow" },
      { time: 51.6, text: "Your heart is all I own" },
      { time: 55.9, text: "And in your eyes, you're holdin' mine" },
      {
        time: 62.3,
        text: "Baby, I'm dancing in the dark with you between my arms",
      },
      {
        time: 73.6,
        text: "Barefoot on the grass, listening to our favorite song",
      },
      {
        time: 80.9,
        text: "When you said you looked a mess, I whispered underneath my breath",
      },
      { time: 88, text: "But you heard it, darling, you look perfect tonight" },
    ],
  },
  {
    id: 3,
    title: "Unconditionally",
    artist: "Katy Perry",
    album: "Prism",
    albumArtUrl: "https://i.ytimg.com/vi/4NGVxU0qhZ8/maxresdefault.jpg",
    audioSrc: "Katy Perry - Unconditionally.mp3",
    videoBgSrc: "uncobg.mp4", // Path video background khusus lagu ini
    // Lirik dengan timestamp dalam detik
    lyrics: [
      { time: 7.1, text: "Oh no, did I get too close?" },
      { time: 12, text: "Oh, did I almost see what's really on the inside?" },
      { time: 22.6, text: "All your insecurities" },
      { time: 27.3, text: "All the dirty laundry" },
      { time: 30.3, text: "Never made me blink one time" },
      { time: 36.5, text: "Unconditional, unconditionally" },
      { time: 44, text: "I will love you unconditionally" },
      { time: 51, text: "There is no fear now" },
      { time: 55, text: "Let go and just be free" },
      { time: 58.6, text: "I will love you unconditionally" },
      { time: 67, text: "So come just as you are to me" },
      { time: 71, text: "Don't need apologies" },
      { time: 74.9, text: "Know that you are worthy" },
      { time: 82, text: "I'll take your bad days with your good" },
      { time: 86.5, text: "Walk through the storm, I would" },
      { time: 90, text: "I'd do it all because I love you" },
      { time: 96, text: "I love you" },
      { time: 99.5, text: "Unconditional, unconditionally" },
      { time: 107, text: "I will love you unconditionally" },
      { time: 114, text: "There is no fear now" },
      { time: 118, text: "Let go and just be free" },
      { time: 122, text: "I will love you unconditionally" },
      { time: 129.5, text: "So open up your heart and just let it begin" },
      { time: 133, text: "Open up your heart and just let it begin" },
      { time: 136.9, text: "Open up your heart and just let it begin" },
      { time: 141, text: "Open up your heart" },
      { time: 145, text: "Acceptance is the key to be" },
      { time: 150.6, text: "To be truly free" },
      { time: 154, text: "Will you do the same for me?" },
      { time: 162.5, text: "Unconditional, unconditionally" },
      { time: 170, text: "I will love you unconditionally" },
      { time: 177.8, text: "There is no fear now" },
      { time: 181, text: "Let go and just be free" },
      { time: 185, text: "I will love you unconditionally" },
      { time: 200, text: "I will love you (Unconditionally)" },
      { time: 207.8, text: "I will love you" },
      { time: 215, text: "I will love you unconditionally" },
    ],
  },
  {
    id: 4,
    title: "Rewrite the Stars",
    artist: "James Arthur & Anne-Marie",
    album: "The Greatest Showman: Reimagined",
    albumArtUrl: "https://i.ytimg.com/vi/BqGCJUXEqxQ/maxresdefault.jpg",
    audioSrc: "Rewrite The Stars - James Arthur feat. Anne Marie.mp3",
    videoBgSrc: "rewrite.mp4",
    lyrics: [
      { time: 1000, text: "You know I want you" },
      { time: 1000, text: "It's not a secret I try to hide" },
      { time: 100000, text: "You know you want me" },
      { time: 1000, text: "So don't keep sayin' our hands are tied" },
      { time: 1000, text: "You claim it's not in the cards" },
      {
        time: 1000,
        text: "And fate is pullin' you miles away and out of reach from me",
      },
      { time: 1000, text: "But you're here in my heart" },
      {
        time: 1000,
        text: "So who can stop me if I decide that you're my destiny?",
      },
      { time: 1000, text: "What if we rewrite the stars?" },
      { time: 1000, text: "Say you were made to be mine" },
      { time: 1000, text: "Nothin' could keep us apart" },
      { time: 1000, text: "You'd be the one I was meant to find" },
      { time: 1000, text: "It's up to you and it's up to me" },
      { time: 1000, text: "No one can say what we get to be" },
      { time: 1000, text: "So why don't we rewrite the stars?" },
      { time: 1000, text: "Maybe the world could be ours tonight" },
      { time: 1000, text: "Ah-oh (No, no, no, no)" },
      { time: 1000, text: "Ah-oh (Mm)" },
      { time: 1000, text: "You think it's easy" },
      { time: 1000, text: "You think I don't wanna run to you, yeah" },
      { time: 1000, text: "But there are mountains (There are mountains)" },
      { time: 1000, text: "And there are doors that we can't walk through" },
      { time: 1000, text: "I know you're wonderin' why" },
      {
        time: 1000,
        text: "Because we're able to be just you and me within these walls",
      },
      { time: 1000, text: "But when we go outside" },
      {
        time: 1000,
        text: "You're gonna wake up and see that it was hopeless after all",
      },
      { time: 1000, text: "No one can rewrite the stars" },
      { time: 1000, text: "How can you say you'll be mine?" },
      { time: 1000, text: "Everything keeps us apart" },
      { time: 1000, text: "And I'm not the one you were meant to find" },
      { time: 1000, text: "It's not up to you, it's not up to me" },
      { time: 1000, text: "When everyone tells us what we can be" },
      { time: 1000, text: "And how can we rewrite the stars?" },
      { time: 1000, text: "Say that the world can be ours tonight" },
      { time: 1000, text: "All I want is to fly with you" },
      { time: 1000, text: "All I want is to fall with you" },
      { time: 1000, text: "So just give me all of you" },
      { time: 1000, text: "It feels impossible" },
      { time: 1000, text: "It's not impossible" },
      { time: 1000, text: "Is it impossible?" },
      { time: 1000, text: "Say that it's possible" },
      { time: 1000, text: "How do we rewrite the stars?" },
      { time: 1000, text: "Say you were made to be mine" },
      { time: 1000, text: "And nothin' could keep us apart" },
      { time: 1000, text: "'Cause you are the one I was meant to find" },
      { time: 1000, text: "It's up to you and it's up to me" },
      { time: 1000, text: "No one could say what we get to be" },
      { time: 1000, text: "And why don't we rewrite the stars?" },
      { time: 1000, text: "Changin' the world to be ours" },
      { time: 1000, text: "Ah-oh (No, no, no, no)" },
      { time: 1000, text: "Ah-oh (Mm)" },
      { time: 1000, text: "You know I want you" },
      { time: 1000, text: "It's not a secret I try to hide" },
      { time: 1000, text: "But I can't have you" },
      { time: 1000, text: "We're bound to break and my hands are tied" },
    ],
  },
  {
    id: 5,
    title: "Somebody's Pleasure",
    artist: "Aziz Hedra",
    album: "Unreleased",
    albumArtUrl:
      "https://tse3.mm.bing.net/th?id=OIP.5fDFhJU8ZYGRlPD4ffPlgAHaHa&pid=Api&P=0&h=220",
    audioSrc: "Somebodys Pleasure.mp3",
    videoBgSrc: "spbg.mp4",
    lyrics: [
      { time: 1000, text: "I've been too busy ignoring and hiding" },
      { time: 1000, text: "About what my heart actually say" },
      { time: 1000, text: "Stay awake while I'm drowning on my thoughts" },
      { time: 1000, text: "Sometimes a happiness is just a happiness" },
      { time: 1000, text: "I've never been enjoying my serenity" },
      { time: 1000, text: "Even if I've got a lot of company" },
      { time: 1000, text: "That makes me happy" },
      { time: 1000, text: "Soul try to figure it out" },
      { time: 1000, text: "From where I've been escaping" },
      { time: 1000, text: "Running to end all the sin" },
      { time: 1000, text: "Get away from the pressure" },
      { time: 1000, text: "Wondering to get a love that is so pure" },
      { time: 1000, text: "Gotta have to always make sure" },
      { time: 1000, text: "That I'm not just somebody's pleasure" },
      { time: 1000, text: "I always pretending and lying" },
      { time: 1000, text: "I got used to feel empty" },
      { time: 1000, text: "'Cause all I got is unhappy" },
      { time: 1000, text: "Happiness, can't I get happiness?" },
      { time: 1000, text: "I've never been enjoying my serenity" },
      { time: 1000, text: "Even if I've got a lot of company" },
      { time: 1000, text: "That makes me happy" },
      { time: 1000, text: "And I don't even feel my own pain" },
      { time: 1000, text: "Whatever when the storms pouring rain" },
      { time: 1000, text: "Feels like a wind" },
      { time: 1000, text: "Soul try to figure it out" },
      { time: 1000, text: "From where I've been escaping" },
      { time: 1000, text: "Running to end all the sin" },
      { time: 1000, text: "Get away from the pressure" },
      { time: 1000, text: "Wondering to get a love that is so pure" },
      { time: 1000, text: "Gotta have to always make sure" },
      { time: 1000, text: "That I'm not just somebody's pleasure" },
      { time: 1000, text: "I hold imagination" },
      { time: 1000, text: "Cover all of the sadness" },
      { time: 1000, text: "I don't feel something special" },
      { time: 1000, text: "Turn off the phone to get some spatial" },
      { time: 1000, text: "Never thought I'd living in true" },
      { time: 1000, text: "The truth that has been so blue" },
      { time: 1000, text: "It was in a blink of an eye" },
      { time: 1000, text: "Find a way how to say goodbye" },
      { time: 1000, text: "I've got to take me away from all sadness" },
      { time: 1000, text: "Stitch all my wounds, confess all the sins" },
      { time: 1000, text: "And took all my insecurities" },
      { time: 1000, text: "When will I got the love that is so pure?" },
      { time: 1000, text: "Gotta have to always make sure" },
      {
        time: 1000,
        text: "That I'm not just, I'm not just somebody's pleasure",
      },
      { time: 1000, text: "Gotta have, gotta have to always make sure" },
      { time: 1000, text: "I'm not just somebody's pleasure" },
    ],
  },
  {
    id: 6,
    title: "I Wanna Be Yours",
    artist: "Arctic Monkeys",
    album: "AM",
    albumArtUrl: "https://i.ytimg.com/vi/fJLQCf4mFP0/hqdefault.jpg",
    audioSrc: "I Wanna Be Yours.mp3",
    videoBgSrc: "iwbybg.mp4",
    lyrics: [
      { time: 1000, text: "I wanna be your vacuum cleaner" },
      { time: 1000, text: "Breathing in your dust" },
      { time: 1000, text: "I wanna be your Ford Cortina" },
      { time: 1000, text: "I will never rust" },
      { time: 1000, text: "If you like your coffee hot" },
      { time: 1000, text: "Let me be your coffee pot" },
      { time: 1000, text: "You call the shots, babe" },
      { time: 1000, text: "I just wanna be yours" },

      { time: 1000, text: "Secrets I have held in my heart" },
      { time: 1000, text: "Are harder to hide than I thought" },
      { time: 1000, text: "Maybe I just wanna be yours" },
      { time: 1000, text: "I wanna be yours, I wanna be yours" },
      { time: 1000, text: "Wanna be yours, wanna be yours, wanna be yours" },

      {
        time: 1000,
        text: "Let me be your 'leccy meter and I'll never run out",
      },
      {
        time: 1000,
        text: "Let me be the portable heater that you'll get cold without",
      },
      { time: 1000, text: "I wanna be your setting lotion (wanna be)" },
      { time: 1000, text: "Hold your hair in deep devotion (how deep?)" },
      { time: 1000, text: "At least as deep as the Pacific Ocean" },
      { time: 1000, text: "I wanna be yours" },

      { time: 1000, text: "Secrets I have held in my heart" },
      { time: 1000, text: "Are harder to hide than I thought" },
      { time: 1000, text: "Maybe I just wanna be yours" },
      { time: 1000, text: "I wanna be yours, I wanna be yours" },
      { time: 1000, text: "Wanna be yours, wanna be yours, wanna be yours" },
      { time: 1000, text: "Wanna be yours, wanna be yours, wanna be yours" },
      { time: 1000, text: "Wanna be yours, wanna be yours" },

      { time: 1000, text: "I wanna be your vacuum cleaner (Wanna be yours)" },
      { time: 1000, text: "Breathing in your dust (Wanna be yours)" },
      { time: 1000, text: "I wanna be your Ford Cortina (Wanna be yours)" },
      { time: 1000, text: "I will never rust (Wanna be yours)" },
      { time: 1000, text: "I just wanna be yours (Wanna be yours)" },
      { time: 1000, text: "I just wanna be yours (Wanna be yours)" },
      { time: 1000, text: "I just wanna be yours (Wanna be yours)" },
    ],
  },
  {
    id: 6,
    title: "Love Yourself",
    artist: "Justin Bieber",
    album: "Purpose(Deluxe)",
    albumArtUrl: "https://img.youtube.com/vi/o_43OTaDXow/mqdefault.jpg",
    audioSrc: "Love Yourself - Justin Bieber.mp3",
    videoBgSrc: "lybg.mp4",
    lyrics: [
      { time: 0.5, text: "For all the times that you rained on my parade" },
      { time: 5.4, text: "And all the clubs you get in using my name" },
      {
        time: 9.9,
        text: "You think you broke my heart, oh, girl, for goodness' sake",
      },
      { time: 14.8, text: "You think I'm crying on my own, well, I ain't" },
      { time: 19.7, text: "And I didn't wanna write a song" },
      {
        time: 22.2,
        text: "'Cause I didn't want anyone thinkin' I still care, I don't, but",
      },
      { time: 26.6, text: "You still hit my phone up" },
      { time: 29.4, text: "And baby, I'll be movin' on" },
      {
        time: 31.5,
        text: "And I think you should be somethin' I don't wanna hold back",
      },
      { time: 36.1, text: "Maybe you should know that" },
      { time: 38.9, text: "My mama don't like you and she likes everyone" },
      { time: 43.2, text: "And I never like to admit that I was wrong" },
      { time: 48.1, text: "And I've been so caught up in my job" },
      { time: 51.3, text: "Didn't see what's going on, but now I know" },
      { time: 55.6, text: "I'm better sleeping on my own" },
      { time: 58.3, text: "'Cause if you like the way you look that much" },
      { time: 63, text: "Oh, baby, you should go and love yourself" },
      {
        time: 67.6,
        text: "And if you think that I'm still holdin' on to somethin'",
      },
      { time: 73.4, text: "You should go and love yourself" },
      { time: 77.6, text: "But when you told me that you hated my friends" },
      { time: 81.9, text: "The only problem was with you and not them" },
      { time: 86.8, text: "And every time you told me my opinion was wrong" },
      { time: 91.6, text: "And tried to make me forget where I came from" },
      { time: 96.5, text: "And I didn't wanna write a song" },
      {
        time: 99.1,
        text: "'Cause I didn't want anyone thinkin' I still care, I don't, but",
      },
      { time: 104.4, text: "You still hit my phone up" },
      { time: 106.1, text: "And baby, I'll be movin' on" },
      {
        time: 108.5,
        text: "And I think you should be somethin' I don't wanna hold back",
      },
      { time: 112.8, text: "Maybe you should know that" },
      { time: 115.8, text: "My mama don't like you and she likes everyone" },
      { time: 120.4, text: "And I never like to admit that I was wrong" },
      { time: 125, text: "And I've been so caught up in my job" },
      { time: 127.9, text: "Didn't see what's going on, but now I know" },
      { time: 132.4, text: "I'm better sleeping on my own" },
      { time: 134.9, text: "'Cause if you like the way you look that much" },
      { time: 139.6, text: "Oh, baby, you should go and love yourself" },
      {
        time: 144.5,
        text: "And if you think that I'm still holdin' on to somethin'",
      },
      { time: 150.1, text: "You should go and love yourself" },
      { time: 154.4, text: "....." },
      { time: 173.5, text: "For all the times that you made me feel small" },
      { time: 178.2, text: "I fell in love, now I feel nothin' at all" },
      { time: 183.1, text: "I never felt so low and I was vulnerable" },
      { time: 187.7, text: "Was I a fool to let you break down my walls?" },
      { time: 192.5, text: "'Cause if you like the way you look that much" },
      { time: 197.3, text: "Oh, baby, you should go and love yourself" },
      {
        time: 201.7,
        text: "And if you think that I'm still holdin' on to somethin'",
      },
      { time: 207.7, text: "You should go and love yourself" },
      { time: 211.7, text: "Cause if you like the way you look that much" },
      { time: 216.4, text: "Oh, baby, you should go and love yourself (yeah)" },
      { time: 221.1, text: "And if you think (you think) that I'm (that I'm)" },
      { time: 224.8, text: "Still holdin' on to somethin' (holdin' on, no)" },
      { time: 227.2, text: "You should go and love yourself" },
      { time: 228.3, text: "....." },
    ],
  },
  {
    id: 7,
    title: "About You",
    artist: "The1975",
    album: "Being Funny in a Foreign Language",
    albumArtUrl: "https://img.youtube.com/vi/tGv7CUutzqU/mqdefault.jpg",
    audioSrc: "About You - The 1975.mp3",
    videoBgSrc: "abtu.mp4",
    lyrics: [
      { time: 44.6, text: "I know a place" },
      {
        time: 54.5,
        text: "It's somewhere I go when I need to remember your face",
      },
      { time: 64, text: "We get married in our heads" },
      { time: 74.5, text: "Something to do while we try to recall how we met" },
      { time: 84, text: "Do you think I have forgotten?" },
      { time: 89.1, text: "Do you think I have forgotten?" },
      { time: 93.1, text: "Do you think I have forgotten" },
      { time: 99.2, text: "About you?" },
      {
        time: 104.2,
        text: "You and I (don't let go) were alive (don't let go)",
      },
      {
        time: 114.5,
        text: "With nothing to do, I could lay and just look in your eyes",
      },
      { time: 124.6, text: "Wait (don't let go) and pretend (don't let go)" },
      {
        time: 134.6,
        text: "Hold on and hope that we'll find our way back in the end",
      },
      { time: 144.2, text: "Do you think I have forgotten?" },
      { time: 149.2, text: "Do you think I have forgotten?" },
      { time: 154.1, text: "Do you think I have forgotten" },
      { time: 159.1, text: "About you?" },
      { time: 164.1, text: "Do you think I have forgotten?" },
      { time: 169, text: "Do you think I have forgotten?" },
      { time: 174.1, text: "Do you think I have forgotten" },
      { time: 179.1, text: "About you?" },
      {
        time: 184.4,
        text: "There was something 'bout you that now I can't remember",
      },
      {
        time: 189.6,
        text: "It's the same damn thing that made my heart surrender",
      },
      {
        time: 194.4,
        text: "And I miss you on a train, I miss you in the morning",
      },
      { time: 199.5, text: "I never know what to think about" },
      { time: 203.5, text: "I think about you (so don't let go)" },
      { time: 209.1, text: "About you (so don't let go)" },
      { time: 214.2, text: "Do you think I have forgotten" },
      { time: 219.1, text: "About you? (Don't let go)" },
      { time: 224.2, text: "About you" },
      { time: 229.1, text: "About you" },
      { time: 234.1, text: "Do you think I have forgotten" },
      { time: 239.2, text: "About you? (Don't let go)" },
      { time: 241.9, text: "....." },
    ],
  },
  {
    id: 8,
    title: "Cry",
    artist: "Cigerattes After Sex",
    album: "Cry",
    albumArtUrl: "https://img.youtube.com/vi/3XqqkrJENB4/mqdefault.jpg",
    audioSrc: "Cry.mp3",
    videoBgSrc: "crybg.mp4",
    lyrics: [
      {
        time: 54.4,
        text: "It's making you cry every time you give your love to me this way",
      },
      {
        time: 68,
        text: "Saying you'd wait for me to stay, I know it hurts you,",
      },
      { time: 78.3, text: "But I need to tell you something" },
      { time: 89.5, text: "My heart just can't be faithful for long" },
      { time: 99.5, text: "I swear I'll only make you cry" },
      {
        time: 109,
        text: "Maybe I'd change for you someday, but I can't help the way I feel",
      },
      {
        time: 121.3,
        text: "Wish I was good, wish that I could give you my love now...",
      },
      { time: 131.9, text: "But I need to tell you something" },
      { time: 143.5, text: "My heart just can't be faithful for long" },
      { time: 153.6, text: "I swear I'll only make you cry" },
      { time: 162.9, text: "....." },
      { time: 187.5, text: "I need to tell you something" },
      { time: 196.9, text: "My heart just can't be faithful for long" },
      { time: 207.2, text: "I swear I'll only make you cry" },
      { time: 214.1, text: "....." },
    ],
  },
  {
    id: 9,
    title: "Imagination",
    artist: "Shawn Mandes",
    album: "Handwritten",
    albumArtUrl: "https://img.youtube.com/vi/xXEx0DyIMks/hqdefault.jpg",
    audioSrc: "imagination.mp3",
    videoBgSrc: "imabg.mp4",
    lyrics: [
      { time: 8.9, text: "Oh, there she goes again" },
      { time: 11.7, text: "Every morning is the same" },
      { time: 14.9, text: "You walk on by my house" },
      { time: 17.8, text: "I wanna call out your name" },
      { time: 21.4, text: "I wanna tell you how beautiful you are" },
      { time: 25.7, text: "From where I'm standing" },
      { time: 28.4, text: "You got me thinkin'" },
      { time: 30.2, text: "What we could be 'cause" },
      { time: 32.3, text: "I keep craving, craving" },
      { time: 34.9, text: "You don't know it but it's true" },
      { time: 37.9, text: "Can't get my mouth to say the words" },
      { time: 41.1, text: "They wanna say to you" },
      { time: 43.6, text: "This is typical of love" },
      { time: 46.3, text: "Can't wait anymore" },
      { time: 47.8, text: "Won't wait, I need to tell you" },
      { time: 49.1, text: "How I feel when I see us together forever" },
      { time: 52.3, text: "In my dreams" },
      { time: 55.1, text: "You're with me" },
      { time: 57.7, text: "We'll be everything I want us to be" },
      { time: 63, text: "And from there, who knows?" },
      { time: 68.7, text: "Maybe this will be the night" },
      { time: 71.1, text: "That we kiss" },
      { time: 73, text: "For the first time" },
      { time: 74.5, text: "Or is that just me" },
      { time: 76.5, text: "And my imagination?" },
      { time: 80.3, text: "We walk" },
      { time: 81.2, text: "We laugh, we spend our time" },
      { time: 83.2, text: "Walking by the ocean side" },
      { time: 85.9, text: "Our hands are gently intertwined" },
      { time: 88.5, text: "A feeling I just can't describe" },
      { time: 91.3, text: "And all this time we spent alone" },
      { time: 93.9, text: "Thinking we could not belong" },
      { time: 96.5, text: "To something so damn beautiful" },
      { time: 99.5, text: "So damn beautiful" },
      { time: 101.6, text: "I keep craving, craving" },
      { time: 104.1, text: "You don't know it but it's true" },
      { time: 107.3, text: "Can't get my mouth to say the words" },
      { time: 110.4, text: "They wanna say to you" },
      { time: 113, text: "This is typical of love" },
      { time: 115.6, text: "I can't wait anymore" },
      { time: 117.1, text: "Won't wait I need to tell you how I feel" },
      { time: 119.3, text: "When I see us together forever" },
      { time: 121.7, text: "In my dreams" },
      { time: 124.4, text: "You're with me" },
      { time: 127, text: "We'll be everything I want us to be" },
      { time: 132.5, text: "And from there, who knows?" },
      { tume: 137.9, text: "Maybe this will be the night" },
      { time: 140.4, text: "That we kiss" },
      { time: 142.4, text: "For the first time" },
      { time: 143.9, text: "Or is that just me" },
      { time: 145.7, text: "And my imagination?" },
      { time: 150.7, text: "Oh-oh-oh-oh" },
      { time: 152.6, text: "Imagination" },
      { time: 155.9, text: "Oh-oh-oh-oh" },
      { time: 157.8, text: "Imagination" },
      { time: 161.2, text: "Oh-oh-oh, woah-oh-oh" },
      { time: 166.5, text: "Oh-oh-oh-oh" },
      { time: 169.8, text: "In my dreams" },
      { time: 172.5, text: "You're with me" },
      { time: 175.2, text: "We'll be everything I want us to be" },
      { time: 180.4, text: "And from there, who knows?" },
      { time: 185.8, text: "Maybe this will be the night" },
      { time: 188.5, text: "That we kiss" },
      { time: 190.4, text: "For the first time" },
      { time: 191.7, text: "Or is that just me" },
      { time: 193.7, text: "And my imagination?" },
      { time: 197.8, text: "....." },
      { time: 200.1, text: "I keep craving, craving" },
      { time: 202.8, text: "You don't know it but it's true" },
      { time: 206.3, text: "Can't get my mouth to say the words" },
      { time: 209.3, text: "Wanna say to you" },
      { time: 211.9, text: "....." },
    ],
  },
  {
    id: 10,
    title: "Someone To Stay",
    artist: "Vancouver Sleep Clinic",
    album: "Revival",
    albumArtUrl: "https://img.youtube.com/vi/xNVZ4fzkSu8/mqdefault.jpg",
    audioSrc: "sts.mp3",
    videoBgSrc: "stsbg.mp4",
    lyrics: [
      { time: 4.4, text: "You were alone, left out in the cold" },
      { time: 8.6, text: "Clinging to the ruin of your broken home" },
      { time: 12.7, text: "Too lost and hurting to carry your load" },
      { time: 17.2, text: "We all need someone to hold" },
      { time: 22.2, text: "....." },
      { time: 30.2, text: "You've been fighting the memory, all on your own" },
      { time: 34.8, text: "Nothing worsens, nothing grows" },
      { time: 39.5, text: "I know how it feels being by yourself in the rain" },
      { time: 43.6, text: "We all need someone to stay" },
      { time: 48.6, text: "....." },
      { time: 52.7, text: "We all need someone to stay" },
      { time: 57, text: "Hear the fallen and lonely, cry out" },
      { time: 61, text: "Will you fix me up? Will you show me hope?" },
      { time: 65.7, text: "At the end of the day you were helpless" },
      { time: 69.8, text: "t the end of the day you were helpless" },
      { time: 79, text: "You've drunk it down and you've spat it out" },
      { time: 83.3, text: "And nothing tastes like the things you had" },
      { time: 87.5, text: "So tear it off, why don't you let them go?" },
      { time: 92.3, text: "We all need someone to stay" },
      { time: 97.4, text: "We all need someone to stay" },
      { time: 101.1, text: "We all need someone to stay" },
      { time: 105.3, text: "Hear the fallen and lonely, cry out" },
      { time: 109.4, text: "Will you fix me up? Will you show me hope?" },
      { time: 114.3, text: "At the end of the day we're helpless" },
      { time: 118.1, text: "Can you keep me close? Can you love me most?" },
      { time: 124.1, text: "....." },
      { time: 127.1, text: "Can you keep me close? Can you love me most?" },
      { time: 133.3, text: "....." },
      { time: 135.7, text: "Can you keep me close? Can you love me most?" },
      { time: 142.3, text: "....." },
      { time: 142.7, text: "You were alone, left out in the cold" },
      { time: 154, text: "Clinging to the ruin of your broken home" },
      { time: 158.3, text: "Hear the falling and lonely, cry out" },
      { time: 162.3, text: "Will you fix me up? Will you show me hope?" },
      { time: 167, text: "The end of the day and we're helpless" },
      { time: 170.9, text: "Can you keep me close? Can you love me?" },
      { time: 176.6, text: "....." },
      { time: 193.8, text: "Hear the fallen and lonely, cry out" },
      { time: 197.8, text: "Will you fix me up? Will you show me hope?" },
      { time: 202.8, text: "At the end of the day we're helpless" },
      { time: 206.6, text: "Can you keep me close? Can you love me most?" },
      { time: 212.6, text: "....." },
      { time: 215.7, text: "Can you keep me close? Can you love me most?" },
      { time: 221.9, text: "....." },
      { time: 224.1, text: "Can you keep me close? Can you love me most?" },
      { time: 229, text: "....." },
    ],
  },
  {
    id: 11,
    title: "Let Down",
    artist: "Radiohead",
    album: "Ok Computer",
    albumArtUrl: "https://i3.ytimg.com/vi/ZVgHPSyEIqk/hqdefault.jpg",
    audioSrc: "ld.mp3",
    videoBgSrc: "ld.mp4",
    lyrics: [
      { time: 22, text: "transport" },
      { time: 24.1, text: "Motorways and tramlines" },
      { time: 28.8, text: "Starting and then stopping" },
      { time: 33.5, text: "Taking off and landing" },
      { time: 38.2, text: "Disappointed people" },
      { time: 42.8, text: "Clinging onto bottles" },
      { time: 47.5, text: "And when it comes it's so so disappointing" },
      { time: 52.2, text: "Let down and hanging around" },
      { time: 66.4, text: "Crushed like a bug in the ground" },
      { time: 73.5, text: "Let down and hanging around" },
      { time: 79.2, text: "....." },
      { time: 90.5, text: "Shell smashed, juices flowing" },
      { time: 94.7, text: "Wings twitch legs are going" },
      { time: 99.2, text: "Don't get sentimental" },
      { time: 103.9, text: "It always ends up drivel" },
      { time: 108.8, text: "One day I am gonna grow wings" },
      { time: 115.7, text: "A chemical reaction" },
      { time: 120.4, text: "Hysterical and useless" },
      { time: 125.1, text: "Hysterical and" },
      { time: 127.5, text: "Let down and hanging around" },
      { time: 134.5, text: "Crushed like a bug in the ground" },
      { time: 141.6, text: "Let down and hanging around" },
      { time: 147.2, text: "....." },
      { time: 187.3, text: "Let down and hanging" },
      { time: 193.4, text: "....." },
      { time: 196, text: "Let down" },
      { time: 199.5, text: "....." },
      { time: 205.1, text: "Let down" },
      { time: 208.6, text: "....." },
      { time: 221.5, text: "You know, you know where you are with" },
      { tume: 227.8, text: "You know where you are with" },
      { time: 232.5, text: "Floor collapsing, floating" },
      { time: 237.2, text: "Bouncing back and" },
      { time: 239.6, text: "One day I am gonna grow wings" },
      { time: 246.1, text: "A chemical reaction" },
      { time: 248.2, text: "(You know where you are)" },
      { time: 251, text: "Hysterical and useless" },
      { time: 253.3, text: "(You know where you are)" },
      { time: 255.7, text: "Hysterical and" },
      { time: 257.5, text: "(You know where you are)" },
      { time: 258.3, text: "Let down and hanging around" },
      { time: 265, text: "Crushed like a bug in the ground" },
      { time: 271.9, text: "Let down and hanging around" },
      { time: 275.8, text: "....." }
    ],
  },
  {
    id:  12,
    title: "Impossible",
    artist: "James Arthur",
    album: "James Arthur",
    albumArtUrl: "https://img.youtube.com/vi/-y2afvkOwws/mqdefault.jpg",
    audioSrc: "ips.mp3",
    videoBgSrc: "ips.mp4",
    lyrics: [
      { time: 11.6, text: "I remember years ago" },
      { time: 14.2, text: "Someone told me I should take" },
      { time: 17, text: "Caution when it comes to love" },
      { time: 19.9, text: "I did" },
      { time: 22.5, text: "And you were strong and I was not" },
      { time: 25.7, text: "My illusion, my mistake" },
      { time: 28.6, text: "I was careless I forgot" },
      { time: 31.4, text: "I did" },
      { time: 33.4, text: "And now" },
      { time: 35.1, text: "When all is done there is nothing to say" },
      { time: 38, text: "You have gone and so effortlessly" },
      { time: 40.7, txt: "You have won you can go ahead" },
      { time: 42.8, text: "Tell them, tell them all I know now" },
      { time: 46.9, text: "Shout it from the roof tops" },
      { time: 49.8, text: "Write it on the sky line" },
      { time: 52.5, text: "All we had is gone now" },
      { time: 55.4, text: "Tell them I was happy" },
      { time: 58.1, ttext: "And my heart is broken" },
      { time: 61, text: "All my scars are open" },
      { time: 63.8, text: "Tell them what I hoped would be" },
      { time: 67, text: "Impossible, impossible" },
      { time: 72.7, text: "Impossible, impossible" },
      { time: 79.4, text: "Falling out of love is hard" },
      { time: 82.3, text: "Falling for betrayal is worse" },
      { time: 85.1, text: "Broken trust and broken hearts" },
      { time: 87.9, text: "I know" },
      { time: 89.5, text: "I know" },
      { time: 90.6, text: "And thinking all you need is there" },
      { time: 93.5, text: "Building faith on love and words" },
      { time: 96.4, text: "Empty promises we'll wear" },
      { time: 99.1, text: "I know" },
      { time: 100.7, text: "I know and now" },
      { time: 102.8, text: "When all is done there is nothing to say" },
      { time: 105.6, text: "And if you're done with embarrassing me" },
      { time: 108.4, text: "On your own you can go ahead" },
      { time: 110.5, text: "Tell them, tell them all I know now" },
      { time: 114.6, text: "Shout it from the roof tops" },
      { time: 117.6, text: "Write it on the sky line" },
      { time: 120, text: "All we had is gone now" },
      { time: 123, text: "Tell them I was happy" },
      { time: 125.8, text: "And my heart is broken" },
      { time: 128.7, text: "All my scars are open" },
      { time: 131.6, text: "Tell them what I hoped would be" },
      { time: 134.8, text: "[02:14.80]Impossible, impossible" },
      { time: 140.4, text: "[02:14.80]Impossible, impossible" },
      { time: 147.2, text: "I remember years ago" },
      { time: 149.9, text: "Someone told me I should take" },
      { time: 152.8, text: "Caution when it comes to love" },
      { time: 155.8, text: "I did" },
      { time: 158.3, text: "Tell them all I know now" },
      { time: 161.2, tetx: "Shout it from the roof tops" },
      { time: 164.1, text: "Write it on the sky line" },
      { time: 168.6, text: "All we had is gone now" },
      { time: 171.4, text: "Tell them I was happy" },
      { time: 174.4, text: "And my heart is broken" },
      { time: 177.2, text: "Oh, what I hoped would be" },
      { time: 181.7, text: "Impossible, impossible" },
      { time: 184.4, text: "Impossible, impossible" },
      { time: 187.1, text: "Impossible, impossible" },
      { time: 192.7, text: "Impossible, impossible" },
      { time: 195.9, text: "Impossible, impossible" },
      { time: 198.4, text: "Impossible, impossible" },
      { time: 200.8, text: "....." }
      ]
  }
];
let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all

// --- Page Navigation ---
function showHomePage() {
  playerPage.classList.remove("active");
  songDetailPage.classList.remove("active"); // Pastikan detail page disembunyikan
  homePage.classList.add("active");

  bodyElement.classList.remove("player-active-bg");
  bodyElement.classList.remove("detail-active-bg");
  backgroundVideoContainer.classList.remove("active"); // Sembunyikan video background
  backgroundVideo.pause(); // Jeda video background
  backgroundVideo.src = ""; // Kosongkan src video
  backgroundVideo.load();
  pauseTrack(); // Jeda musik saat kembali ke home
}

// Fungsi untuk menampilkan halaman detail lagu (tetap dipertahankan, tapi tidak dipanggil dari song list click)
function showSongDetailPage(song) {
  homePage.classList.remove("active");
  playerPage.classList.remove("active");
  songDetailPage.classList.add("active");

  detailAlbumArt.src = song.albumArtUrl;
  detailTrackTitle.textContent = song.title;
  detailTrackArtist.textContent = song.artist;
  detailAlbumName.textContent = song.album || "Unknown Album";

  bodyElement.classList.remove("player-active-bg");
  bodyElement.classList.add("detail-active-bg");
  backgroundVideoContainer.classList.remove("active");
  backgroundVideo.pause(); // Jeda video background
  backgroundVideo.src = ""; // Kosongkan src video
  backgroundVideo.load();
}

function showPlayerPage() {
  homePage.classList.remove("active");
  songDetailPage.classList.remove("active");
  playerPage.classList.add("active");

  bodyElement.classList.remove("detail-active-bg");
  bodyElement.classList.add("player-active-bg");
  backgroundVideoContainer.classList.add("active"); // Tampilkan video background

  const currentSong = songs[currentSongIndex];
  if (currentSong && currentSong.videoBgSrc) {
    backgroundVideo.src = currentSong.videoBgSrc;
    backgroundVideo.load();
    backgroundVideo
      .play()
      .catch((e) => console.error("Error playing video background:", e));
  } else {
    backgroundVideo.src = "";
    backgroundVideo.load(); // Kosongkan src jika tidak ada video khusus
  }
}

// --- Home Page Logic ---
function renderSongList() {
  songListElement.innerHTML = "";
  if (songs.length === 0) {
    songListElement.innerHTML =
      '<li class="loading-songs">Tidak ada lagu tersedia.</li>';
    return;
  }
  songs.forEach((song, index) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("data-id", song.id);
    listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
    // --- Perubahan Penting di sini ---
    // Saat item lagu diklik, langsung muat & putar lagu lalu tampilkan halaman player
    listItem.addEventListener("click", () => {
      currentSongIndex = index;
      loadSong(songs[currentSongIndex]);
      playTrack();
      showPlayerPage(); // Langsung pindah ke halaman pemutar musik
    });

    // Event listener untuk hover
    listItem.addEventListener("mouseenter", () => {
      // Hanya aktifkan video background jika kita di halaman home
      if (homePage.classList.contains("active") && song.videoBgSrc) {
        backgroundVideo.src = song.videoBgSrc;
        backgroundVideo.load();
        backgroundVideoContainer.classList.add("active");
        backgroundVideo
          .play()
          .catch((e) => console.error("Error playing video on hover:", e));
        bodyElement.classList.add("player-active-bg"); // Tambahkan kelas untuk warna background body
      }
    });
    listItem.addEventListener("mouseleave", () => {
      // Sembunyikan video background hanya jika kita di halaman home
      if (homePage.classList.contains("active")) {
        backgroundVideoContainer.classList.remove("active");
        backgroundVideo.pause(); // Jeda video saat mouse meninggalkan
        backgroundVideo.src = ""; // Kosongkan src agar tidak memutar di background
        backgroundVideo.load();
        bodyElement.classList.remove("player-active-bg"); // Hapus kelas warna background body
      }
    });

    songListElement.appendChild(listItem);
  });
}

// --- Player Logic ---
function loadSong(song) {
  if (!song) {
    console.error("Lagu tidak ditemukan!");
    albumArtPlayer.src =
      "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
    playerTrackTitle.textContent = "Lagu Tidak Tersedia";
    playerTrackArtist.textContent = "-";
    lyricsContainer.innerHTML = "<p>Lirik tidak tersedia.</p>"; // Ganti textContent dengan innerHTML
    audioPlayer.src = "";
    playerCurrentTime.textContent = "0:00";
    playerTotalDuration.textContent = "0:00";
    playerProgressBar.style.width = "0%";
    return;
  }
  albumArtPlayer.src = song.albumArtUrl;
  playerTrackTitle.textContent = song.title;
  playerTrackArtist.textContent = song.artist;

  renderLyrics(song.lyrics); // Panggil fungsi renderLyrics

  audioPlayer.src = song.audioSrc;

  audioPlayer.onloadedmetadata = () => {
    playerTotalDuration.textContent = formatTime(audioPlayer.duration);
  };
  audioPlayer.load();
  updatePlayPauseIcon();
}

// Fungsi baru untuk merender lirik
function renderLyrics(lyrics) {
  lyricsContainer.innerHTML = ""; // Bersihkan container lirik
  if (!lyrics || lyrics.length === 0) {
    lyricsContainer.innerHTML = "<p>Lirik tidak tersedia untuk lagu ini.</p>";
    return;
  }

  lyrics.forEach((line) => {
    const span = document.createElement("span");
    span.textContent = line.text;
    span.setAttribute("data-time", line.time); // Simpan timestamp di data-attribute
    span.classList.add("lyric-line"); // Tambahkan kelas untuk styling
    lyricsContainer.appendChild(span);
    // Hapus penambahan <br> secara manual, gunakan CSS display:block atau flexbox
    // lyricsContainer.appendChild(document.createElement('br'));
  });
}

function playTrack() {
  if (!audioPlayer.src || audioPlayer.src === window.location.href) {
    if (songs.length > 0) {
      loadSong(songs[currentSongIndex]);
    } else {
      console.log("Tidak ada lagu untuk dimainkan.");
      return;
    }
  }
  isPlaying = true;
  audioPlayer.play().catch((error) => console.error("Error saat play:", error));
  updatePlayPauseIcon();
}

function pauseTrack() {
  isPlaying = false;
  audioPlayer.pause();
  updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
  if (isPlaying) {
    playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
}

function prevTrack() {
  if (songs.length === 0) return;
  if (isShuffle) {
    playRandomTrack();
  } else {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  }
  loadSong(songs[currentSongIndex]);
  playTrack();
  showPlayerPage(); // Perbarui video background
}

function nextTrackLogic() {
  if (songs.length === 0) return;
  if (isShuffle) {
    playRandomTrack();
  } else {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
  }
  loadSong(songs[currentSongIndex]);
  playTrack();
  showPlayerPage(); // Perbarui video background
}

function nextTrack() {
  if (songs.length === 0) return;

  if (repeatMode === 1 && audioPlayer.ended) {
    // Handled by audio.loop = true
  } else if (isShuffle) {
    playRandomTrack();
  } else {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
      if (repeatMode === 2) {
        currentSongIndex = 0;
      } else {
        currentSongIndex = songs.length - 1;
        loadSong(songs[currentSongIndex]);
        pauseTrack();
        audioPlayer.currentTime = audioPlayer.duration;
        return;
      }
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
  }
  showPlayerPage(); // Perbarui video background
}

function playRandomTrack() {
  if (songs.length <= 1) {
    currentSongIndex = 0;
  } else {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * songs.length);
    } while (randomIndex === currentSongIndex);
    currentSongIndex = randomIndex;
  }
  loadSong(songs[currentSongIndex]);
  playTrack();
  showPlayerPage(); // Perbarui video background
}

audioPlayer.addEventListener("timeupdate", () => {
  if (audioPlayer.duration) {
    const progressPercent =
      (audioPlayer.currentTime / audioPlayer.duration) * 100;
    playerProgressBar.style.width = `${progressPercent}%`;
    playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);

    // --- Logic highlight lirik ---
    const currentTime = audioPlayer.currentTime;
    const lyricLines = lyricsContainer.querySelectorAll(".lyric-line");
    let highlightedLine = null;

    lyricLines.forEach((line, index) => {
      const lineTime = parseFloat(line.getAttribute("data-time"));
      // Tentukan waktu berakhir baris lirik ini. Jika ini baris terakhir, anggap berakhir di akhir lagu.
      // Atau, lebih baik, anggap berakhir tepat sebelum baris berikutnya dimulai.
      let nextLineTime = Infinity;
      if (index + 1 < lyricLines.length) {
        nextLineTime = parseFloat(
          lyricLines[index + 1].getAttribute("data-time")
        );
      }

      if (currentTime >= lineTime && currentTime < nextLineTime) {
        line.classList.add("highlight");
        highlightedLine = line;
      } else {
        line.classList.remove("highlight");
      }
    });

    // --- Auto-scroll lirik hanya jika baris yang disorot tidak terlihat ---
    if (highlightedLine) {
      const containerRect = lyricsContainer.getBoundingClientRect();
      const lineRect = highlightedLine.getBoundingClientRect();

      // Periksa apakah baris di luar viewport kontainer
      const isOutsideTop = lineRect.top < containerRect.top;
      const isOutsideBottom = lineRect.bottom > containerRect.bottom;

      if (isOutsideTop || isOutsideBottom) {
        // Scroll agar baris terdekat muncul di dalam viewport, dengan animasi smooth
        highlightedLine.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }
});

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

playerProgressBarContainer.addEventListener("click", (e) => {
  if (!audioPlayer.duration || songs.length === 0) return;
  const width = playerProgressBarContainer.clientWidth;
  const clickX = e.offsetX;
  audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
});

playerVolumeSlider.addEventListener("input", (e) => {
  audioPlayer.volume = e.target.value;
});

// Event Listener untuk slider kecepatan
playerSpeedSlider.addEventListener("input", (e) => {
  audioPlayer.playbackRate = parseFloat(e.target.value);
  currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});

playerShuffleBtn.addEventListener("click", () => {
  isShuffle = !isShuffle;
  playerShuffleBtn.classList.toggle("active-feature", isShuffle);
  console.log("Shuffle: " + isShuffle);
});

playerRepeatBtn.addEventListener("click", () => {
  repeatMode = (repeatMode + 1) % 3;
  updateRepeatButtonUI();
  console.log("Repeat Mode: " + repeatMode);
});

function updateRepeatButtonUI() {
  playerRepeatBtn.classList.remove("active-feature");
  audioPlayer.loop = false;

  if (repeatMode === 0) {
    playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
  } else if (repeatMode === 1) {
    playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
    playerRepeatBtn.classList.add("active-feature");
    audioPlayer.loop = true;
  } else {
    playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    playerRepeatBtn.classList.add("active-feature");
  }
}

playerPlayPauseBtn.addEventListener("click", () => {
  if (isPlaying) {
    pauseTrack();
  } else {
    playTrack();
  }
});
playerPrevBtn.addEventListener("click", prevTrack);
playerNextBtn.addEventListener("click", nextTrackLogic);

audioPlayer.addEventListener("ended", () => {
  if (repeatMode === 1) {
    // Handled by audio.loop = true
  } else {
    nextTrack();
  }
});

// Event Listeners untuk tombol navigasi
backToHomeFromDetailBtn.addEventListener("click", showHomePage); // Dari halaman detail ke home
backToHomeBtn.addEventListener("click", showHomePage); // Dari halaman player ke home

// Event Listener untuk tombol play dari halaman detail (jika Anda ingin menggunakannya)
playFromDetailBtn.addEventListener("click", () => {
  loadSong(songs[currentSongIndex]);
  playTrack();
  showPlayerPage();
});

// --- Initialization ---
function init() {
  console.log("Initializing..."); // Tambahkan log untuk inisialisasi
  console.log("Songs array length:", songs.length); // Periksa jumlah lagu
  console.log("songListElement:", songListElement); // Cek apakah songListElement ditemukan

  renderSongList(); // Ini yang merender daftar lagu

  if (songs.length > 0) {
    loadSong(songs[currentSongIndex]);
  } else {
    // Ini akan ditampilkan jika array songs kosong
    albumArtPlayer.src =
      "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Musik";
    playerTrackTitle.textContent = "Tidak Ada Lagu";
    playerTrackArtist.textContent = "Tambahkan lagu";
    lyricsContainer.innerHTML = "<p>Silakan tambahkan lagu dari daftar.</p>";
  }
  audioPlayer.volume = playerVolumeSlider.value;
  audioPlayer.playbackRate = playerSpeedSlider.value; // Atur kecepatan awal
  currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`; // Perbarui tampilan kecepatan
  updatePlayPauseIcon();
  updateRepeatButtonUI();
  showHomePage(); // Mulai dari halaman daftar lagu
  console.log("Initialization complete."); // Log selesai inisialisasi
}

init();
