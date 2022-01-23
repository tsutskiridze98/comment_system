import * as data from "../data.json" assert { type: "json" };

export const obj = data.default;

const section = document.querySelector(".section");
const commentsList = document.querySelector(".comments-list");


export function createComment() {
    for(let i = 0; i < obj.comments.length; i++) {
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
        score.textContent = obj.comments[i].score;
        
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
        userImg.setAttribute("src", obj.comments[i].user.image.png);
        userImg.setAttribute("alt", "avatar");

        const rightTopUsername = document.createElement("div");
        rightTopUsername.classList.add("right-top-username");

        const usernameCom = document.createElement("p");
        usernameCom.classList.add("username");
        if(obj.currentUser.username === obj.comments[i].user.username) {
            usernameCom.innerHTML = `${obj.comments[i].user.username} <span>you</span>`;

            const deleteCommentBtn = document.createElement("a");
            deleteCommentBtn.classList.add("delete-comment");
            deleteCommentBtn.innerHTML = `<img src="images/icon-delete.svg" alt="reply"> Delete`;

            const editCommentBtn = document.createElement("a");
            editCommentBtn.classList.add("edit-comment");
            editCommentBtn.innerHTML = `<img src="images/icon-edit.svg" alt="reply"> Edit`;

            replyBtnDiv.append(deleteCommentBtn, editCommentBtn);
        } else {
            usernameCom.textContent = obj.comments[i].user.username;

            const replyCommentBtn = document.createElement("a");
            replyCommentBtn.classList.add("reply-comment");

            replyCommentBtn.innerHTML = `<img src="images/icon-reply.svg" alt="reply"> Reply`;
            replyBtnDiv.appendChild(replyCommentBtn);
        }

        const rightTopDate = document.createElement("div");
        rightTopDate.classList.add("right-top-date");

        const commentDate = document.createElement("p");
        commentDate.classList.add("comment-date");
        commentDate.textContent = obj.comments[i].createdAt;

        // Right bottom div

        const textContent = document.createElement("p");
        textContent.classList.add("text-content");
        textContent.textContent = obj.comments[i].content;

        // Append
        commentsList.appendChild(commentDiv);
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
        if(obj.comments[i].replies.length !== 0) {
            const replyDiv = document.createElement("div");
            replyDiv.classList.add('reply-div');

            const replyDivLine = document.createElement("div");
            replyDivLine.classList.add('reply-div-line');

            const line = document.createElement("div");
            line.classList.add("line");

            const replyDivContent = document.createElement("div");
            replyDivContent.classList.add('reply-div-content');

            commentsList.append(replyDiv);
            replyDiv.append(replyDivLine, replyDivContent);
            replyDivLine.appendChild(line);

            for(let j = 0; j < obj.comments[i].replies.length; j++) {

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
                score.textContent = obj.comments[i].replies[j].score;
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
                userImg.setAttribute("src", obj.comments[i].replies[j].user.image.png);
                userImg.setAttribute("alt", "avatar");

                const rightTopUsername = document.createElement("div");
                rightTopUsername.classList.add("right-top-username");

                const usernameCom = document.createElement("p");
                usernameCom.classList.add("username");
                if(obj.currentUser.username === obj.comments[i].replies[j].user.username) {
                    usernameCom.innerHTML = `${obj.comments[i].replies[j].user.username} <span>you</span>`;

                    const deleteCommentBtn = document.createElement("a");
                    deleteCommentBtn.classList.add("delete-comment");
                    deleteCommentBtn.innerHTML = `<img src="images/icon-delete.svg" alt="reply"> Delete`;

                    const editCommentBtn = document.createElement("a");
                    editCommentBtn.classList.add("edit-comment");
                    editCommentBtn.innerHTML = `<img src="images/icon-edit.svg" alt="reply"> Edit`;

                    replyBtnDiv.append(deleteCommentBtn, editCommentBtn);
                } else {
                    usernameCom.textContent = obj.comments[i].replies[j].user.username;

                    const replyCommentBtn = document.createElement("a");
                    replyCommentBtn.classList.add("reply-comment");

                    replyCommentBtn.innerHTML = `<img src="images/icon-reply.svg" alt="reply"> Reply`;
                    replyBtnDiv.appendChild(replyCommentBtn);
                }

                const rightTopDate = document.createElement("div");
                rightTopDate.classList.add("right-top-date");

                const commentDate = document.createElement("p");
                commentDate.classList.add("comment-date");
                commentDate.textContent = obj.comments[i].replies[j].createdAt;

                // Right bottom div
                const textContent = document.createElement("p");
                textContent.classList.add("text-content");
                textContent.innerHTML = `<span>@${obj.comments[i].replies[j].replyingTo}</span> ${obj.comments[i].replies[j].content}`;

                // Append
                replyDivContent.appendChild(commentDiv);
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
            }
        } else {
            continue;
        }
    } 
    createCommentingDiv();
}

function createCommentingDiv() {
    const secComDiv = document.createElement("div");
    secComDiv.classList.add("section-commenting-div");

    const comDivImg = document.createElement("div");
    comDivImg.classList.add("commenting-div-img");

    const curUserImg = document.createElement("img");
    curUserImg.classList.add("user-img");
    curUserImg.setAttribute("src", obj.currentUser.image.png);
    curUserImg.setAttribute("alt", "Current User Avatar");

    const form = document.createElement("form");
    form.classList.add("form");

    const comDivCont = document.createElement("div");
    comDivCont.classList.add("commenting-div-content");

    const comDivSend = document.createElement("div");
    comDivSend.classList.add("commenting-div-send-div");

    const textarea = document.createElement("textarea");
    textarea.classList.add("textarea");
    textarea.setAttribute("placeholder", "Add a comment...");
    textarea.setAttribute("row", "3");

    const submitBtn = document.createElement("button");
    submitBtn.classList.add("submit-send-comment");
    submitBtn.setAttribute("type", "submit");
    submitBtn.textContent = "SEND";

    // append
    section.appendChild(secComDiv);
    secComDiv.append(comDivImg, form);
    comDivImg.appendChild(curUserImg);
    form.append(comDivCont, comDivSend);
    comDivCont.append(textarea);
    comDivSend.appendChild(submitBtn);
}