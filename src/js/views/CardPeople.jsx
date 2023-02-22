import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';





export const CardPeople = ({ id, name, birth_year, gender, hair_color, height, mass, eye_color }) => {
    const { store, actions } = useContext(Context);
    const people = store.people;

    const urlImage = "https://starwars-visualguide.com/assets/img/characters/" + id + ".jpg";
    const handleOnErrorImg = (e) => {
        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    }


    return (
        <div className="col">
            <div className="card border-dark my-3 mx-2 text-bg-dark">
                <img alt="" src={urlImage} onError={handleOnErrorImg}></img>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Birth Year: {birth_year}</p>
                    <p className="card-text">Gender: {gender} </p>
                    <p className="card-text">Hair Color: {hair_color} </p>
                    <div className="d-flex justify-content-between">
                        <Link to={`/people/${id}`} className="btn btn-secondary" 
                            onClick={() => actions.getChar({ id: id, name: name, birth_year: birth_year, gender: gender, hair_color: hair_color, eye_color: eye_color, height: height, mass: mass })}>
                                Details
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}