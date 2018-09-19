export const REQUEST_STATUS = {
    IDLE: 0,
    REQUEST: 1,
    SUCCESS: 2,
    FAILURE: 3
};

export const IRequestData = {
    status: REQUEST_STATUS.IDLE,
    data: null,
    error: null
};

export const isIdle = status => status === REQUEST_STATUS.IDLE;
export const isLoading = status => status === REQUEST_STATUS.REQUEST;
export const isSuccess = status => status === REQUEST_STATUS.SUCCESS;
export const isError = status => status === REQUEST_STATUS.FAILURE;
