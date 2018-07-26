import { createReducer } from "../../app/common/util/reducerUtil";
import { FETCH_SELECTED_LOCATION } from './eventConstants';

const Events = [
  {
    id: "cjk018vqv00003a5sjb3z6uvy",
    authur: 'Lily Howard',
    title: "Wilkinson, Lesch and Sanford",
    category: "culture",
    date: "01/18/2019",
    description:
      "Eligendi laudantium quam voluptatibus fugiat bLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat consequuntur quibusdam maiores incidunt cumque nam voluptatibus delectus iusto dicta ab dolore, quia numquam, soluta culpa ullam illo odit. Voluptates, quam!land…tempora voluptas molestiae praesentium iusto sit.",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/linkibol/128.jpg",
    location: "Seattle",
  },
  {
    id: "cjk018vr300013a5sijzl1733",
    authur: 'David King',
    title: "Morissette - McKenzie",
    category: "history",
    date: "01/15/2019",
    description:
      "Fugit quasi doloremque debitis. Ipsam sit expedita… Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat consequuntur quibusdam maiores incidunt cumque nam voluptatibus delectus iusto dicta ab dolore, quia numquam, soluta culpa ullam illo odit. Voluptates, quam!nulla enim quia provident. Ea non neque aperiam.",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/_dwite_/128.jpg",
    location: "Lynnwood",
  },
  {
    id: "cjk018vr400023a5s99sricuu",
    authur: 'Lily Howard',
    title: "Smitham Group",
    category: "social",
    date: "07/18/2019",
    description:
      "Voluptatem consectetur ut Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat consequuntur quibusdam maiores incidunt cumque nam voluptatibus delectus iusto dicta ab dolore, quia numquam, soluta culpa ullam illo odit. Voluptates, quam!optio rem recusandae dol…us laudantium quia vel voluptas voluptas aliquid.",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/imcoding/128.jpg",
    location: "Seattle",
  },
  {
    id: "cjk018vr400033a5s873ln0ll",
    authur: 'David King',
    title: "Keeling, Murray and Kiehn",
    category: "culture",
    date: "07/01/2018",
    description:
      "Aut consequatur placeat illo voluptates. Et recusa…lum et Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat consequuntur quibusdam maiores incidunt cumque nam voluptatibus delectus iusto dicta ab dolore, quia numquam, soluta culpa ullam illo odit. Voluptates, quam! eligendi repellendus doloribus atque quod.",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/herkulano/128.jpg",
    location: "Edmonds",
  },
  {
    id: "cjk018vr500043a5spk5axk1y",
    authur: 'Trader Joe',
    title: "Block - Jerde",
    category: "social",
    date: "07/30/2018",
    description:
      "A aut qui ipsa reprehenderit sint pariatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat consequuntur quibusdam maiores incidunt cumque nam voluptatibus delectus iusto dicta ab dolore, quia numquam, soluta culpa ullam illo odit. Voluptates, quam! Perfer…uptatem quis. Molestiae nihil doloribus adipisci.",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/tanveerrao/128.jpg",
    location: "Kent",
  },
  {
    id: "cjk018vr600053a5se0n809i1",
    authur: 'Lily Howard',
    title: "McGlynn - Little",
    category: "entertainment",
    date: "10/01/2018",
    description:
      "Est non nihil tempore et facere quis praesenLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat consequuntur quibusdam maiores incidunt cumque nam voluptatibus delectus iusto dicta ab dolore, quia numquam, soluta culpa ullam illo odit. Voluptates, quam!tium v… veritatis nemo consequatur fugit non aut ex non.",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/nastya_mane/128.jpg",
    location: "Bellevue",
  },
  {
    id: "cjk018vr700063a5s0cagwc2h",
    authur: 'David King',
    title: "Ernser and Sons",
    category: "entertainment",
    date: "10/15/2018",
    description:
      "Aut porro vel rem ipsam et est omnis. DelectLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat consequuntur quibusdam maiores incidunt cumque nam voluptatibus delectus iusto dicta ab dolore, quia numquam, soluta culpa ullam illo odit. Voluptates, quam!us nob…ni non et dolorem asperiores eos. Qui iure ipsam.",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/eugeneeweb/128.jpg",
    location: "Bellevue",
  },
  {
    id: "cjk018vr800073a5sfftlkv5f",
    authur: 'Lily Howard',
    title: "Baumbach and Sons",
    category: "culture",
    date: "10/01/2018",
    description:
      "Et ducimus et esse nulla id explicabo animi ut par… Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat consequuntur quibusdam maiores incidunt cumque nam voluptatibus delectus iusto dicta ab dolore, quia numquam, soluta culpa ullam illo odit. Voluptates, quam!doloribus. Sit sunt architecto sunt quis et quo.",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/swaplord/128.jpg",
    location: "Lynnwood",
  },
  {
    id: "cjk018vr800083a5swqqnxhpc",
    authur: 'David King',
    title: "Walter, Hessel and Durgan",
    category: "entertainment",
    date: "10/12/2018",
    description:
      "Aperiam dignissimos eveniet architecto maioresLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat consequuntur quibusdam maiores incidunt cumque nam voluptatibus delectus iusto dicta ab dolore, quia numquam, soluta culpa ullam illo odit. Voluptates, quam! tem…uta aut. Natus ex est. Distinctio saepe pariatur.",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/tgerken/128.jpg",
    location: "Edmonds",
  },
  {
    id: "cjk018vr900093a5sl69da79x",
    authur: 'Lily Howard',
    title: "Jenkins - VonRueden",
    category: "business",
    date: "10/15/2018",
    description:
      "Voluptatum culpa et. Accusamus ut recLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat consequuntur quibusdam maiores incidunt cumque nam voluptatibus delectus iusto dicta ab dolore, quia numquam, soluta culpa ullam illo odit. Voluptates, quam!usandae. Fugi…bis. Sint rerum inventore est excepturi ut natus.",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/kkusaa/128.jpg",
    location: "Kirkland",
  }
];

const initialState = Events;


const fetchEventsByLocation = (state , payload) => {
  state = Events;
  return payload === 'all' ? state:[...state.filter( event => event.location === payload)]
}


// import _ from "lodash";
// import faker from "faker";
// import cuid from "cuid";
// import moment from "moment";

// const initialState = _.times(10, () => ({
//   id: cuid(),
//   title: faker.company.companyName(),
//   description: faker.lorem.paragraphs(),
//   image: faker.image.avatar(),
//   location: faker.address.city(),
//   authur: faker.name.findName(),
//   category: faker.commerce.department(),
//   date: moment(faker.date.future()).calendar()
// }));

export default createReducer(initialState, {
  [FETCH_SELECTED_LOCATION]: fetchEventsByLocation
});
