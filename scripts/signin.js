
let form = document.querySelector("form")

form.addEventListener("submit",myFunc)


function myFunc(event){

    event.preventDefault()

    let email = document.getElementById("email").value

    let password = document.getElementById("pass").value

    let obj={
        email,
        password
    }
    fetch_signup(obj)
    window.alert("logn Sucessfull")
    
    

}


async function fetch_signup(obj){

    let res = await fetch("http://localhost:7300/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(obj)
    })
    

    let ans = await res.json()


    //console.log(ans)

    localStorage.setItem("token",ans.token)
    

    

    
}
