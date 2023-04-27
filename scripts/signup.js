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
    window.alert("signup Sucessfull,please login")
    
    

}


async function fetch_signup(obj){

    let res = await fetch("http://localhost:7300/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(obj)
    })
    console.log(res)

    let ans = await res.json()
    

    

    
}
