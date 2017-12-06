import React from 'react';
import MemberItem from './MemberItem.js';
export default class MemberItemPanel extends React.Component{
    
	render(){
	    let items = [];
		
		if(this.props.items.length == 0) {
		    items.push(<tr><th colSpan="5" className="tempEmpty">暂无用户</th></tr>);
		}else {
		    this.props.items.forEach(item => {
			    items.push(<MemberItem key={item.key} item={item} removeMemberItem={this.props.removeMemberItem} detailMemberItem={this.props.detailMemberItem}/>);
		    });
		}
		
		return (
		  <table className='itemPanel'>
		    <thead>
			    <th className='itemTd' style={{'background-color':'#EE82EE'}}>姓名</th>
				<th className='itemTd' style={{'background-color':'#EE82EE'}}>爱好</th>
				<th className='itemTd' style={{'background-color':'#EE82EE'}}>职业</th>
				<th className='itemTd' style={{'background-color':'#EE82EE'}}>性别</th>
				<th className='itemTd' style={{'background-color':'#EE82EE'}}>操作</th>
			</thead>
		    <tbody>{items}</tbody>
		  </table>
		);
	}
}