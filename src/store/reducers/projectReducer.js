const initState = {
    projects:[
        {id:1, title:'Find Some Ex', content:'this is a Content of Find Some Ex Post'},
        {id:2, title:'Find Some Golf', content:'this is a Content of Find Some Ex Golf'},
        {id:3, title:'Find Some Wolf', content:'this is a Content of Find Some Ex Wolf'},
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_PROJECT':
            console.log('Project Created', action.project)
            return state;
            break;
        case 'ADD_PROJECT_ERR':
            console.log('Project Error', action.err)
            return state;
            break;

        default:
            return state;
            break;
    }
}

export default projectReducer;