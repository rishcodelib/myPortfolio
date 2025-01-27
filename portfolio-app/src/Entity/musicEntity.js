// 


class MusicEntity {
  static data = {
    projects: [
      {
        key: 1,
        projectName: "Ilhai | Teaser | Drum Cover",
        alias: "@RishhiiiMusic",
        shortDesc: "Teaser recording in college cultural fest, that showcase my drumming abilities and skills. This teaser features powerful drum beats and rhythms, designed to captivate and energize the audience.",
        description: "This teaser was recorded during my performance at the college cultural event 'Excelsior' during my 2nd year at University Institute of Engineering and Technology, Kurukshetra University, Haryana, INDIA. I performed in the Battle of Bands as a drummer, playing the song 'Ilahi' from the movie 'Yeh Jawaani Hai Deewani' using a Mapex Tornado Jet Black 5-piece drum kit and Zildjian cymbals. This short teaser was recorded to promote the fest, showcasing the powerful instrumental riffs and energetic drumming.",
        ytEmbeddedLink: "<iframe width='100%' height='400px' src='https://www.youtube.com/embed/AuSWbsgJzrQ?si=HTQndN8Jbdhl9nLF&amp;start=3' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>",
        liveUrl: "https://youtu.be/AuSWbsgJzrQ?si=8o7nsyjxNfNJLgWl",
        tag: ["<i class='fa-solid fa-music'></i> music", "<i class='fa-solid fa-guitar'></i> guitar", "<i class='fa-solid fa-drum'></i> drum", "<i class='fa-solid fa-users-rays'></i> band"]
      },
      {
        key: 2,
        projectName: "Nadaan Parindey",
        alias: "@RishhiiiMusic",
        shortDesc: "A soulful rendition of the popular Bollywood song from the movie 'Rockstar', featuring a melodious guitar solo and captivating drum beats. This performance showcases the seamless interplay between the guitar and drums, creating a harmonious and engaging musical experience.",
        description: "Nadaan Parindey, this was taking place during my 3rd year at University Institute of Engineering and Technology, Kurukshetra University, Haryana, INDIA. I performed in the Battle of Bands as a drummer, playing the song 'Nadaan Parindey' from the movie 'Rockstar' using a Mapex Tornado Jet Black 5-piece drum kit and Zildjian cymbals. This was one of song performed during that event by us.",
        ytEmbeddedLink: "<iframe width='100%' height='400px' src='https://www.youtube.com/embed/pLgfnnsvCxg?si=BZKaf1LCYOerba1L' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>",
        liveUrl: null,
        tag: [" <i class='fa-solid fa-music'></i> music", "<i class='fa-solid fa-guitar'></i> guitar", "<i class='fa-solid fa-drum'></i> drum", "<i class='fa-solid fa-users-rays'></i> band"]
      },
      {
        key: 3,
        projectName: "Teaser RockOn",
        alias: "@RishhiiiMusic",
        shortDesc: "An electrifying jam session featuring dynamic interplay between drums and electric guitar. This performance showcases powerful rhythms and intricate guitar solos, creating an energetic and captivating musical experience.",
        description: "A captivating drum teaser from my performance at the college cultural event 'Excelsior' during my final year at University Institute of Engineering and Technology, Kurukshetra University, Haryana, INDIA. I performed in the Battle of Bands as a drummer, playing the song 'Pichle 7 Dino Mein' from the movie 'Rock On' using a Mapex Tornado Jet Black 5-piece drum kit and Zildjian cymbals. This short teaser was recorded to promote the fest, showcasing the powerful instrumental riffs and energetic drumming.",
        ytEmbeddedLink: "<iframe width='100%' height='400px' src='https://www.youtube.com/embed/OfcZVyso1c0?si=Im2gnKpCTKgqehZE' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>",
        liveUrl: null,
        tag: ["<i class='fa-solid fa-music'></i> music", "<i class='fa-solid fa-drum'></i> drum", "<i class='fa-solid fa-guitar'></i> guitar", "<i class='fa-solid fa-microphone-lines'></i> vocals"]
      },
      {
        key: 4,
        projectName: "Drum Teaser",
        alias: "@RishhiiiMusic",
        shortDesc: "An exciting drum teaser showcasing powerful beats and rhythms, designed to captivate and energize the audience.",
        description: "A thrilling drum teaser from my performance at the college cultural event 'Excelsior' during my 2nd year at University Institute of Engineering and Technology, Kurukshetra University, Haryana, INDIA. I performed in the Battle of Bands as a drummer, playing the song 'Ilahi' from the movie 'Yeh Jawaani Hai Deewani' using a Mapex Tornado Jet Black 5-piece drum kit and Zildjian cymbals.",
        ytEmbeddedLink: "<iframe width='100%' height='400px' src='https://www.youtube.com/embed/edINhpLmfys?si=P5dLTGfMsv36mhrB' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>",
        liveUrl: null,
        tag: [" <i class='fa-solid fa-music'></i> music", "<i class='fa-solid fa-drum'></i> drum", "<i class='fa-solid fa-users-rays'></i> band", "<i class='fa-solid fa-microphone-lines'></i> vocals"]
      }

    ]
  };

  static getMusicVideos() {
    return this.data.projects;
  }
}

export default MusicEntity;