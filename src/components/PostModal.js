import React from "react";
import {useState} from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import {connect} from "react-redux";
import firebase from "firebase";
import { postArticleAPI } from "../actions";


const PostModal =(props)=>{
    const [editorText,setEditorText]=useState("");
    const[shareImage,setShareImage] =useState("");
    const[vedioLink,setVedioLink] =useState("");
    const[assetArea,setAssetArea]= useState("")
   
    const handleChange =(e) =>{
        const image=e.target.files[0];

    if(image === "" || image === undefined) {
        alert('not an image,the file is a ${typeof image}');
        return;
    }
    setShareImage(image);
    };

    const SwitchAssetArea =(area)=>{
        setShareImage("");
        setVedioLink("");
        setAssetArea(area);
    };

    const postArticle =(e)=>{
        console.log('post malone:r')
        e.preventDefault();
        if(e.target !== e.currentTarget){
            console.log("hello");
            return;
        }
        const payload ={
            image:shareImage,
            vedio:vedioLink,
            user:props.user,
            descriptipn:editorText,
            timestamp:firebase.firestore.Timestamp.now(),
        };
        props.postArticle(payload);
        reset(e);
    };
    const reset=(e)=>{
        setEditorText("");
        setShareImage("");
        setVedioLink("");
        setAssetArea("");
        props.handleClick(e);
    };
        return (
        <>
        {props.showModal === 'open' && (
        <Container>
        <Content>
        <Header>
        <h2>Create a post</h2>
        <button onClick={(event)=>reset(event)}>
        <img scr="/images/close-icon.svg" alt="" />
        </button>
        </Header>
        <SharedContent>
            <UserInfo>
                {props.user.photoURL  ?(
                  <img src={props.user.photoURL}/>
                ): (
                <img src="/images/user.svg" alt=""/>
        )}
        <span>{props.user.displayName}</span>
            </UserInfo>
            <Editor>
            <textarea
            value={editorText}
            onChange={(e)=>setEditorText(e.target.value)}
            placeholder="What do you want to talk about?"
            autoFocus={true}>
              </textarea>
              { assetArea === 'image' ? (
             <UploadImage>
               <input type="file" accept="image/gif,image/jpeg, image/png"
               name="image"
               id="file"
               style={{display:"none"}}
               onChange={handleChange} />
               <p>
                <lable htmlFor="file">Select an image to share</lable>
               </p>
               {shareImage && <img src={URL.createObjectURL(shareImage)}/>}
               </UploadImage>
              ): (
               assetArea === 'media' && (
               <>
               <input type="text" 
                     placeholder="please input vedio link"
                     value={vedioLink}
                     onChange={(e)=> setVedioLink(e.target.value)}
               />
               {vedioLink && (<ReactPlayer width={"100%"} url={vedioLink}/>
               )}
               </>
               )
              )}
             
            </Editor>
        </SharedContent>
        <ShareCreation><AttachAssets>
            <AssetButton onClick={()=>SwitchAssetArea("image")}>
                <img scr="/images/share-image.png" alt=""/>
                </AssetButton>
                <AssetButton onClick={()=> SwitchAssetArea("media")}>
                    <img src="/images/share-vedios.png" alt=""/>
                </AssetButton>
                </AttachAssets>
                <ShareComment>
                <AssetButton>
                <img src="/image/share-comment.svg"alt=""/> //no photo//
                    Anyone
        
                </AssetButton>
                </ShareComment>
                <PostButton disable={!editorText ? true :false} 
                onclick ={(event) => postArticle(event)}
                >
                    post
                </PostButton>
                </ShareCreation>
        </Content>
        </Container>
        )
}

        </>
        
        );
};
const Container =styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom :0;
z-index:9999;
color:black;
background-color:rgba(0,0,0,0.8);
animation:fadeIn 0.3s;
`;

const Content =styled.div `
width:100%;
max-width:552px;
background-color:white;
max-height:90%;
overflow:initial;
border-radius:5px;
position:relative;
display:flex;
flex-direction:column;
top:32px;
margin:0 auto;
`;

const Header=styled.div `
display:block;
padding:16px 20px;
border-bottom:1px solid rgba(0,0,0,0.15);
font-size:16px;
line-height:1.5;
color:rgba(0,0,0,0.6);
font-weight:400;
display:flex;
justify-content:space-between;
align-items:center;
button {
    height:40px;
    width:40px;
    min-width:auto;
    color:rgba(0,0,0,0.15);
    svg,img{
        pointer-events:none;
    }
}
`;
const SharedContent =styled.div`
display:flex;
flex-direction:column;
flex-grow:1;
overflow-y :auto;
vertical-align:baseline;
background:transparent;
padding:8px 12px;
`;

const UserInfo=styled.div`
display:flex;
align-items:center;
padding: 12px 24px;
svg,
img {
    width:48px;
    height:48px;
    background-clip:content-box;
    border:2px solid transparent;
    border-radius:50%;
}
span{
    font-weight:600;
    font-size:16px;
    line-height:1.5;
    margin-left:5px;
}
`;
const ShareCreation=styled.div`
display:flex;
justify-content:space-between;
padding:12px 24px 12px 16px;
`;
const AssetButton=styled.div`
display:flex;
align-items:center;
height:40px;
min-width:auto;
color:rgba(0,0,0,0.5);


`;
const AttachAssets=styled.div`
align-items:center;
display:flex;
padding-right:8px;
${AssetButton}{
    width:40px;
}
`;
const ShareComment=styled.div`
padding-left:8px;
margin-right:auto;
border-left:1px solid rgba(0,0,0,0.15);
${AssetButton}{
    svg{
        margin-right:5px;
    }
}


`;
const PostButton =styled.button`
min-width:60px;
border-radius:20px;
padding-left:16px;
padding-right:16px;
background:${(props) => (props.disabled ? "rgba(0,0,0,0.8)" : "#0a66c2")};
color:${(props) => (props.disabled ? "rgba(1,1,1,0.2)" : "white")};
&:hover{
    background:${(props) => (props.disabled ? "rgba(0,0,0,0.08)" : "#004182")};
}

`;
const Editor=styled.div`
padding:12px 24px;
textarea{
    width:100%;
    min-height:100px;
    resize:none;
}
input{
    width:100%;
    height:5px;
    font-size:16px;
    margin-bottom:20px;
}
`;
const UploadImage=styled.div`
text-align:center;
img {
    width:100%;
}
`;
const mapStateToProps =(state) =>{
    return {
      user:state.userState.state,
    };
};

const mapDispatchToProps = (dispatch) => ({
    postArticle:(payload)=> dispatch(postArticleAPI(payload)),
});


export default (mapStateToProps,mapDispatchToProps)(PostModal);

