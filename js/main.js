//All inputs in the global

var input1 = document.getElementById("sName");

var input2 = document.getElementById("sURL");



var both =[];


// string --> Array
if( localStorage.getItem("url") == null  )
{
    both = [];
}
else
{
    both =  JSON.parse(  localStorage.getItem("url") )  ;

    displayProducts();

}







// functions
function addProduct(){
    var oneWeb = {

        sName : input1.value ,
        sURL : input2.value 
    }
    
    both.push(oneWeb);
 
    if(input1.value==""){
        window.alert("please enter a site name")
    }
    else if(input2.value==""){
        
        window.alert("please enter the site URL")
    }
    else
    {
        localStorage.setItem("url" ,  JSON.stringify(both)   );


        displayProducts();
        
    
          
           clearInputs();
    
    }



    
}

function displayProducts()
    {
        var hasalah = ``;
    
        for(var i =0 ; i < both.length ; i++ )
        {
            hasalah += `<tr>
                    <td> ${ both[i].sName }  </td>
                     

                    <td>
                        <a class= "btn btn-outline-primary" href ="${ both[i].sURL }"  target="_blank">visit </a>
                    </td>
                    <td>
                        <button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button>
                    </td>
    
            </tr>`
        }
    
        document.getElementById("WEB").innerHTML = hasalah;
}
    


function deleteProduct( pIndex  ){

    both.splice( pIndex , 1  );
    displayProducts();
    localStorage.setItem("url" , JSON.stringify( both ));
}



function clearInputs()
{
    input1.value = "";
    input2.value = "";
}


