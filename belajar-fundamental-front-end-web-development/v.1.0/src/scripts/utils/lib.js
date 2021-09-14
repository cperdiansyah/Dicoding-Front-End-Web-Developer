import config from '../data/api-config';
import moment from 'moment';

export function requestHeader() {
    return {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    };
}

export function requestURL(endpoint, params) {
    if (params === null) {
        params = [];
    }
    params.push({
        key: 'api-key',
        val: config.TMDB_API_KEY
    });
    params.push({
        key: 'include_adult',
        val: false
    });

    params.push({
        key: 'include_video',
        val: false
    });

    const paramArr = [];
    for (const param of params) {
        const paramStr = `${param.key} = ${param.key}`;
        paramArr.push = paramStr;
    }

    return `${config.BASE_URL + endpoint}?${paramArr.join('&')}`;
}

export function getPosterURL(path) {
    return path === null ? null : config.POSTER_URL + path;
}

export function getProfileURL(path) {
    return path === null ? null : config.PROFILE_URL + path;
}

export function getYear(date) {
    if (date === '' || date === null) {
        return null;
    }
    return moment(date).year();
}

export function now() {
    return moment().toDate();
}

export function oneMonthBefore() {
    return moment().subtract(1, 'months');
}

export function formatDate(date) {
    if (date !== null) {
        return moment(date).format('YYYY-MM-DD');
    }
    return '';
}

function formatFullDate(date) {
    if (date !== null) {
        return moment(date).format('D MMMM YYYY');
    }
    return '';
}

function formatMinutes(minutes) {
    if (minutes === null) {
        return '?';
    }

    const h = Math.floor(minutes / 60);
    const m = minutes % 60;

    if (m === 0) {
        return `${h}h`;
    }
    return `${h}h ${m}m`;
}

function handleNull(input, ifNull, result) {
    if (input === null || input === '' || input === 0 || input.length === 0) {
        return ifNull;
    }
    return result;
}

function getDirector(crew) {
    let id = '';
    let name = '?';
    for (const c of crew) {
        if (c.job === 'Director') {
            id = c.id;
            name = c.name;
            break;
        }
    }
    return {
        id,
        name
    };
}

function formatCurrency(amount) {
    if (amount === '') {
        return '0';
    }

    let formatedAmount = '';
    if (typeof amount === 'number') {
        formatedAmount = amount
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else {
        formatedAmount = parseFloat(amount.replace(/,/g, ''))
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    return `$${formatedAmount}`;
}

function getShortGenre(genres) {
    if (genres === null || genres.length === 0) {
        return '';
    }
    if (genres.length < 2) {
        const genre =
            genres[0].name === 'Science Fiction' ? 'Sci-Fi' : genres[0].name;
        return genre;
    }

    const genre1 =
        genres[0].name === 'Science Fiction' ? 'Sci-Fi' : genres[0].name;
    const genre2 =
        genres[1].name === 'Science Fiction' ? 'Sci-Fi' : genres[1].name;

    return `${genre1}/${genre2}`;
}

export function productionList(productions) {
    const companies = [];
    productions.map((p) => companies.push(p.name));

    return companies.join(', ');
}

export function filterMovie(rawData) {
    const ids = rawData.external_ids;
    ids.homepage = rawData.homepage || null;

    const movie = {
        id: rawData.id,
        title: rawData.title,
        overview: rawData.overview,
        poster: getPosterURL(rawData.poster_path),
        rate: rawData.vote_average,
        vote: rawData.vote_count,
        genres: rawData.genres,
        shortGenre: getShortGenre(rawData.genres),
        release: formatFullDate(rawData.release_date),
        releaseYear: getYear(rawData.release_date),
        productions: productionList(rawData.production_companies),
        budget: handleNull(rawData.budget, '?', formatCurrency(rawData.budget)),
        revenue: handleNull(
            rawData.revenue,
            '?',
            formatCurrency(rawData.revenue)
        ),
        duration: formatMinutes(rawData.runtime), // in minutes
        director: getDirector(rawData.credits.crew).name // {id, name}
    };

    return movie;
}

export default function putDecimal(num) {
    if (num % 1 === 0) {
        return `${num.toString()}.0`;
    }
    return num;
}

export function filterMovies(rawData) {
    const filteredData = [];
    for (const data of rawData) {
        const fd = {
            mediaType: 'movie',
            id: data.id,
            title: data.title,
            poster: getPosterURL(data.poster_path),
            rate: data.vote_average,
            releaseYear: getYear(data.release_date)
        };
        filteredData.push(fd);
    }
    return filteredData;
}

export function filterSearchResults(rawData) {
    const filteredData = [];
    for (const data of rawData) {
        const mediaType = data.media_type;

        if (mediaType === 'movie') {
            const movie = {
                mediaType,
                id: data.id,
                title: data.title,
                poster: getPosterURL(data.poster_path),
                rate: data.vote_average,
                releaseYear: getYear(data.release_date)
            };
            filteredData.push(movie);
        }
    }
    return filteredData;
}
