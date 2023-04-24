import ItemCount  from "../ItemCount";
import ItemList from "../ItemList";
import React ,{useState,useEffect} from "react";
import Title from "../Title";


const modelos =[
    {id:1,image: 'img/s23.webp' , title: "S23 ultra"},
    {id:2,image: 'img/z.webp' , title: "Z Flip"},
    {id:3,image: 'img/m23.webp' , title: "M23"},
    {id:4,image: 'img/a53.webp' , title: "A53"},
];

export const ItemListContainer = ({texto}) => {
    const [data,setData]= useState([]);

    useEffect(()=> {
        const getData = new Promise (resolve=>{
            setTimeout(() => {
                resolve(modelos);
            },2000);
        });
        getData.then(res => setData(res));

    },[])

    const onAdd=(cantidad)=> {
        console.log(`Compaste ${cantidad} unidades`)
    }

    return (
        <>
                <Title greeting ={texto} />
                <ItemCount initial={1} stock ={5} onAdd= { onAdd} />
                <ItemList data ={data} />
        </>
    );
}

export default ItemListContainer;
