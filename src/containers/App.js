//Como se va a trabajar con estados y ciclos de vidas en las funciones se  importan las funciones useState y useEffect
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from  '../components/Search'
import Categories from '../components/Categories';
import Carousel from  '../components/Carousel';
import CarouselItem from  '../components/CarouselItem';
import Footer from  '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

//const API = 'http://localhost:3000/initalState'

const API = 'https://rickandmortyapi.com/api/character'

const App = () => {
    const initialState = useInitialState(API);
    return initialState.length === 0 ? <h1>Loading...</h1> : (
        <div className="App">
            <Header />
            <Search />

            {initialState.results.length > 0 &&
                <Categories title="Personajes de Ricky And Morty">
                <Carousel>
                    {initialState.results.map(item =>
                        <CarouselItem key={item.id} {...item}/>
                    )}
                </Carousel>
                </Categories>
            }

           {/*  <Categories title="Tendencias">
                <Carousel>
                    {initialState.results.map(item =>
                        <CarouselItem key={item.id} {...item}/>
                    )}
                </Carousel>
            </Categories> */}


            {/* <Categories title="Hecho para ti">
            <Carousel>
                    {initialState.results.map(item =>
                        <CarouselItem key={item.id} {...item}/>
                    )}
                </Carousel>
            </Categories> */}

            <Footer />
        </div>
    )
    };

export default App;