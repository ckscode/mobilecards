const Card=(props)=>{
    
    return(<div><img src={props.link}  height="300px" alt="New Phone"></img><br></br>
    <p class="badge bg-danger rounded-0">DEAL OF THE DAY</p>
    <p class="h5 text-danger">Up to {props.percentage}% off</p>
    <a href={props.link} class="h5 text-dark text-decoration-none  ">{props.modelName}</a></div>)
}
export default Card;