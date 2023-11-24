const form = document.querySelector('.form form')
const submitBtn = form.querySelector('.btn')

form.onsubmit = (e)=>{
    e.preventDefault()
}

submitBtn.onclick = ()=>{
    let xhr = new XMLHttpRequest()
    xhr.open("POST", "http://f96473fl.beget.tech/test_php/reg.php",true)
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let data = xhr.response
                if("Notification" in window){
                    console.log("Уведомления поддерживаются")
                    Notification.requestPermission (function (permission){
                        console.log(permission)
                        if (permission === "granted"){
                            let notification = new Notification("Форма была успешно отправлена!", {
                                tag: "ache-mail",
                                body: "Кроме того, Push-уведомления исправно работают.",
                                icon: "./clock.png"
                            })
                        }
                    })
                } else {
                    console.log("Браузер не поддерживает уведомления")
                }
            }
        }
    }
    let formData = new FormData(form)
    xhr.send(formData)
}