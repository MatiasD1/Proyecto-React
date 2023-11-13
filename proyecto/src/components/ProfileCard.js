

function ProfileCard(props){// El parametro puede ser cualquier cosa

    const {titulo, arroba, img} = props; 
    
    return(
        <div className="card">
            <div className="card-img">
                <figure className="image is-1by1">
                    <img src={img}/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <h3 className="title is-4">titulo: {props.titulo}</h3>
                    <p className="subtitle is-4">{props.arroba}</p>
                </div>
                
            </div>
            
        </div>
    )
}

export default ProfileCard;