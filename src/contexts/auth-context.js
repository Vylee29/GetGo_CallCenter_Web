import React, { useState, useEffect } from 'react'
import { io } from 'socket.io-client';
const URL = 'http://localhost:3000';
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (user_info) => { },
    socket: null,
    listTrip: [],
    tripInfor: null,
    handleTripInfor: (trip) => { },
    handleListTrip: (id) => { },
})

export const AuthContextProvider = (props) => {
    const [socket, setSocket] = useState(null);
    const [listTrip, setListTrip] = useState([])
    const [tripInfor, setTripInfor] = useState(null)
    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('user')
        if (storedUserLoggedInInformation) {
            setIsLoggedIn(true)
        }
    }, [])
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    console.log('heeeloo')
    useEffect(() => {
        if (isLoggedIn) {
            // Đăng nhập thành công, thiết lập kết nối socket
            // const newSocket = io('http://localhost:3000'); // Thay đổi URL tới địa chỉ của server
            // setSocket(newSocket);
            const newSocket = io('http://localhost:3000'); // Thay đổi URL tới địa chỉ của server
            setSocket(newSocket);
            // Xử lý sự kiện khi kết nối thành công
            console.log('hehehe')
            newSocket.on('connect', () => {
                console.log('Socket connected');

                // Sau khi kết nối thành công, gửi sự kiện emit cho server
                newSocket.emit('callcenter-login');
                const user = JSON.parse(localStorage.getItem('user')) || {}
                console.log(user.type)
                console.log('user.type')
                if (user.type === "CallCenterS2") {
                    console.log('dddd');
                    newSocket.on('s2-trip', (data) => {
                        setListTrip(data)
                        setTripInfor(data[0])
                        console.log('data11111111')
                        console.log(data)
                    })
                    newSocket.on('s2-update-trip', (data) => {
                        const updatedItemList = [data, ...listTrip];
                        console.log(updatedItemList)
                        console.log('data11111111')

                        setListTrip(updatedItemList)
                        console.log('data11111111')
                        console.log(data)
                    })
                } else if (user.type === "CallCenterS3") {
                    newSocket.on('s3-trip', (data) => {
                        setListTrip(data)
                        setTripInfor(data[0])
                        console.log('data11111111')
                        console.log(data)
                    })
                    newSocket.on('s3-update-trip', (data) => {
                        const updatedItemList = [data, ...listTrip];
                        setListTrip(updatedItemList)
                        console.log('data11111111')
                        console.log(data)
                    })
                }
                props.setRender(!props.render)
            });

            // Xử lý sự kiện khi bị ngắt kết nối
            newSocket.on('disconnect', (e) => {
                console.log(e)
                console.log('Disconnected from server socket');
            });

            // Đảm bảo ngắt kết nối khi component bị hủy hoặc đăng xuất
            return () => {
                newSocket.disconnect();
            };
        }
    }, [isLoggedIn]);

    const logoutHandler = () => {
        localStorage.removeItem('user')
        setListTrip([])
        // Nav('/')
        setIsLoggedIn(false)
    }
    const loginHandler = (user_info) => {
        localStorage.setItem('user', JSON.stringify(user_info))
        setIsLoggedIn(true)
    }
    const handleListTrip = (id) => {
        const list = listTrip.filter(item => item.id !== id)
        setListTrip(list)
    }
    const handleTripInfor = (trip) => {
        setTripInfor(trip)
    }
    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler,
                socket: socket,
                listTrip: listTrip,
                handleListTrip: handleListTrip,
                tripInfor: tripInfor,
                handleTripInfor: handleTripInfor
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext
