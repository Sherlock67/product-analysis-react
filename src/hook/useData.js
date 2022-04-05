import { useEffect, useState } from "react"

const useData = () => {
    const [datas,setData] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data =>setData(data));
    },[])
    return [datas,setData] ;
}
export default useData;
