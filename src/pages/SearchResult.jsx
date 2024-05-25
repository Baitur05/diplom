import React from 'react';
import { useLocation } from 'react-router-dom';
import Sdata from '../components/shops/Sdata';
import Ddata from "../components/discount/Ddata"
import Data from "../components/Data"

const SearchResult = () => {
    const location = useLocation()
    const myparam = location.state.params;

    const [allData, setAllData] = React.useState([...Sdata.shopItems, ...Ddata, ...Data.productItems])

    React.useEffect(() => {
        filterData()
    }, [myparam])

    const filterData = () => {
        const results = allData.filter((data) => data.name.toLowerCase().includes(myparam));
        setAllData(results)
        console.log(results);
    }

    return (
        <div className="w-[85%] m-auto py-5">
            <h2 className='text-[25px] font-semibold mb-4'>Результаты поиска</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: "repeat(4, 250px)",
                justifyContent: 'space-between'
            }}>
                {allData.map((item, index) => {
                    return (
                        <div className='bg-white h-[300px] flex flex-col items-center'>
                            <img src={item.cover} alt="" /> 
                            <p>{item.name}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    );
}

export default SearchResult;
