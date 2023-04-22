import styled from "styled-components";
const Main=(props)=>{
    return (<Container>
        <Share>
            Share
            <div>
                <img src='images/user.svg'/>
                <button>Start a post</button> 
            </div>
            <div>
                <button>
                    <img src='images/photo-icon.svg'/>
                    <span>Photo</span>
                </button>
                <button>
                    <img src='images/video-icon.svg'/>
                    <span>video</span>
                </button>
                <button>
                    <img src='images/event-icon.svg'/>
                    <span>Event</span>
                </button>
                
                <button>
                    <img src='images/article-icon.svg'/>
                    <span>Write Article</span>
                </button>
            </div>
        </Share>
        <div>
            <Article>
                <SharedPost>
                    <a>
                        <img src='images/user.svg'/>
                        <div>
                            <span>Title</span>
                            <span>Info</span>
                            <span>Date</span>
                        </div>
                    </a>
                    <button>
                        <img src='images/ellipsis.png'/>
                    </button>
                    
                </SharedPost>
                <Description>Description</Description>
                    <SharedImg>
                        <a>
                            <img src='/images/shared.jpg'/>
                        </a>
                    </SharedImg>
                    <SocialCounts>
                        <li>
                            <button>
                                <img src='images/like.png'/>
                                <img src='images/claps.png'/>
                                <span>25</span>
                            </button>
                        </li>
                        <li>
                            <a>
                                1 comment
                            </a>
                        </li>
                    </SocialCounts>
                    <SocialFooter>
                    <button>
                        <img src='images/like-out.png'/>
                        <span>Like</span>
                    </button>
                    <button>
                        <img src='/images/comment.png'/>
                        <span>Comments</span>
                    </button>
                    <button>
                        <img src='/images/share-icon.png'/>
                        <span>Share</span>
                    </button>
                    <button>
                        <img src='/images/send.png'/>
                        <span>Send</span>
                    </button>
                    </SocialFooter>
            </Article>
        </div>
    </Container>
)
    
}
const Container=styled.div`
grid-area:main;
`;
const CommonCard=styled.div`
text-align:center;
overflow:hidden;
margin-bottom:8px;
border-radius:5px;
position:relative;
border:none;
box-shadow:0 0 0 1px rgb(0 0 0/15%), 0 0 0 rgb(0 0 0/20%);`;

const Share=styled(CommonCard)`
display:flex;
flex-direction:column;
color:#958b7b;
margin: 0 0 8px;
background:white;
div{
    button{
        outline:none;
        color:rgba(0,0,0,0.6);
        line-height:1.5;
        font-size:14px;
        min-height:40px;
        
        background:transparent;
        border:none;
        display:flex;
        align-items:center;
        font-weight:600;

    }
    &:first-child{
        display:flex;
        align-items:center;
        padding:8px 16px 0px 16px;
        img{
            width:48px;
            border-radius:50%;
            margin-right:8px;

        }
        button{
            margin:4px 0;
            flex-grow:1;
            border-radius:35px;
            padding-left:16px;
            border:1px solid rgba(0,0,0,0.15);
            background-color:white;
            text-align:left;
        }
        }
        &:nth-child(2){
           display:flex;
           flex-wrap:wrap;
           justify-content:space-between;
           padding-bottom:4px;
           button{
            img{
                margin:0 4px 0 -2px;
            }
            span{
                color:#70b5f9;
            }
           } 
        }
    }
}`;
const Article=styled(CommonCard)`
padding:0;
margin: 0 0 8px;
overflow:visible;`;
const SharedPost=styled.div`
padding-right:40px;
flex-wrap:nowrap;
padding 12px 16px 0;
margin-bottom:8px;
align-items:center;
display:flex;
a{
    margin-right:12px;
    flex-grow:1;
    overflow:hidden;
    display:flex;
    text-decoration:none;
    img{
        width:48px;
        height:48px;

    }
    &>div{
        display:flex;
        flex-direction:column;
        flex-grow:1;
        flex-basis:0;
        margin-left:8px;
        overflow:hidden;
        span{
            text-align:left;
            &:first-child{
                font-size:14px;
                font-weight:700;
                color:rgba(0,0,0,1);

            }
            &:nth-child(n+1){
                font-size:12px;
                color:rgba(0,0,0,0.6);
            }
        }
    }

}
button{
    img{
        width:40px;
        height:30px;
    }
    position:absolute;
    right:12px;
    top:0;
    background:transparent;
    border:none;
    outline:none;
    
}`;
const Description=styled.div`
padding:0 16px;
overflow:hidden;
color:rgba(0,0, 0,0.9);
font-size:14px;
text-align:left;
`;
const SharedImg=styled.div`
margin-top:8px;
width:100%;
display:block;
position:relative;
background-color:#f9fafb;
img{
    object-fit:contain;
    width:100%;
    height:100%;
}
`;
const SocialCounts=styled.ul`
line-height:1.3;
display:flex;
align-items:flex-start;
overflow:auto;
margin:0 16px;
padding:8px 0 ;
border-bottom:1px solid #e9e5df;
list-style:none;
li{
    margin-right:5px;
    font-size:12px;
    button{
        display:flex;
        font-size:20px;
        img{
            height:20px;
            padding:1px;
        }
    }
}
`;
const SocialFooter=styled.div`
display:inline-flex;
justify-content:space-between;
border-radius:5px;
span{
    font-size:14px;
}
button{
    border:none;
    padding:8px;
    color:#0a66c2;
    &:hover{
        background-color:white;
    }
}
img{
    height:20px;
}
`;

export default Main;