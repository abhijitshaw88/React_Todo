import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    constructor(){
        super();
        this.state={
                Usertext:'',
                list:[],
                randomdata:'xxx'
        }
        this.addme=this.addme.bind(this);
        this.additem=this.additem.bind(this);
        this.help=this.help.bind(this);
        this.del=this.del.bind(this);
    
    }
    addme(e){
        //console.log(input);
        this.setState ({
                Usertext: e.target.value,
                randomdata : 'xxx'
        })
    }
    additem(){
        // e.preventDefault();
        //console.log(this.state.list);
        if(this.state.Usertext !== " "){
        const data=this.state.Usertext;
        // console.log(data);
        const items=[... this.state.list,data];
        this.setState({
            list : items,
            Usertext:" "
        })
        }
        console.log(this.state.list);
    }
    help(){
        //console.log(select);
        // e.preventDefault();
        const item = this.state.list;
        const randomtask = item[Math.floor(Math.random() * item.length)];
        console.log(randomtask);
        this.setState({
            randomdata:randomtask,
        })
        // return  <h1>{randomtask}</h1>;
    }
    del(val){
        let state = this.state;
        let data=this.state.list;
        console.log(data);
        var j=0;
        for(var i=0;i<data.length;i++)
        {
            if(data[i]===val){
                console.log("match",i);
                j=i;
            }
        //  console.log(data[i]);   
        }
        data.splice(j,1);
        this.state.list=data;
        // console.log("i am delete",data);
        //window.location.reload();
       // this.additem(" "); 
       this.help();
    }
    render(){
    return (
        <div className=" container-fluid hello w-75">
                <div className="card">
                        <div className="card-header text-center">
                            Make It Easy
                        </div>
                        <div className="card-body text-center">
                             <div className="">
                                <input className="form-control mb-2" type="text" placeholder="Enter task"
                                value={this.state.Usertext}
                                onChange={this.addme}/>
                                    <button 
                                        onClick={ this.additem}  className="btn btn-primary text-center">
                                        ADD
                                    </button>
                             </div>
                        </div>
                        <div className="card-footer text-muted">
                            <ul className="float-left w-100">
                                {this.state.list.map( (val)  => <li className="raw mt-3">{val}
                                <button 
                                onClick={ ()=> this.del(val)
                                    //this.del(val)
                                    // console.log("del",val)
                                    //  filteredItems=this.state.list.filter(list => val ==true );
                                    // this.state({
                                    //      list : filteredItems
                                    // });
                                 }  
                                href="#" className="btn btn-primary-lg  float-right">Del
                                </button>
                                </li>)}
                                <button href="#" className="btn btn-primary  float-right mt-3" onClick={this.help}>
                                    Refresh
                                </button>
                            </ul>
                        </div>
                </div>
                {/* <List name={this.state.list}/> */}
                <div className="card mt-5">
                    <h5 className="card-header text-center">NEED HELP?</h5>
                    <div className="card-body text-center">
                        <button onClick={this.help} href="#" className="btn btn-primary">
                            Help Me
                        </button>
                        <h4 className="mt-3">
                            <ul className="float-left">
                                <li className="">Do: {this.state.randomdata}</li>
                            </ul>
                        </h4>
                    </div>
                </div>
         </div>
    );
 }
}

export default Todo;
