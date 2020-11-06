import styled from 'styled-components';


export const MainContentChat = styled.main`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:100vh;
    width:auto;
    border:2px solid red;

`

export const SectionChatView = styled.section`
    display:flex;
    flex-direction:column;
    height:45%;
    width:16%;
    background-color:#f2f2f2;
    border-radius:5px;
    // border:2px solid blue;
`

export const SectionTypeText = styled.section`
    display:flex;
    align-items:center;
    height:14%;
    width:auto;
    margin-top:auto;
    background-color:white;
    border:solid #f2f2f2 2px;
    // border-color: transparent transparent #f2f2f2 transparent;
    

`

export const InputFieldTypeChat = styled.input`
    height:90%;
    width:100%;
    border:none;
    outline:none;
    font-size:18px;
`

export const ChatSendButton = styled.input`
    height:50%;
    width:30%;
    border:none;
    border-radius:20px;
    background-color:#267ED6 ;
    outline:none;
    cursor:pointer;
    margin-right:1%;
`

export default { MainContentChat, SectionChatView, SectionTypeText, InputFieldTypeChat, ChatSendButton }