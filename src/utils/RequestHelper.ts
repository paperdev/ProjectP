const HEADERS = {
    'Content-Type': 'application/json'
};

const METHOD = {
    POST: 'post',
    GET: 'get'
};

const URL = 'http://localhost:7777';
const DEFAULT_KEY = 'paperdev.github.io';

const RequestHelper = async (key: string = DEFAULT_KEY) => {
    try {
        const result = await fetch(
            URL, 
            {
                method: METHOD.GET,
                headers: HEADERS
            }
        );
        console.log(' ===== result ===== ');
        console.log(result);
    } catch (err) {
        console.error(err);
    }
}

export default RequestHelper;