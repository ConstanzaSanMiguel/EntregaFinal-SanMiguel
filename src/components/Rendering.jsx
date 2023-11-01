import React from 'react'


const Rendering = () => {

    const [loading, setLoading] = useState(true)

    // mis productos/data
    const [elementos, setElementos] = useState([])

    useEffect(() => {

        setTimeout(() => {
            setElementos(["a", "b", "c"])
            setLoading(false)
        }, 5000)

    }, [])

    if(loading){
        return <Loader />
    }else{
        
    }

    return (
        <div>
            <h2>Elementos</h2>
            <ul>
                {
                    elementos.map((e)=>(
                        <li key={e} > {e} </li>
                    ))
                }
            </ul>
        </div>
    )
}


export default Rendering