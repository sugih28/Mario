export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorName:'Mikal',
            authorId: 4234,
            createdAt: new Date(),
        }).then(() => {
            dispatch({type: 'ADD_PROJECT', project})
        }).catch((err) => {
            dispatch({type: 'ADD_PROJECT_ERR', err})
        })

    }
}