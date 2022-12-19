import create from 'zustand';

export default create((set, get) => ({
    requestCount: 0,

    hasActiveRequests: () => !!get().requestCount,

    incrementCount: () => set(
        state => ({
            requestCount: state.requestCount + 1,
        })
    ),

    decrementCount: () => set(
        state => ({
            requestCount: state.requestCount - 1,
        })
    ),
}));
