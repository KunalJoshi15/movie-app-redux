import React,{ useEffect } from 'react'
import { useDispatch } from 'react-redux'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/MovieApiKey' 
import { addMovies } from '../../features/movies/movieSlice'

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const movieText = "Pirates"
        const fetchMovies = async()=>{
            const response = await movieApi.get(`?i=tt3896198&apiKey=${APIKey}&s=${movieText}&type=movie`)
            .catch((err)=>{
                console.log(err);
            })
            console.log(response);
            dispatch(addMovies(response.data))
        }
        fetchMovies();
    }, [])
    return (
        <>
            <div className="banner-img">
               <MovieListing/> 
            </div>
        </>
    )
}

export default Home
