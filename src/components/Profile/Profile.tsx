import React from 'react';
import s from './Profile.module.css';

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
            <div>
                My posts
                <div>
                    New posts
                </div>
                <div className='posts'>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}