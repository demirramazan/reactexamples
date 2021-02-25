export const challengeResultReducer = (state, action) => {
    switch (action.type) {
        case'ADD_RESULT':
            let newResult = {
                ...action.result
            }
            return {
                ...state,
                results: [...state, newResult]
            }
        case 'RESULT_LIST':
            return [...state]
        default:
            break;
    }
}