import "./index.css"

const BannerRoute=(props)=>{
    console.log("banner")
    return <div className="banner">
        <p>{`Home > Blog >${props.name}`}</p>
        <h1>{props.name}</h1>
    </div>
}

export default BannerRoute