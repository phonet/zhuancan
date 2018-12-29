export default {
    namespace: "index",
    state: {
        indexData: {}
    },

    effects: {
        * getIndexAction({payload}, {call, put}) {
            console.log(payload);
        },
    },

    reducers: {
        save(state, {payload}) {
            return {...state, ...payload};
        },

        getIndexResult(state, {payload}) {
            return {
                ...state,
                indexData: payload
            };
        }
    },

};
