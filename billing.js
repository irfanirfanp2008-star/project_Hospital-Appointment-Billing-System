document.getElementById("form").addEventListener("submit",function(event){

     event.preventDefault()
    let name = document.getElementById("Name").value
    let age = document.getElementById("Age").value
    let number = document.getElementById("Number").value
    let len = number.length
    let Doctor = document.getElementById("Doctor").value
    let fee = Number(document.getElementById("fee").value)
    let days = Number(document.getElementById("days").value)

    document.getElementById("pname").innerHTML = ("Patient Name :"+name)
    document.getElementById("prname").innerHTML = ("Patient Age :"+age)
    document.getElementById("qname").innerHTML = ("Patient Phone Number :"+number)
    document.getElementById("displays").innerHTML = ("Doctor Name :"+Doctor)
    document.getElementById("fee").innerHTML = ("Consultation Fee :"+fee)
    document.getElementById("deli").innerHTML = ("Number of Consultation Days :"+days)

    if(name===""){
         document.getElementById("pname").innerHTML = ("Patient name should not be empty")
    } if(age=="" || age<=0){
         document.getElementById("prname").innerHTML = ("Age shoud be grater than 1")
    } if(len != 10){
    document.getElementById("qname").innerHTML = "Phone Number must be 10 digits"
    } if(fee<0){
        document.getElementById("fee").innerHTML = ("Enter valid Consultation Fee")
    } if(deli<1){
     document.getElementById("fee").innerHTML = ("Enter valid Consultation Days")
    }
    let tcf = fee*days
     document.getElementById("displayst").innerHTML = ("Total Consultation Fee :"+tcf)

    let discount=0
    if(age<18){
        discount=5
    }
     if(age>18 && age<59){
            document.getElementById("discountl").innerHTML = ("NO discount")
 
    }
     if(age>60){
        discount=15
    }
    let addis=(9000*discount)/100
    document.getElementById("discountl").innerHTML = ("Age discount"+discount+"% :"+addis)

    let sercharge=0
    if(fee>1000){
        sercharge=200
    document.getElementById("ser").innerHTML = ("Service Charge :"+sercharge)

    }else{
    document.getElementById("ser").innerHTML = ""
    }
    let aditi=0
     if(days>5){
        aditi=300
    document.getElementById("aditional").innerHTML = ("Additional Discount :"+aditi)

    }else{
     document.getElementById("aditional").innerHTML = ""
    }
    let finalpay=(tcf-addis-aditi)+sercharge
    document.getElementById("finalpay").innerHTML = ("Final Payable Amount :"+finalpay)

    localStorage.setItem("name",name) 
    localStorage.setItem("number",number)

    if(name>60){
document.getElementById("great").innerHTML = ("Senior Citizen Benefit Applied")
}else{
document.getElementById("great").innerHTML = ("Juniour Citizen Benefit Applied")
}
if(finalpay>5000){
 document.getElementById("greatl").innerHTML = ("High Consultation Expense")   
}else{
 document.getElementById("greatl").innerHTML = ("Medium Consultation Expense")   
}
})

document.getElementById("forml").addEventListener("submit",function(event){
    event.preventDefault()
    let Customer = localStorage.getItem("name")
    let number = localStorage.getItem("number")
    document.getElementById("lsname").innerHTML = Customer
    document.getElementById("lsnamel").innerHTML = number    
})
document.getElementById("rem").addEventListener("click",function(event){
    event.preventDefault()
    localStorage.removeItem("Customer")
    localStorage.removeItem("number")
    document.getElementById("lsname").innerHTML = ""
    document.getElementById("lsnamel").innerHTML = ""

})

