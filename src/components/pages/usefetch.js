import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (url, jwt) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    // console.log(url)
    // console.log(jwt)
    
    useEffect(() => {
        console.log('hi')
        // const abortCont = new AbortController();
        // setTimeout(() => {
        axios({
            method: "get",
            url: url,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,PATCH,OPTIONS",
                "Authorization": `Bearer ` + jwt
            }, data: null,

            mode: "cors",
        }).then((res) => {
            console.log(res.data)
            if (!res.ok) {
                throw Error('Could not fetch the data for that resource')
            } else {
                console.log(res.data)
                setData(res.data);
                setIsPending(false);
                setError(null);
            }
            // return res.json();
        }).catch((err => {
            if (err.name == 'AbortError') {
                console.log('fetch aborted');
            } else {
                setIsPending(false);
                setError(err.message);
            }
        }));
        // }, 2000);
        // return () => abortCont.abort;
    },[url]);
    // return { data, isPending, error }
}

export default useFetch