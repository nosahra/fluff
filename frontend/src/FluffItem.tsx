function FluffItem(props:any) {
    return (
        <img src={props.image} className={`flex min-w-30 max-w-80 rounded-lg border-5 ${props.rank}`}/>
    );
}

export default FluffItem