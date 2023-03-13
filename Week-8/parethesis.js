

function isValidParenthesis(parenthesis){
    let stack = [];
    for(let i = 0; i < parenthesis.length; i++){
        if(isClosed(stack[stack.length-1], parenthesis[i])){
            stack.pop();
        }else if(parenthesis[i]=='[' || parenthesis[i]=='(' || parenthesis[i]=="{" || parenthesis[i]==']' || parenthesis[i]==')' || parenthesis[i]=="}"){
            stack.push(parenthesis[i]);
        }
    }
    if(stack.length == 0) return true;
    else return false;

}

//helper function
function isClosed(first,second){

    if(first == "(" && second == ")"){
        return true;
    }else if(first == "[" && second == "]"){
        return true;
    }else if(first == "{" && second =="}"){
        return true;
    }
    return false;
}


console.log(isValidParenthesis("(()[]{}{[]})"))
