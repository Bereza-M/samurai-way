import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export function Profile() {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'
                    alt='back'/>
            </div>
            <div>
                ava+description
            </div>
           <MyPosts/>
        </div>
    );
}