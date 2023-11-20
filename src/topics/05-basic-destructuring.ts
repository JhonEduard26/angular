interface AudioPlayer {
  audioVolume: number
  songDuration: number
  song: string
  details: Details
}

interface Details {
  author: string
  year: number
}

const audioPlayer: AudioPlayer = {
  audioVolume: 70,
  songDuration: 44,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015,
  },
}

const { song, songDuration, details: { author } } = audioPlayer

// console.log({ song })
// console.log({ duration: songDuration })
// console.log({ author })


const [, , trunks = 'Not found']: string[] =['Gokú', 'Vegetta', 'Trunks'];

console.log(trunks);


export { };
