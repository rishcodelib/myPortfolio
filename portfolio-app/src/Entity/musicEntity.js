// 


class MusicEntity {
  static data = {
    projects: [
      {
        key: 1,
        projectName: "Ilhai",
        alias: "@RishhiiiMusic",
        description: "abcde",
        ytEmbeddedLink: "<iframe width='100%' height='100%' src='https://www.youtube.com/embed/AuSWbsgJzrQ?si=HTQndN8Jbdhl9nLF&amp;start=3' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>",
        liveUrl: "https://youtu.be/AuSWbsgJzrQ?si=8o7nsyjxNfNJLgWl",
        tag: ["music", "guitar", "drum", "band"]
      },
      {
        key: 2,
        projectName: "Nadaan Parindey",
        alias: "@RishhiiiMusic",
        description: "abcde",
        ytEmbeddedLink: "<iframe width='100%' height='100%' src='https://www.youtube.com/embed/pLgfnnsvCxg?si=BZKaf1LCYOerba1L' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>",
        liveUrl: null,
        tag: ["music", "guitar", "drum", "band"]
      },
      {
        key: 3,
        projectName: "Teaser RockOn",
        alias: "@RishhiiiMusic",
        description: "abcde",
        ytEmbeddedLink: "<iframe width='100%' height='100%' src='https://www.youtube.com/embed/OfcZVyso1c0?si=Im2gnKpCTKgqehZE' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>",
        liveUrl: null,
        tag: ["music", "drum", "band"]
      },
      {
        key: 4,
        projectName: "Drum Teaser",
        alias: "@RishhiiiMusic",
        description: "abcde",
        ytEmbeddedLink: "<iframe width='100%' height='100%' src='https://www.youtube.com/embed/edINhpLmfys?si=P5dLTGfMsv36mhrB' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>",
        liveUrl: null,
        tag: ["music", "drum", "band"]
      }

    ]
  };

  static getMusicVideos() {
    return this.data.projects;
  }
}

export default MusicEntity;