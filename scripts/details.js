

let dis = document.getElementById("dis")
let token = localStorage.getItem("token")

async function getFunc(){
    let token = localStorage.getItem("token")

    let res = await fetch("https://sore-rose-rooster-garb.cyclic.app/details",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            Authorization:token
        },
    })

    let ans = res.json()
    //console.log(ans)

    dis.append(ans)
}

getFunc()