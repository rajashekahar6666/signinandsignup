//function to scroll the hide container and called when the user clicked on the signUp in hideContainer
var num=true;
function fun()
{
    
    if (num)
    {
        //to srcoll to left
        document.getElementById("hideContainer").style.position="absolute"
        document.getElementById("hideContainer").style.top="5%"
        document.getElementById("hideContainer").style.left="7.7%"
        document.getElementById("hideSignup").value="SignIn"
        num=false;
        //to chagne the contain
        document.getElementById("span1").innerHTML="If you have an account.SignIn to your account by click on below button"
        document.getElementById("span2").innerHTML="If you don't have an account. Create an account on Right side"
        document.getElementById("arrow").src="./assests/images/arrowright.png"

    }
    else
    {
        // to scroll to right
        document.getElementById("hideContainer").style.position="absolute"
        document.getElementById("hideContainer").style.top="5%"
        document.getElementById("hideContainer").style.left="50%"
        document.getElementById("hideSignup").value="SignUp"
        num=true;
        // to change the contain back
        document.getElementById("UserName1").value=""
        document.getElementById("password1").value=""
        document.getElementById("password2").value=""
        document.getElementById("correct").style.display="none"
        document.getElementById("arrow").src="./assests/images/leftarrow.png"

        //SignIn block conatin 
        document.getElementById("Lspan").style.display="none"
        document.getElementById("userName").value=""
        document.getElementById("password").value=""
        document.getElementById("userName").style.border="none"
        document.getElementById("password").style.border="none"
        document.getElementById("signIp").style.border="none"
        document.getElementById("signIp").removeAttribute("disabled")
    }
}

// function to check the passwords matched or not in signUp page and amke the signUp button enable and called where the user give the username and password
function fun1()
{
    var userName = document.getElementById("UserName1").value
    var passwordVal1 = document.getElementById("password1").value
    var passwordVal2 = document.getElementById("password2").value

    if (passwordVal1==passwordVal2)
    {
        document.getElementById("signup").removeAttribute("disabled")
    }
    
}
fun1()

// function to check the passwords matched or not in signUp page and genrate the warnings. called when the user clicks on the SignUp Button in SignUp Conatiner
function fun3()
{
    // calling fun4() to store the userName and Password in to Local storage 
    fun4()
    var userName = document.getElementById("UserName1").value
    var passwordVal1 = document.getElementById("password1").value
    var passwordVal2 = document.getElementById("password2").value

    // condition to check passwards are matched or not if matched exucte
    if (passwordVal1==passwordVal2)
    {
        document.getElementById("notCorrect").style.display="none"
        document.getElementById("correct").style.display="flex"

        //callig fun() when the passwords are matched to open the SignIn Page
        fun()
    }

    // condition to check passwards are matched or not if not matched excute
    if (passwordVal1!=passwordVal2) 
    {
        document.getElementById("correct").style.display="none"
        document.getElementById("notCorrect").style.display="flex"
    }
}


// function to store the user information in the database(local Storage ) called by fun3()
function fun4()
{
    var userName1 = document.getElementById("UserName1").value
    var passwordVal3 = document.getElementById("password1").value
    localStorage.setItem("UserName",userName1)
    localStorage.setItem("password",passwordVal3)

    //calling fun5() to retrive the user info to SignIn page back
    fun5()
}

// function to get back the user info back and called by fun4() and fun6()
var mainusername;
var mainpass;
function fun5()
{
    mainusername = localStorage.getItem("UserName")
    mainpass = localStorage.getItem("password")
    console.log(mainusername,mainpass)
}


//function to check user Input at SignUp which is stored in database IS EQUAL TO User Input at SignIn Time  
function fun6()
{
    // calling the fun5() to get back the user info from the dataBase
    fun5()
    var userNameVal = document.getElementById("userName").value
    var userPassVal = document.getElementById("password").value
    if (userNameVal==mainusername && userPassVal==mainpass)
    {
        document.getElementById("LoginSucess").style.display="flex"
    }
    else
    {
        document.getElementById("Lspan").style.display="flex"
        document.getElementById("userName").value=""
        document.getElementById("password").value=""
        document.getElementById("userName").style.border="2px solid red"
        document.getElementById("password").style.border="2px solid red"
        document.getElementById("signIp").style.border="2px solid red"
    }
}























