
//Finds the image in files and returns it
export default function GetImage({imgSrc}:{imgSrc: string}){
    return(
        <>
        <img src={imgSrc} alt="car image" />
</>
    )
}