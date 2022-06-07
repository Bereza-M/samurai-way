import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemProps = {
    name: string,
    id: string
}

export const DialogItem = (props: DialogItemProps) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id} >{props.name}</NavLink>
        </div>
    )
}

type MessageProps = {
    message: string
}

export const Message =(props: MessageProps) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Andrey" id="2"/>
                <DialogItem name="Sveta" id="3"/>
                <DialogItem name="Sasha" id="4"/>
                <DialogItem name="Victor" id="5"/>
                <DialogItem name="Valera" id="6"/>
            </div>

            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How is your IT-Kamasutra?"/>
                <Message message="Yo-Yo"/>
            </div>
        </div>

    )
}