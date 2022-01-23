import * as data from "../data.json" assert { type: "json" };

const obj = data.default;
const commentsArr = data.default.comments;
const currentUser = data.default.currentUser;

// localStorage.setItem('obj', JSON.stringify(obj));

// const retrievedObject = JSON.parse(localStorage.getItem('obj'));

// const commentsArr = retrievedObject.comments;
// const currentUser = retrievedObject.currentUser;

// Selectors
const section = document.querySelector(".section");

function createComment() {
    for(let i = 0; i < commentsArr.length; i++) {
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
        score.textContent = commentsArr[i].score;
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
        userImg.setAttribute("src", commentsArr[i].user.image.png);
        userImg.setAttribute("alt", "avatar");

        const rightTopUsername = document.createElement("div");
        rightTopUsername.classList.add("right-top-username");

        const usernameCom = document.createElement("p");
        usernameCom.classList.add("username");
        if(currentUser.username === commentsArr[i].user.username) {
            usernameCom.innerHTML = `${commentsArr[i].user.username} <span>you</span>`;

            const deleteCommentBtn = document.createElement("a");
            deleteCommentBtn.classList.add("delete-comment");
            deleteCommentBtn.innerHTML = `<img src="images/icon-delete.svg" alt="reply"> Delete`;

            const editCommentBtn = document.createElement("a");
            editCommentBtn.classList.add("edit-comment");
            editCommentBtn.innerHTML = `<img src="images/icon-edit.svg" alt="reply"> Edit`;

            replyBtnDiv.append(deleteCommentBtn, editCommentBtn);
        } else {
            usernameCom.textContent = commentsArr[i].user.username;

            const replyCommentBtn = document.createElement("a");
            replyCommentBtn.classList.add("reply-comment");

            replyCommentBtn.innerHTML = `<img src="images/icon-reply.svg" alt="reply"> Reply`;
            replyBtnDiv.appendChild(replyCommentBtn);
        }

        const rightTopDate = document.createElement("div");
        rightTopDate.classList.add("right-top-date");

        const commentDate = document.createElement("p");
        commentDate.classList.add("comment-date");
        commentDate.textContent = commentsArr[i].createdAt;

        // Right bottom div

        const textContent = document.createElement("p");
        textContent.classList.add("text-content");
        textContent.textContent = commentsArr[i].content;

        // Append
        section.appendChild(commentDiv);
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

        if(commentsArr[i].replies.length !== 0) {
            const replyDiv = document.createElement("div");
            replyDiv.classList.add('reply-div');

            const replyDivLine = document.createElement("div");
            replyDivLine.classList.add('reply-div-line');

            const line = document.createElement("div");
            line.classList.add("line");

            const replyDivContent = document.createElement("div");
            replyDivContent.classList.add('reply-div-content');

            section.appendChild(replyDiv);
            replyDiv.append(replyDivLine, replyDivContent);
            replyDivLine.appendChild(line);

            for(let j = 0; j < commentsArr[i].replies.length; j++) {

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
                score.textContent = commentsArr[i].replies[j].score;
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
                userImg.setAttribute("src", commentsArr[i].replies[j].user.image.png);
                userImg.setAttribute("alt", "avatar");

                const rightTopUsername = document.createElement("div");
                rightTopUsername.classList.add("right-top-username");

                const usernameCom = document.createElement("p");
                usernameCom.classList.add("username");
                if(currentUser.username === commentsArr[i].replies[j].user.username) {
                    usernameCom.innerHTML = `${commentsArr[i].replies[j].user.username} <span>you</span>`;

                    const deleteCommentBtn = document.createElement("a");
                    deleteCommentBtn.classList.add("delete-comment");
                    deleteCommentBtn.innerHTML = `<img src="images/icon-delete.svg" alt="reply"> Delete`;

                    const editCommentBtn = document.createElement("a");
                    editCommentBtn.classList.add("edit-comment");
                    editCommentBtn.innerHTML = `<img src="images/icon-edit.svg" alt="reply"> Edit`;

                    replyBtnDiv.append(deleteCommentBtn, editCommentBtn);
                } else {
                    usernameCom.textContent = commentsArr[i].replies[j].user.username;

                    const replyCommentBtn = document.createElement("a");
                    replyCommentBtn.classList.add("reply-comment");

                    replyCommentBtn.innerHTML = `<img src="images/icon-reply.svg" alt="reply"> Reply`;
                    replyBtnDiv.appendChild(replyCommentBtn);
                }

                const rightTopDate = document.createElement("div");
                rightTopDate.classList.add("right-top-date");

                const commentDate = document.createElement("p");
                commentDate.classList.add("comment-date");
                commentDate.textContent = commentsArr[i].replies[j].createdAt;

                // Right bottom div
                const textContent = document.createElement("p");
                textContent.classList.add("text-content");
                textContent.innerHTML = `<span>@${commentsArr[i].replies[j].replyingTo}</span> ${commentsArr[i].replies[j].content}`;

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
            console.log(`${i}: false`);
        }
    }
    // Create commenting div
    const secComDiv = document.createElement("div");
    secComDiv.classList.add("section-commenting-div");

    const comDivImg = document.createElement("div");
    comDivImg.classList.add("commenting-div-img");

    const curUserImg = document.createElement("img");
    curUserImg.classList.add("user-img");
    curUserImg.setAttribute("src", currentUser.image.png);
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
createComment();

// Selectors
const submitBtn = document.querySelector(".submit-send-comment");
const textarea = document.querySelector(".textarea");

submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    let curId = 1;
    let comId = 0;
    for(let i = 0; i < commentsArr.length; i++) {
        curId++;
        comId++;
        if(commentsArr[i].replies.length !== 0) {
            for(let j = 0; j < commentsArr[i].replies.length; j++) {
                curId++;
            }
        }
    }

    if(textarea.value !== "") {
        console.log(curId);
        commentsArr.push({id: curId++, content: textarea.value, createdAt: "1 month ago", score: 0, user: {
            image: { 
            png: `./images/avatars/image-${currentUser.username}.png`,
            webp: `./images/avatars/image-${currentUser.username}.webp`
            },
            username: `${currentUser.username}`
        },
        replies: []
        });
        console.log(commentsArr);
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
        score.textContent = commentsArr[comId].score;
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
        userImg.setAttribute("src", commentsArr[comId].user.image.png);
        userImg.setAttribute("alt", "avatar");

        const rightTopUsername = document.createElement("div");
        rightTopUsername.classList.add("right-top-username");

        const usernameCom = document.createElement("p");
        usernameCom.classList.add("username");
        usernameCom.innerHTML = `${commentsArr[comId].user.username} <span>you</span>`;

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
        commentDate.textContent = commentsArr[comId].createdAt;

        // Right bottom div

        const textContent = document.createElement("p");
        textContent.classList.add("text-content");
        textContent.textContent = commentsArr[comId].content;

        // Append
        section.insertAdjacentElement("beforeend",commentDiv);

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
    })
})

minus.forEach((el, i) => {
    el.addEventListener("click", function(e){
        score[i].innerHTML--;
    })
})
