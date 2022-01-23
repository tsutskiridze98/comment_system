import { obj, createComment } from "./comments.js"

// localStorage.setItem('obj', JSON.stringify(obj));

// const retrievedObject = JSON.parse(localStorage.getItem('obj'));

// const obj.comments = retrievedObject.comments;
// const currentUser = retrievedObject.currentUser;

createComment();

// Selectors
const submitBtn = document.querySelector(".submit-send-comment");
const textarea = document.querySelector(".textarea");
const commentsList = document.querySelector(".comments-list");

submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    let curId = 1;
    let comId = 0;
    for(let i = 0; i < obj.comments.length; i++) {
        curId++;
        comId++;
        if(obj.comments[i].replies.length !== 0) {
            for(let j = 0; j < obj.comments[i].replies.length; j++) {
                curId++;
            }
        }
    }

    if(textarea.value !== "") {
        console.log(curId);
        obj.comments.push({id: curId++, content: textarea.value, createdAt: "1 month ago", score: 0, user: {
            image: { 
            png: `./images/avatars/image-${obj.currentUser.username}.png`,
            webp: `./images/avatars/image-${obj.currentUser.username}.webp`
            },
            username: `${obj.currentUser.username}`
        },
        replies: []
        });
        console.log(obj.comments);
        // localStorage.setItem('obj', JSON.stringify(obj));

        const commentDiv = document.createElement("div");
        commentDiv.classList.add('section-comment-div');
        const comDivLeft = document.createElement("div");
        comDivLeft.classList.add("comment-div-left");
        const comDivRight = document.createElement("div");
        comDivRight.classList.add("comment-div-right");
        const comDivLeftLikes= document.createElement("div");
        comDivLeftLikes.classList.add("comment-div-left-likes");
        const plus = document.createElement("a");
        plus.classList.add('plus');
        plus.textContent = "+";
        const score = document.createElement("p");
        score.classList.add('score');
        score.textContent = obj.comments[comId].score;
        const minus = document.createElement("a");
        minus.classList.add('minus');
        minus.textContent = "-";

        const rightTopDiv = document.createElement("div");
        rightTopDiv.classList.add("right-top-div");

        const rightBottomDiv = document.createElement("div");
        rightBottomDiv.classList.add("right-bottom-div");

        const informationDiv = document.createElement("div");
        informationDiv.classList.add("information");

        const replyBtnDiv = document.createElement("div");
        replyBtnDiv.classList.add("reply-btn");

        // Information class div

        const rightTopImg = document.createElement("div");
        rightTopImg.classList.add("right-top-img");

        const userImg = document.createElement("img");
        userImg.classList.add("user-img");
        userImg.setAttribute("src", obj.comments[comId].user.image.png);
        userImg.setAttribute("alt", "avatar");

        const rightTopUsername = document.createElement("div");
        rightTopUsername.classList.add("right-top-username");

        const usernameCom = document.createElement("p");
        usernameCom.classList.add("username");
        usernameCom.innerHTML = `${obj.comments[comId].user.username} <span>you</span>`;

        const deleteCommentBtn = document.createElement("a");
        deleteCommentBtn.classList.add("delete-comment");
        deleteCommentBtn.innerHTML = `<img src="images/icon-delete.svg" alt="reply"> Delete`;

        const editCommentBtn = document.createElement("a");
        editCommentBtn.classList.add("edit-comment");
        editCommentBtn.innerHTML = `<img src="images/icon-edit.svg" alt="reply"> Edit`;

        replyBtnDiv.append(deleteCommentBtn, editCommentBtn);

        const rightTopDate = document.createElement("div");
        rightTopDate.classList.add("right-top-date");

        const commentDate = document.createElement("p");
        commentDate.classList.add("comment-date");
        commentDate.textContent = obj.comments[comId].createdAt;

        // Right bottom div

        const textContent = document.createElement("p");
        textContent.classList.add("text-content");
        textContent.textContent = obj.comments[comId].content;

        // Append
        commentsList.append(commentDiv);

        commentDiv.append(comDivLeft, comDivRight);
        comDivLeft.appendChild(comDivLeftLikes);
        comDivLeftLikes.append(plus, score, minus);
        comDivRight.append(rightTopDiv, rightBottomDiv);
        rightTopDiv.append(informationDiv, replyBtnDiv);
        informationDiv.append(rightTopImg, rightTopUsername, rightTopDate);
        rightTopImg.appendChild(userImg);
        rightTopUsername.appendChild(usernameCom);
        rightTopDate.appendChild(commentDate);
        rightBottomDiv.appendChild(textContent);
        textarea.value = "";
    }
});

////////////////// Delete 

const deleteBtn = document.querySelectorAll(".delete-comment");

// deleteBtn.addEventListener("click", function(e) {
//     e.preventDefault();

// })






//////// Score 

const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const score = document.querySelectorAll(".score");

plus.forEach((el, i) => {
    el.addEventListener("click", function(e){
        score[i].innerHTML++;
    });
});

minus.forEach((el, i) => {
    el.addEventListener("click", function(e){
        score[i].innerHTML--;
    });
});
