import React from 'react';
import s from './Post.module.css';

export function Post(props: any) {
    return (
        <div className={s.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXeIuKElSOTid6MF787c7UTMwFPgQa7oF1ew&usqp=CAU'
                alt='ava'/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    );
}