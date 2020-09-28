import axios, {AxiosResponse} from 'axios';
import {ADDRESS_BOOK_BASE_URL, QUERY_PARAMETERS} from 'src/utils/api';
import {AddressBookResponse} from 'src/models/addressBook';

const addressBookAxios = axios.create({
  baseURL: `${ADDRESS_BOOK_BASE_URL}`,
});

export interface AddressBookGet {
  results: number;
  seed: string;
  inc: string;
}

export const addressBookGet = ({results, seed, inc}: AddressBookGet) =>
  addressBookAxios
    .get(
      `?${QUERY_PARAMETERS?.resultCount}=${results}&${QUERY_PARAMETERS.seedType}=${seed}&${QUERY_PARAMETERS.fieldsToInclude}=${inc}`,
    )
    .then((response: AxiosResponse<AddressBookResponse>) => {
      const {data} = response;
      return data;
    });
