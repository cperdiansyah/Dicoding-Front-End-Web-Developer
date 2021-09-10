import '../../components/navbar/navbar';
import '../../components/movie-list';

import endpoint from '../../data/api-config';
import * as config from '../../data/api-config';
import ApiRepository from '../../data/api-repository';

const main = () => {
    const urlParams = new URLSearchParams(window.location.search).get('movie');
    const endpointDetails = `${endpoint.details}${urlParams}${config.apiKey}&language=en-US`;

};

export default main;
