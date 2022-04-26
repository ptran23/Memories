//TO HANDLE ALL LOGIC from fetching all posts
export default (posts =[],action) => {   // posts must always return something, in this case an array
    switch(action.type){
        case 'FETCH_ALL' :
            return action.payload;
        case 'CREATE':
            return [...posts,action.payload];
        default:
            return posts;
    }
}