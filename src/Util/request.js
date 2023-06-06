import RequestError from 'Error/RequestError';

export default function (beforeRequest, afterRequest) {
    function request(url, options) {
        beforeRequest?.();

        const requestOptions = {
            headers: {'Content-Type': 'application/json'},
            ...options,
        };
        return fetch(BASE_URL + url, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new RequestError(response);
                }

                return response.json();
            })
            .finally(() => afterRequest?.())
        ;
    }

    function get(url) {
        return request(url, {method: 'GET'});
    }

    function post(url, data) {
        return request(url, {
            body: JSON.stringify(data),
            method: 'POST',
        });
    }

    function put(url, data) {
        return request(url, {
            body: JSON.stringify(data),
            method: 'PUT',
        });
    }

    function delete_(url) {
        return request(url, {method: 'DELETE'});
    }

    return {
        get,
        post,
        put,
        delete: delete_,
    };
}
