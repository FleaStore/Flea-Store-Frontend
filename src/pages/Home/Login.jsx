import React from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios'

const Login = () => {
    const [id, setId] = useState("")
    const [pwd, setPwd] = useState("")

    const emailHandeler = (event) => {
        setId(event.target.value)
    }

    const pwdHandler = (event) => {
        setPwd(event.target.value)
    }

    const buttonHandler = () => {
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
        let url = 'http://localhost:8080/auth/user/login'
        console.log("in")

        if(regex.test(id) === false){
            alert('유효한 이메일 형식이 아닙니다.')
            return
        }

        if(id === ""){
            alert('아이디를 입력하세요.')
            return
        }

        if(pwd === ""){
            alert('비밀번호를 입력하세요')
            return
        }
        
        axios.post(url, {
            "email": id,
            "password": pwd
        })
        .then(respnse => {
            Navigate("")
        })
        .catch(error => {
            alert("등록된 계정이 아닙니다.")
            return
        })
    }




    return (
        <div>
            <div>
                <h1>벼룩창고</h1>
            </div>
            <div>
                <label for="email">이메일</label>
                <input type="text" name="email" onChange={emailHandeler}></input><br />
                <label for="pwd">비밀번호</label>
                <input type="password" name="pwd" onChange={pwdHandler}></input>
            </div>
            <div>
                <button onClick={buttonHandler}>로그인</button>
                <hr />
            </div>
            <div>
                <button>회원가입</button>
            </div>
        </div>
    );
};

export default Login;