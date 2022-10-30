import {evaluate} from 'mathjs';
export const CalcButton =({button, setOperation, operation, display, setDisplay, setEgg})=> {
    const {label, id, size} = button;
    
    const calculate = (e) => {
      let pressed = e.target.value;
      
      const regex = /[0-9\.]/;
      if(pressed.match(regex)) {
          
        // update display
        if(display.indexOf('.') > 0 && pressed == '.') {
          // omit double decimal points
        } else {
          if(display == '0' || !display.match(regex) || operation.indexOf('=') > -1) {
            // remove starter zero and previous operator
            setDisplay(pressed);
          } else {
            setDisplay(display + pressed)
          }
          // update operation window
          if(operation.indexOf('=') > -1) {
              //console.log('has equal')
              setOperation(pressed);
            } else {
              setOperation(operation + pressed);
            }
        }
        
      } else if (pressed == 'AC') {
        //console.log('clear');
        setEgg(false);
        setOperation('');
        setDisplay('0');
        
      } else if (pressed == '=') {
        let statement = operation;
        
        setOperation(operation + pressed);
        // convert back to string
        let total = evaluate(statement).toString();
        if(total == '80085') {
          setEgg(true);
        } else {
          setEgg(false);
        }
        setDisplay(evaluate(statement).toString());
      } else {
        //console.log('oper')
        
        if(display != '0') {
          setDisplay(pressed);
          // handle pressing operators in tandem
          if(!display.match(regex) && pressed != '-') {
             //console.log('last:', operation[operation.length-1]);
            if(operation[operation.length-1] == '-' && !operation[operation.length-2].match(regex)) {
              //console.log('last was minus, before that was oper')
              let sliced = operation.slice(0,-1);
              sliced = sliced.slice(0,-1);
              setOperation(sliced + pressed);
            } else {
              let sliced = operation.slice(0,-1);
              setOperation(sliced + pressed);
            }
            
            
            
          } else {
           
            setOperation(operation + pressed);
          }
          
          if(operation.indexOf('=') > -1) {
            //console.log('equals', display)
            let update = display.toString() + pressed;
            //console.log('upd: ', update);
            setOperation(update);
          }
        }
        
      }
    }
    
    return(
      <button 
        id={id}
        value={label}
        className={size ? size : null}
        onClick={(e)=> calculate(e)}
      >{label}</button>
    )
  }