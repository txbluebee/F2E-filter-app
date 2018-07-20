import _ from "lodash";
import faker from "faker";
import cuid from 'cuid';
import moment from "moment";
import { createReducer } from '../../app/common/util/reducerUtil';


const initialState = _.times(6, () => ({
    id: cuid(),
    title: faker.company.companyName(),
    description: faker.lorem.paragraphs(),
    image: faker.image.avatar(),
    location: faker.address.city(),
    authur: faker.name.findName(),
    category: faker.commerce.department(),
    date: moment(faker.date.future()).calendar()
  }));


  export default createReducer(initialState, {})