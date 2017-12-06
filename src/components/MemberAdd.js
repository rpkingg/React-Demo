import React from 'react';
export default class MemberFooter extends React.Component{

    handlerAddClick(evt){
        evt.preventDefault();
        let item = {};
        let addForm = React.findDOMNode(this.refs.addForm);
        let sex = addForm.querySelector('#memberAddSex');
        let id = addForm.querySelector('#memberAddId');

        item.name = addForm.querySelector('#memberAddName').value.trim();
        item.like = addForm.querySelector('#memberAddLike').value.trim();
        item.descrip = addForm.querySelector('#memberAddDescrip').value.trim();
        item.sex = sex.options[sex.selectedIndex].value;
        item.id = id.options[id.selectedIndex].value;

		/*
		 *表单验证
		 */
        if(item.name=='' || item.like=='' || item.descrip=='') {
            let tips = React.findDOMNode(this.refs.tipsUnDone);
            tips.style.display = 'block';
            setTimeout(function(){
                tips.style.display = 'none';
            }, 1000);
            return;
        }

        this.props.addMemberItem(item);
        addForm.reset();
        let tips = React.findDOMNode(this.refs.tips);
        tips.style.display = 'block';
        setTimeout(function(){
            tips.style.display = 'none';
        }, 1000);
    }

    render(){
        return (
			<div style={{'float':'left'}}>
				<div style={{'text-align':'center','float':'right','margin':'37px 0 0 30px'}}>add man</div>
				<form ref='addForm' className="addForm" style={{'float':'left','margin-left': '60px'}}>
					<div style={{'float':'left'}}>
						<div>
							<label for='memberAddName' style={{'display': 'block'}}>姓名</label>
							<input ref='addName' id='memberAddName' type='text' placeholder='Your Name'/>
						</div>
						<div>
							<label for='memberAddLike' style={{'display': 'block'}}>爱好</label>
							<input ref='addLike' id='memberAddLike' type='text' placeholder='随便填~'/>
						</div>
					</div>
					<div style={{'float':'left','margin-left': '30px'}}>
						<div>
							<label for='memberAddSex' style={{'display': 'block'}}>性别</label>
							<select ref='addSex' id='memberAddSex'>
								<option value='男'>男</option>
								<option value='女'>女</option>
							</select>
						</div>
						<div>
							<label for='memberAddId' style={{'display': 'block'}}>职业</label>
							<select ref='addId' id='memberAddId'>
								<option value='H5'>H5</option>
								<option value='IOS'>IOS</option>
								<option value='UI'>UI</option>
								<option value='Java'>Java</option>
							</select>
						</div>
					</div>
					<div style={{'clear':'both'}}>
						<label for='memberAddDescrip' style={{'display': 'block'}}>个人描述</label>
						<textarea ref='addDescrip' id='memberAddDescrip' type='text'></textarea>
					</div>
					<p ref="tips" className='tips' >提交成功</p>
					<p ref='tipsUnDone' className='tips'>信息写完整</p>
					<div>
						<button onClick={this.handlerAddClick.bind(this)}>提交</button>
					</div>
				</form>
			</div>
        )
    }
}