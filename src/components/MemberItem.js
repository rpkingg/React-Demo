import React from 'react';
export default class MemberItem extends React.Component{
	
	//delete
	handlerDelete(evt){
	    this.props.removeMemberItem(this.props.item.key);
	}
	
	//detail
	handlerDetail(evt){
	    this.props.detailMemberItem(this.props.item.key);
	}
	
	render(){
		return (
			  <tr
				style={{'cursor': 'pointer','background-color':'#EEEEE0'}}
			  >
				<td className='itemTd'>{this.props.item.info.name}</td>
				<td className='itemTd'>{this.props.item.info.like}</td>
				<td className='itemTd'>{this.props.item.info.id}</td>
				<td className='itemTd'>{this.props.item.info.sex}</td>
				<td className='itemTd'>
					<a className="itemBtn" onClick={this.handlerDelete.bind(this)}>删除</a>
				    <a className="itemBtn" onClick={this.handlerDetail.bind(this)} style={{'margin-left':'10px','color':'blue'}}>详情</a>
				</td>
			  </tr>
		);
	}
}