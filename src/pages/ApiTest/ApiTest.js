import s from './ApiTest.module.css';
import axios from "axios";
import {useEffect, useReducer} from "react";
import {initialState, reducer} from "../../reducer/reducer";
import {addServer, addUri, setData, setRequest} from "../../reducer/types";


export const ApiTest = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const {server, uri, request, data} = state;

    const serverHandler = (e) => {
        dispatch(addServer(e.target.value))
    };

    const uriHandler = (e) => {
        dispatch(addUri(e.target.value))
    };

    const requestHandler = () => {
        if (server && uri) {
            dispatch(setRequest(`${server}${uri}`))
        }
    };

    const onEnterHandler = (e) => {
        if (e.key === "Enter") {
            dispatch(setRequest(`${server}${uri}`))
        }
    }

    const clearData = () => {
        dispatch(setData(null))
        dispatch(setRequest(''))
    }

    useEffect(() => {
        async function getRequest() {
            if (request && server && uri) {
                try {
                    let response = await axios.get(request)
                    let data = response.data;
                    dispatch(setData(data));
                } catch (e) {
                    let data = "Произошла ошибка при запросе. Проверьте правильность написания" +
                        " запроса"
                    dispatch(setData(data));
                }
            }
        }

        getRequest()
        // eslint-disable-next-line
    }, [request])

    return (
        <div>
            <div className={s.formWrapper}>
                <input
                    type="text"
                    value={server}
                    onChange={serverHandler}
                    placeholder="Введите домен"
                />

                <button onClick={() => dispatch(addServer(''))}>Очистить сервер</button>
                <input
                    type="text"
                    value={uri}
                    onChange={uriHandler}
                    placeholder="Введите url api"
                    onKeyDown={onEnterHandler}
                />
                <button onClick={() => dispatch(addUri(''))}>Очистить тело запроса</button>
                <button
                    onClick={requestHandler}
                    className={s.green}
                >Отправить запрос
                </button>
            </div>
            <hr />
            <hr />
            <div className={s.content}>
                <button
                    onClick={clearData}
                >
                    Очистить результат
                </button>
                <br />
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        </div>
    );
};
