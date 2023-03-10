const catData = [
  {
    name: "boots",
    image:
      "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg",
    clicks: 6,
    nicknames: "kitty, mittens",
  },
  {
    name: "kiddos",
    image:
      "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg",
    clicks: 4,
    nicknames: "kiddy, kaddy",
  },
  {
    name: "loona",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/800px-Cat03.jpg",
    clicks: 25,
    nicknames: "loony, lanny",
  },
  {
    name: "chinni",
    image:
      "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782__340.jpg",
    clicks: 80,
    nicknames: "chinny",
  },
  {
    name: "tabby",
    image:
      "https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg",
    clicks: 17,
    nicknames: "tobby, tibby",
  },
];

const activeCat = {
  name: "boots",
  image: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg",
  clicks: 6,
  nicknames: "kitty, mittens",
};

export const preloadedData = { cats: catData, activeCat: activeCat };
