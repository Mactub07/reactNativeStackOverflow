export default store => next => action => {
    if (action.url) {
        let body;

        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        const method = action.method || 'GET';

        if (typeof action.payload === 'object') {
            body = JSON.stringify(action.payload);
        }

        const REQUEST = `${action.type}_REQUEST`;
        const SUCCESS = `${action.type}_SUCCESS`;
        const FAILURE = `${action.type}_FAILURE`;

        new Promise((resolve, reject) => {
            next({ ...action, type: REQUEST });

            setTimeout(
                () => reject({ ...action, type: FAILURE, error: action.timeoutError || 'Timeout' }),
                30000
            );

            fetch(action.url, { headers, body, method })
                .then(response => {
                    if (response.status !== 200) {
                        const error = new Error(response.statusText);
                        error.response = response;

                        throw error;
                    }

                    return response.json();
                })
                .then(payload => resolve({ ...action, type: SUCCESS, response: payload }))
                .catch(error => {
                    if (error && error.response) {
                        error.response.json()
                            .then(errorData => {
                                return reject({ ...action, error: errorData, type: FAILURE });
                            })
                            .catch(jsonParsingError => reject({ ...action, jsonParsingError, type: FAILURE }));
                    } else {
                        return reject({ ...action, error, type: FAILURE });
                    }
                });
        }).then(successAction => next(successAction)).catch(failureAction => next(failureAction));
    } else {
        next(action);
    }
};
