// scheme functions
import colors from "./colors";
import mode from "./mode";
import values from "./values";

export default function schemeSequential(){
  
  function Scheme(){
    // data store
    this.meta = {
      colors: ["#ffffcc", "#a1dab4", "#41b6c4", "#2c7fb8", "#253494"],
      mode: "q",
      values: function(d){ return d; }
    }

    // functions
    this.colors = colors;
    this.mode = mode;
    this.values = values;
  }
  
  return new Scheme;
}