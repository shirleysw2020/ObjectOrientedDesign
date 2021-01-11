/*
clarify questions:
does the jukebox play mp3, cd?
do we insert cds or just add songs kind of like itunes and spotify?
are there albums?
*/

class Jukebox {
  constructor(cdplayer, user, cdCollection, songSelector) {
    - CdPlayer
    - user = user //string
    - cdCollection = new Set()
  }
  - set user()
  -  getCurrrentSong() {songSelector.getCurrentSong()}
}

class CDPlayer {
  constructor(cd, playlist) {
    //one of cd and playlist can be null
    - playlist
    - cd
  }
    - set cd()
    - get cd()
    - set playlist()
    - get playlist()
    - playSong(song) //either play song from CD or from playlist
}

class Playlist {
  constructor() {
    - queue = [] //list of strs
  }
    - addSongToQueue(song) //?
    - getNextSongtoPlay() {get first song in queue}
}

class SongSelector { //manage songs
  constructor() {
  }
    - getCurrentSong() //access the queue in playlist and return the first song
    - browseSongs() //add to queue
      {
        var cds = browsCDs();
        var songs = [];
        for (var cd in cds) {
            for (var song in cd.songs) {
              songs.push(song)
            }
        }
      }
    - browseCDs() {
      var cds = db.getCDs();
      return cds;
    }
}

class CD {
  constructor(id, artist, songs) {
    - id  //sequential
    - artist //string
    - songs = [] //list of songs(strings)
  }
    - get songs() //return list of songs
    - get artist() //return artist
    - addToCdCollection()
}

class Song {
  constructor(id, cd(can be null), artist, title, length) {
    - id //sequential
    - CD //can be null
    - artist //str
    - title //str
    - length
  }
  //get id, get cd, get title, get artist
}

class User {
  constructor(id, name) {
    - id //uuid
    - name
  }
    - set id()
    - get id()
    - set name()
    - get name()
    - get user() //return this
    - addUser(id, name)
}