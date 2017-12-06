import React from 'react';
import MemberHeader from './MemberHeader.js';
import MemberItemPanel from './MemberItemPanel.js';
import MemberFooter from './MemberAdd.js';
import MemberDetail from './MemberDetail.js';

import Member from './Member.js';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            member : new Member,
            memberDetail: null
        };
    }

    //增
    addMemberItem(item){
        this.setState({
            member: this.state.member.addMemberItem(item)
        });
    }
    //删
    removeMemberItem(key){
        this.setState({
            member: this.state.member.removeMemberItem(key)
        });
    }

    //打开
    detailMemberItem(key){
        this.setState({
            memberDetail: this.state.member.member.filter(item => {
                return item.key==key;
            })[0]
        });
    }
    //关闭
    closeDetail(){
        this.setState({
            memberDetail: null
        });
    }
    //编辑
    editDetail(item){
        this.setState({
            member : this.state.member.editMemberItem(item)
        });
    }

	/*
	 * 排序
	 */
    sortMember(sortType) {
        this.setState({
            member: this.state.member.sortMember(sortType)
        });
    }

	/*
	 * 筛选
	 */
    filtMember(filtType) {
        this.setState({
            member: this.state.member.filtMember(filtType)
        });
    }

	// 搜索
    searchMember(word) {
        this.setState({
            member: this.state.member.searchMember(word)
        });
    }


    render(){
        return (
			<div>
				<MemberHeader sortMember={this.sortMember.bind(this)} filtMember={this.filtMember.bind(this)} searchMember={this.searchMember.bind(this)}/>
				<MemberItemPanel items={this.state.member.member} removeMemberItem={this.removeMemberItem.bind(this)} detailMemberItem={this.detailMemberItem.bind(this)}/>
				<MemberFooter addMemberItem={this.addMemberItem.bind(this)}/>
				<MemberDetail memberDetail={this.state.memberDetail} closeDetail={this.closeDetail.bind(this)} editDetail={this.editDetail.bind(this)}/>
			</div>
        );
    }
}

React.render(<App />, document.getElementById('app'));