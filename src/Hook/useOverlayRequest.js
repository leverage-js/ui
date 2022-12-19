import request from 'Util/request';
import useRequestCount from 'Store/useRequestCount';

export default function () {
    const {incrementCount, decrementCount} = useRequestCount();

    return request(incrementCount, decrementCount);
}
