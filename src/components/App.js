import React, {useState} from "react";
import '../styles/App.css';

function App() {
        const [relation,setRelation]=useState("");
        const [name1,setName1]=useState("");
        const [name2,setName2]=useState("");
        const handle1=(e)=>{
            setName1(e.target.value);
            
        }
        function removeCommonLetters(str1, str2) {
            // Convert strings to arrays for easier manipulation
            let arr1 = str1.split('');
            let arr2 = str2.split('');
          
            // Create a helper function to remove characters from both arrays
            function removeChar(char) {
              let index1 = arr1.indexOf(char);
              let index2 = arr2.indexOf(char);
              if (index1 !== -1 && index2 !== -1) {
                arr1.splice(index1, 1);
                arr2.splice(index2, 1);
                return true;
              }
              return false;
            }
          
            // Iterate over one of the arrays and try to remove common characters
            for (let char of [...str1]) {
              while (removeChar(char)) {}
            }
          
            // Join the arrays back into strings
            let result1 = arr1.join('');
            let result2 = arr2.join('');
          
            return [result1, result2];
          }

        const handle2=(e)=>{
            setName2(e.target.value);
        }
        const check=(e)=>{
            if(name1===""||name2===""){
                setRelation("Please Enter valid input");
                // return;
            }
            let [n, m] = removeCommonLetters(name1,name2);
            let x=(n.length+m.length)%6;
            console.log(n.length);
            console.log(m.length,x);
            if(x==0){
                setRelation("Siblings");
            }
            else if(x==1){
                setRelation("Friends");
            }
            else if(x==2){
                setRelation("Love");
            }
            else if(x==3){
                setRelation("Affection");
            }
            else if(x==4){
                setRelation("Marriage");
            }
            else if(x==5){
                setRelation("Enemy")
            }
            e.preventDefault();
        }
        const cleared=()=>{
            setRelation("");
        }
        return(
            <div id="main">
               <form>
                    <input name="name1" data-testid="input1" type="text" id="input1" onChange={handle1}/>
                    <input name="name2" type="text" data-testid="input2" id="input2" onChange={handle2}/>
                    <button data-testid="calculate_relationship" id="calculate_relationship" onClick={check}>Calculate Relationship Future</button>
                    <button data-testid="clear" type="reset" id="clear" onClick={cleared}>Clear</button>
               </form>
               <h3 data-testid="answer">{relation}</h3>
            </div>
        );
}


export default App;
