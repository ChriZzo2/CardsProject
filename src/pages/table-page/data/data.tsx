type CurrentDataProps = {
    currentUpData: string
}



export const CurrentData = ({currentUpData}:CurrentDataProps) =>{
    const currentData = currentUpData
    const data = new Date(currentData) 
    const Data = data.toLocaleDateString("ru-RU") || <br/> 

    return <div>{Data}</div>
}