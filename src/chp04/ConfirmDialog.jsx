import React from "react";
import Button from "./Button";

function ConfirmDialog(props) {
    return(
        <div>
            <p>내용을 확인하셨으면 확인버튼을 눌러주세요.</p>
            <Button color = 'green'>확인</Button>
            <Button color = 'red'>취소</Button>
            <Button color = 'blue'>뭘봐</Button>
        </div>
    )
}

export default ConfirmDialog