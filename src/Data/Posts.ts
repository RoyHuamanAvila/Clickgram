import { PostProps } from "../interfaces";

export const Posts: PostProps[] = [
  {
    owner: {
      name: "kfc.es",
      picture:
        "https://i.pinimg.com/originals/ee/fd/cf/eefdcf8f23c277bfac155152c6ab3a20.jpg",
    },
    description: "Compaltan 😡",
    contents: [
      {
        url: "https://vidabohemia.net/wp-content/uploads/2021/07/kv-bucket-1024x1024.jpg",
        type: "img",
      },
    ],
    likeCount: 481231,
  },
  {
    owner: {
      name: "kingdomhearts",
      picture: "https://pbs.twimg.com/media/Fh41lAsX0AAYgIV.jpg",
    },
    description: "New kingdom hearts videogame in 2024!!",
    contents: [
      {
        url: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2022/04/kingdom-hearts-4-2671077.jpg?itok=FV8OSkhF",
        type: "img",
      },
      {
        url: "https://media.vandal.net/i/1200x630/4-2022/202242811193322_1.jpg",
        type: "img",
      },
      {
        url: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/2022_04_10_09_50_40_29_Kingdom_Hearts_4_Reveal_Trailer_YouTube_%E2%80%94_Mozilla_Firefox_1.png",
        type: "img",
      },
    ],
    likeCount: 500000,
  },
];
