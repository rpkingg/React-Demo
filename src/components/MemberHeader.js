import React from 'react';
export default class MemberHeader extends React.Component{

    //排序
    handlerOrderChange(){
	    let sel = React.findDOMNode(this.refs.selOrder);
		let selValue = sel.options[sel.selectedIndex].value;
		this.props.sortMember(selValue);
	}
	
	//筛选
	handlerIdChange(){
	    let sel = React.findDOMNode(this.refs.selId);
		let selValue = sel.options[sel.selectedIndex].value;
		this.props.filtMember(selValue);
	}
	
	//search
	handlerSearch(){
	    let bar = React.findDOMNode(this.refs.searchBar);
		let value = bar.value;
		this.props.searchMember(value);
	}

    render(){
	    return (
		  <div>
			  <div className="header-title">Member information</div>
			  <div className="flo-left">
				  <input ref='searchBar' onChange={this.handlerSearch.bind(this)} type='text' placeholder='Search...' />
			  </div>
		  </div>
		);
	}
}