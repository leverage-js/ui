export default class RequestError {
    status;

    constructor(response) {
        this.status = response.status;
    }
}