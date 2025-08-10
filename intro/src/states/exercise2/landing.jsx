 function Landing({user,store}){

    const hottestItem = store.find(product => product.hottest);
    return(
        <>
        <div>Welcome {user}, the hottest item is {hottestItem.item} for ${hottestItem.price}</div>
        </>
    )
}

export default Landing;