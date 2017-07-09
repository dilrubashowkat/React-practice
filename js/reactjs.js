var Movie = React.createClass({ 
  
edit : function()
  {
    alert('editing comment');
  },
  remove : function()
  {
     alert('deleting comment');
  },
  render : function ()
{
  return (
< div className= "container" > 
          <h3>{this.props.title}{"    "}{this.props.author} </h3>
          <button onClick={this.edit}> Edit</button>
          <button onClick={this.remove}> Delete</button>  
 </div>
  );
}
  });
ReactDOM.render(
  <div>
    <Movie title="Steve jobs biography" author="Dilruba"/>
    <Movie title="Bill gates biography" author="Dilruba"/>
    <Movie title="Zuck biography" author="Dilruba"/>
    <Movie title="Elon biography" author="Dilruba"/>
    
    </div>
  , document.getElementById('example'));
