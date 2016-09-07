import {Map, Stack} from 'immutable';
import React from 'react';

export const host = "http://localhost:8888/";

export const clientFieldsMap = Map(
    {
        "firstName": {
            title: "Имя",
            description: <div>Введите имя клиента, это обязательное поле</div>
        },
        "lastName": {
            title: "Фамилия",
            description: <div>Введите фамилию клиента, это обязательное поле</div>
        },
        "companyName": {
            title: "Компания",
            description: <div>Это обязательное поле</div>
        },
        "address": {
            title: "Адрес",
            description: <div></div>
        },
        "phone": {
            title: "Телефона",
            description: <div>Это обязательное поле</div>
        },
        "email": {
            title: "E-mail",
            description: <div></div>
        },
        "discountService": {
            title: "Скидка (работы)",
            description: <div></div>
        },
        "discountMaterial": {
            title: "Скидка (материалы)",
            description: <div></div>
        },
        "type": {
            title: "Тип",
            description: <div>Это обязательное поле</div>
        },
        "note": {
            title: "Примечание",
            description: <div></div>
        }
    }
);

export const clientRequiredFieldList = Stack(['firstName', 'phone', 'type']);

export const clientFieldList = Stack(['firstName', 'lastName', 'companyName', 'address', 'phone', 'email', 'discountService', 'discountMaterial', 'type', 'note']);
